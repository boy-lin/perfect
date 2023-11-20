/*
 * @Overview     : Axios Interface
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:51:54
 * @LastEditTime : 2021-03-17 10:30:16
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\axios\interface.ts
 * @Mark         : Do not edit
 */

import {
  AxiosRequestConfig,
  Canceler,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

export type IAxiosRequestConfig = AxiosRequestConfig;
export type ICanceler = Canceler;
export type IAxiosInstance = AxiosInstance;
export type IAxiosResponse = AxiosResponse;

/* 自定义请求钩子函数 */
abstract class AxiosTransform {
  /**
   * 请求之前，处理请求参数
   */
  beforeRequest?: (
    config: AxiosRequestConfig,
    options: IRequestOptions
  ) => AxiosRequestConfig;
  /**
   * 请求之前，数据拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  /**
   * 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;
  /**
   * 请求成功，处理数据
   */
  transformRequestData?: (res: AxiosResponse, options: IRequestOptions) => any;
  /**
   * 请求之后，数据拦截器
   */
  responseInterceptors?: (res: AxiosResponse) => any;
  /**
   * 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
  /**
   * 请求失败，处理数据
   */
  requestCatch?: (e: Error) => Promise<any>;
}

/* 请求的自定义额外参数 */
export interface IRequestOptions {
  // 是否隐藏接口请求loading
  isHideRequestLoading?: boolean;
  // loading文字
  loadingText?: string;
  // 是否忽略重复请求
  isIgnoreCancelToken?: boolean;
  // 是否处理请求结果
  isTransformRequestResult?: boolean;
  // 错误消息提示类型
  errorMessageMode?: string;
}

/* 自定义创建axios参数 */
export interface ICreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: IRequestOptions;
}

/* 上传文件参数 */
export interface IUploadFileParams {
  data?: { [key: string]: any };
  name?: string;
  file: File | Blob;
  filename?: string;
  [key: string]: any;
}
