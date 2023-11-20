import axios from "axios";
import type {
  ICreateAxiosOptions,
  IRequestOptions,
  IUploadFileParams,
  IAxiosRequestConfig,
  IAxiosInstance,
  IAxiosResponse,
} from "./interface";
import { AxiosCanceler } from "./axios-cancel";
import { ContentTypeEnum, RequestEnum } from "@/utils/enums";
const axiosCanceler = new AxiosCanceler();

export class VAxios {
  private axiosInstance: IAxiosInstance;
  private readonly options: ICreateAxiosOptions;

  constructor(options: ICreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description: 文件上传
   * @param {IAxiosRequestConfig} config axios请求配置项
   * @param {IUploadFileParams} params 文件上传参数
   * @return {*}
   */
  public uploadFile<T = any>(
    config: IAxiosRequestConfig,
    params: IUploadFileParams,
    options?: IRequestOptions
  ) {
    const formData = new FormData();
    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        if (!params.data) {
          return;
        }
        const value = params.data[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }
        formData.append(key, params.data[key]);
      });
    }
    formData.append(params.name || "file", params.file, params.filename);
    const { requestOptions } = this.options;
    const opt: IRequestOptions = { ...requestOptions, ...options };
    const transform = this.getTransform();
    const { beforeRequest } = transform || {};
    beforeRequest && beforeRequest(config, opt);

    return this.axiosInstance.request<T>({
      ...config,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": ContentTypeEnum.FORM_DATA,
      },
    });
  }

  /**
   * @description: 请求方法
   * @param {IAxiosRequestConfig} config axios请求配置项
   * @param {IRequestOptions} options 自定义额外配置项
   * @return {*}
   */
  public request<T = any>(
    config: IAxiosRequestConfig,
    options?: IRequestOptions
  ): Promise<T> {
    const { requestOptions } = this.options;
    // get请求，兼容用 data 兼容形式书写
    if ((config as any).method.toLocaleUpperCase() === RequestEnum.GET) {
      config.params = config.params || config.data;
      delete config.data;
    } else if (
      (config as any).method.toLocaleUpperCase() === RequestEnum.POST
    ) {
      config.data = config.data || config.params;
      delete config.params;
    }
    const opt: IRequestOptions = { ...requestOptions, ...options };
    const transform = this.getTransform();
    const { beforeRequest, requestCatch, transformRequestData } =
      transform || {};
    // axios勾子函数，请求之前，处理请求参数，单独抽离
    beforeRequest && beforeRequest(config, opt);
    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .request<any, IAxiosResponse>(config)
        .then((res: IAxiosResponse) => {
          // axios勾子函数，请求成功，处理数据，单独抽离
          if (transformRequestData) {
            const ret = transformRequestData(res, opt);
            resolve(ret);
            return;
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error) => {
          // axios勾子函数，请求失败，处理数据，单独抽离
          if (requestCatch) {
            reject(requestCatch(e));
            return;
          }
          reject(e);
        });
    });
  }

  /**
   * 获取额外参数的数据处理
   */
  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  /**
   * 拦截器配置
   */
  /**
   * @description: 拦截器配置
   * @return {*}
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform;

    this.axiosInstance.interceptors.request.use(
      (config: IAxiosRequestConfig) => {
        // 如果配置项中不忽略重复请求，则需要处理重复请求
        const {
          headers: { ignoreCancelToken } = { ignoreCancelToken: false },
        } = config;
        !ignoreCancelToken && axiosCanceler.addPending(config);
        // axios函数，请求之前，数据拦截器，单独抽离
        if (requestInterceptors) {
          return requestInterceptors(config);
        } else {
          return config;
        }
      },
      (error: Error) => {
        // axios函数，请求之前的拦截器错误处理，单独抽离
        if (requestInterceptorsCatch) {
          return requestInterceptorsCatch(error);
        }
      }
    );

    this.axiosInstance.interceptors.response.use(
      (res: IAxiosResponse) => {
        // 请求成功，删除pendingMap中的此请求
        const { config } = res;
        config && axiosCanceler.removePending(config);
        // axios函数，请求之后，数据拦截器，单独抽离
        if (responseInterceptors) {
          return responseInterceptors(res);
        } else {
          return res;
        }
      },
      (error: Error) => {
        if (axios.isCancel(error)) {
          return new Promise(() => {
            // do catch
          });
        }
        // axios函数，请求之后的拦截器错误处理，单独抽离
        if (responseInterceptorsCatch) {
          return responseInterceptorsCatch(error);
        }
      }
    );
  }
}
