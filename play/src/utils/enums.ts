/*
 * @Overview     : Enums
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-22 11:28:28
 * @LastEditTime : 2021-03-17 10:45:08
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\enums.ts
 * @Mark         : Do not edit
 */

/* ********************** app setting ************************ */

// 存储类型
export enum StorageType {
  COOKIE = 'cookie',
  SESSION_STORAGE = 'sessionStorage',
  LOCAL_STORAGE = 'localStorage',
}

/* ********************** axios ************************ */

// 请求方法
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

// 网络错误类型
export enum NetworkErrorEnum {
  ERROR = 'Network Error',
  TIMEOUT = 'timeout',
}

// 请求Content类型
export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  FORM_UNLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  RAW = 'application/json;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

// 弹窗类型
export enum ErrorMessageModeEnum {
  NONE = 'none',
  MODEL = 'model',
}
