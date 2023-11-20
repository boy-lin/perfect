/*
 * @Overview     : Common Methods
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:56:17
 * @LastEditTime : 2021-03-19 14:33:53
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\methods\common.ts
 * @Mark         : Do not edit
 */

import { IS_DEV, isObject } from "../validate";

/*********************************** String **************************************/

/**
 * @description: 获取文件后缀名
 * @param {string} filePath file地址
 * @return {string} 文件后缀
 * @example 'https://baidu.com/file/123.mp4' => 'mp4'
 */
export const getFileType = (filePath: string): string => {
  const startIndex: number = filePath.lastIndexOf(".");
  if (startIndex !== -1) {
    return filePath.substring(startIndex + 1, filePath.length).toLowerCase();
  } else {
    return "";
  }
};

/**
 * @description: 解析url参数，转换为参数对象模式
 * @param {string} url url地址 default: window.location.href
 * @return {object} 参数对象
 * @example '?id=12345&a=b' => {id:12345, a:b}
 */
export const parseQueryString = (url?: string): Record<string, unknown> => {
  const newUrl = !url ? window.location.href : url;
  if (newUrl.indexOf("?") === -1) {
    return {};
  }
  const search: string =
    newUrl[0] === "?"
      ? newUrl.substr(1)
      : newUrl.substring(newUrl.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  const newSearch: string[] = search.split("&");
  const query: Record<string, unknown> = {};
  for (let i = 0, len = newSearch.length; i < len; i++) {
    const pair: string[] = newSearch[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

/*********************************** Number **************************************/

/**
 * @description: 格式化手机号为 3-4-4结构
 * @param {string} v 输入连续字符或数字
 * @return {string} 格式化数字
 * @example '12 345654444' => '123 4565 4444'
 */
export const formatPhoneNum = (v: string): string => {
  const removeAllSpace = (v: string) => v.replace(/\s+/g, "");
  const _v: string = removeAllSpace(v);
  let res = "";
  if (isNaN(Number(_v))) {
    return v;
  } else {
    if (_v.length >= 3 && _v.length <= 7) {
      const FIRST_PART = _v.substr(0, 3);
      const SECOND_PART = _v.substr(3);
      res = FIRST_PART + " " + SECOND_PART;
    } else if (_v.length > 7) {
      const FIRST_PART = _v.substr(0, 3);
      const SECOND_PART = _v.substr(3, 4);
      const THIRD_PART = _v.substr(7);
      res = FIRST_PART + " " + SECOND_PART + " " + THIRD_PART;
    }
    return res;
  }
};

/**
 * @description: 金钱“,”格式处理，保留n位小数
 * @param {string | number} s 需要处理的数
 * @param {string | number} n 需要保留的小数位数, 默认2位小数
 * @return {*}
 */
export const formatMoney = (s: string | number, n: string | number): string => {
  if (!s && s !== 0) {
    return "0.00";
  }
  if (isNaN(+s)) {
    return "0.00";
  }
  const num = Number(n) || 2;
  const arr = (s + "").split(".");
  const intStr = arr[0] ? arr[0] : 0;
  let floatStr = arr[1] ? arr[1] : 0;
  if (floatStr === 0) {
    floatStr = "0";
    for (let i = 0; i < num - 1; i++) {
      floatStr += "0";
    }
  } else {
    floatStr = (+("0." + floatStr)).toFixed(num).split(".")[1];
  }
  return (intStr + "." + floatStr).replace(/(\d{1,3})(?=(?:\d{3})+\.)/g, "$1,");
};

/**
 * @description: 强制保留n位小数
 * @param {number} value
 * @param {number} n
 * @return {*}
 */
export const returnFloat = (value: number, n: number): string | number => {
  const v = Math.round(value * 100) / 100;
  const xsd = v.toString().split(".");
  let res;
  if (xsd.length === 1) {
    res = v.toString() + "." + "0".repeat(n);
    return res;
  } else if (xsd.length > 1) {
    if (xsd[1].length < n) {
      res = v.toString() + "0";
    } else {
      res = "";
    }
    return res;
  } else {
    return value;
  }
};

/**
 * @description: 格式化百分比
 * @param {number} value 被格式数值
 * @param {number} n 保留小数位
 * @return {*}
 */
export const formatPercent = (value: number, n: number = 1): string => {
  return (value * 100).toFixed(n) + "%";
};

/*********************************** Browser **************************************/

/**
 * @description: 获取客户端类型
 * @return {boolean} {isQQBrowser: boolean}
 * @example getBrowser().isIos => false
 */
export function getBrowser() {
  const ua = window.navigator.userAgent || "";
  const isAndroid = /android/i.test(ua);
  const isIos = /iphone|ipad|ipod/i.test(ua);
  const isWeChat = /micromessenger\/([\d.]+)/i.test(ua);
  const isWXProgram = /miniprogram\/([\d.]+)/i.test(ua);
  const isWeibo = /(weibo).*weibo__([\d.]+)/i.test(ua);
  const isQQ = /qq\/([\d.]+)/i.test(ua);
  const isQQBrowser = /(qqbrowser)\/([\d.]+)/i.test(ua);
  const isQZone = /qzone\/.*_qz_([\d.]+)/i.test(ua);
  const isOriginalChrome =
    /chrome\/[\d.]+ Mobile Safari\/[\d.]+/i.test(ua) && isAndroid;
  const isSafari =
    /safari\/([\d.]+)$/i.test(ua) &&
    isIos &&
    ua.indexOf("Crios") < 0 &&
    ua.indexOf("Mozilla") === 0;
  const isApp =
    ua.indexOf("platform=ios") > -1 || ua.indexOf("platform=android") > -1;
  // const isWX = /micromessenger/.test(ua.toLocaleLowerCase());
  return {
    isAndroid,
    isIos,
    isWeChat,
    isWXProgram,
    isWeibo,
    isQQ,
    isQQBrowser,
    isQZone,
    isOriginalChrome,
    isSafari,
    isApp,
  };
}

/*********************************** Others **************************************/
/**
 * @description: 合并对象
 * @param {any} src 原对象
 * @param {any} target 模板对象
 * @return {object}
 */
export const deepMerge = (src: any, target: any): any => {
  let key: string;
  for (key in target) {
    if (target.key) {
      src[key] = isObject(src[key])
        ? deepMerge(src[key], target[key])
        : (src[key] = target[key]);
    }
  }
  return src;
};

/**
 * @description: 给元素设置overflow属性
 * @param {HTMLElement} el 属性值
 * @param {string} str 标识符
 */
export const setOverFlow = (el: HTMLElement, str?: string): void => {
  if (str) {
    el.style.setProperty("overflow", "hidden");
  } else {
    el.style.removeProperty("overflow");
  }
};

/**
 * @description: 获取元素
 * @param {string} el 元素符号
 * @return {HTMLElement} 元素
 */
export const getEl = (el: string): HTMLElement => {
  return document.querySelector(el) as HTMLElement;
};

/**
 * @description: 枚举转数组
 * @param {Enumerator} enums 枚举项
 * @return {*}
 */
export const enumToArray = (enums: any): string[] => {
  const res: string[] = [];
  for (const key in enums) {
    res.push((enums as never)[key]);
  }
  return res;
};
/**
 * 防抖
 * @param fn
 * @param wait
 * @returns
 */
export function debounce(fn: Function, wait: number) {
  var timer: any;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn(args);
    }, wait);
  };
}

/**
 *
 * @param dataurl
 * @param filename
 * @returns
 */
export function dataURLtoFile(dataurl: string, filename: string) {
  //将base64转换为文件
  var arr = dataurl.split(","),
    mime = (arr[0] as any).match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
