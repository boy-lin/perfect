/*
 * @Overview     : Storage
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-22 11:26:31
 * @LastEditTime : 2021-02-24 10:41:06
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\methods\storage.ts
 * @Mark         : Do not edit
 */

import Cookie from 'js-cookie';
import { StorageType } from '@/utils/enums';

/**
 * @description: 获取key
 * @param {string} key key值
 * @param {string} storage 存储类型
 * @return {*}
 */
export const getStorage = (
  key: string,
  storage?: string | null
): string | null => {
  let value;
  switch (storage) {
    case StorageType.COOKIE:
      value = Cookie.get(key);
      break;
    case StorageType.SESSION_STORAGE:
      value = sessionStorage.getItem(key);
      break;
    case StorageType.LOCAL_STORAGE:
      value = localStorage.getItem(key);
      break;
    default:
      value = localStorage.getItem(key);
      break;
  }
  return value;
};

/**
 * @description: 设置key
 * @param {string} key key值
 * @param {any} value value值
 * @param {string} storage 存储类型
 * @return {*}
 */
export const setStorage = (
  key: string,
  value: any,
  storage?: string | null
): void => {
  switch (storage) {
    case StorageType.COOKIE:
      Cookie.set(key, value);
      break;
    case StorageType.SESSION_STORAGE:
      sessionStorage.setItem(key, value);
      break;
    case StorageType.LOCAL_STORAGE:
      localStorage.setItem(key, value);
      break;
    default:
      localStorage.setItem(key, value);
      break;
  }
};

/**
 * @description: 删除key(单项)
 * @param {string} key key值
 * @param {string} storage 存储类型
 * @return {*}
 */
export const deleteStorage = (key: string, storage?: string | null): void => {
  switch (storage) {
    case StorageType.COOKIE:
      Cookie.remove(key);
      break;
    case StorageType.SESSION_STORAGE:
      sessionStorage.removeItem(key);
      break;
    case StorageType.LOCAL_STORAGE:
      localStorage.removeItem(key);
      break;
    default:
      localStorage.removeItem(key);
      break;
  }
};

/**
 * @description: 清空key
 * @return {*}
 */
export const clearAllStorage = (): void => {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
    }
  }
  sessionStorage.clear();
  localStorage.clear();
};
