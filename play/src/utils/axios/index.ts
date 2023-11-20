import { VAxios } from "./axios";
import {
  IAxiosRequestConfig,
  IAxiosResponse,
  ICreateAxiosOptions,
  IRequestOptions,
} from "./interface";
import { AxiosTransform } from "./axios-transform";
import { ContentTypeEnum, RequestEnum } from "@/utils/enums";
import { deepMerge } from "@/utils/methods/common";
import { Toast } from "vant";
import { networkError, ERROR_CODE } from "./axios-error";
import { pendingMap } from "./axios-cancel";
import { IS_DEV } from "@/utils/validate";

if (!window.$config) {
  window.$config = {
    axios: {
      timeout: 10 * 1000
    }
  };
}

const LOADING_OPTIONS = {
  message: "加载中...",
  forbidClick: true,
  duration: 0,
  loadingType: "spinner",
};

const transform: AxiosTransform = {
  // 请求之前，处理请求参数
  beforeRequest: (config: IAxiosRequestConfig, options: IRequestOptions) => {
    // 加载请求处理
    return config;
  },

  requestInterceptors: (config: IAxiosRequestConfig) => {
    // post请求适配Content-Type
    const method = (config as any).method.toLocaleUpperCase();
    const cType = config.headers["Content-Type"];

    if (
      method === RequestEnum.POST ||
      method === RequestEnum.PUT ||
      method === RequestEnum.DELETE
    ) {
      switch (cType) {
        case ContentTypeEnum.RAW:
          config.data && (config.data = JSON.stringify(config.data));
          break;
        default:
          break;
      }
    }
    return config;
  },

  responseInterceptors: (response: IAxiosResponse) => {
    !pendingMap.size && Toast.clear();
    // status为200,返回数据处理
    // 以下为针对性数据处理
    const {
      data: { code, msg },
    } = response;
    if (Number(code) === 200) {
      return response.data;
    } else {
      switch (code) {
        case 405:
          Promise.reject(new Error('nginx 405 Not Allowed'));
          break;
        default:
          Toast.fail(msg);
          return Promise.reject(new Error(msg));
      }
    }
  },

  responseInterceptorsCatch: (error: any) => {
    // 请求所得到的响应的状态码超出了2xx | 请求完全得不到响应
    !pendingMap.size && Toast.clear();
    if (error.response) {
      const { status } = error.response;
      const msg = ERROR_CODE.find((e) => e.code === status).msg || "";
      msg ? Toast.fail(msg) : networkError(error.message);
    } else {
      networkError(error.message);
    }
    return Promise.reject(error);
  },
};

/**
 * @description: 用于封装默认值
 * @param {Partial} opt 优先取值对象，包含axios配置和自定义配置,默认为undefined
 * @return {*}
 */
const createAxios = (opt?: Partial<ICreateAxiosOptions>) => {
  let baseUrl;
  if (IS_DEV) {
    baseUrl = import.meta.env.VITE_API_URL;
  } else {
    baseUrl = window.$config.baseApiUrl || import.meta.env.VITE_API_URL;
  }
  console.debug("baseUrl", import.meta.env);
  console.debug("baseUrl", window.$config);

  return new VAxios(
    deepMerge(
      {
        timeout: window.$config.axios.timeout,
        baseURL: baseUrl || "",
        headers: {
          "Content-Type": ContentTypeEnum.RAW
        },
        transform,
        requestOptions: {
          isIgnoreCancelToken: false,
          isHideRequestLoading: true,
        },
      },
      opt || {}
    )
  );
};

export const packAxios = createAxios();
