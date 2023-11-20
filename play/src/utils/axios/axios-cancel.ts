/*
 * @Overview     : Axios Cancel
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:53:16
 * @LastEditTime : 2021-03-19 21:28:11
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\axios\axios-cancel.ts
 * @Mark         : Do not edit
 */

import axios from 'axios';
import type { IAxiosRequestConfig, ICanceler } from './interface';

// 用于存储每个请求的标识
export let pendingMap = new Map<string, ICanceler>();

export class AxiosCanceler {
  /**
   * 获取
   */
  private static getPendingUrl(config: IAxiosRequestConfig): string {
    return [config.method, config.url].join('&');
  }
  /**
   * 添加请求
   */
  public addPending(config: IAxiosRequestConfig): void {
    this.removePending(config);
    const url = AxiosCanceler.getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        // 如果pendingMap中不存在当前请求，则添加进入
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * 移除请求
   */
  public removePending(config: IAxiosRequestConfig): void {
    const url = AxiosCanceler.getPendingUrl(config);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * 清空请求
   */
  public removeAllPending(): void {
    pendingMap.forEach(cancel => {
      cancel && cancel();
    });
    pendingMap.clear();
  }

  /**
   * 重置pendingMap
   */
  public reset(): void {
    pendingMap = new Map<string, ICanceler>();
  }
}
