/*
 * @Overview     : Axios Transform
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:55:17
 * @LastEditTime : 2021-02-23 10:55:39
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\axios\axios-transform.ts
 * @Mark         : Do not edit
 */

import type {
  IRequestOptions,
  IAxiosRequestConfig,
  IAxiosResponse,
} from './interface';

export abstract class AxiosTransform {
  /**
   * 请求之前，处理请求参数
   */
  public beforeRequest?: (
    config: IAxiosRequestConfig,
    options: IRequestOptions
  ) => IAxiosRequestConfig;
  /**
   * 请求成功，处理数据
   */
  public transformRequestData?: (
    res: IAxiosResponse,
    options: IRequestOptions
  ) => any;
  /**
   * 请求失败，处理数据
   */
  public requestCatch?: (e: Error) => Promise<any>;
  /**
   * 请求之前，数据拦截器
   */
  public requestInterceptors?: (
    config: IAxiosRequestConfig
  ) => IAxiosRequestConfig;
  /**
   * 请求之后，数据拦截器
   */
  public responseInterceptors?: (res: IAxiosResponse) => any;
  /**
   * 请求之前的拦截器错误处理
   */
  public requestInterceptorsCatch?: (error: Error) => void;
  /**
   * 请求之后的拦截器错误处理
   */
  public responseInterceptorsCatch?: (error: Error) => void;
}
