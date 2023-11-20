/*
 * @Overview     : Validate
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:58:45
 * @LastEditTime : 2021-03-18 10:53:30
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\validate.ts
 * @Mark         : Do not edit
 */

import { getBrowser } from "@/utils/methods/common";

const is = (val: unknown, type: string): boolean => {
  return toString.call(val) === `[object ${type}]`;
};

/**
 * @description: 是否为测试环境
 * @return {boolean}
 */
export const IS_DEV: boolean = ["development", "develop", "dev"].includes(
  process.env.NODE_ENV || ""
);

/**
 * @description 是否为生产环境
 * @return {boolean}
 */
export const IS_PROD: boolean = ["production", "prod"].includes(
  process.env.NODE_ENV || ""
);

/**
 * @description: 是否是对象
 * @param {unknown} val 判断值
 * @return {boolean}
 */
export const isObject = (val: unknown): boolean => {
  return val !== null && is(val, "Object");
};

/**
 * @description 判断对象是否为空
 * @param {Object} obj 判断对象参数
 * @returns {boolean}
 */
export const isEmptyObj = (obj: Record<string, unknown>): boolean => {
  return JSON.stringify(obj) === "{}" || obj === null || obj === undefined;
};

/**
 * @description 判断数组是否为空
 * @param {Array} arr 判断数组参数
 * @return {boolean}
 */
export const isEmptyArray = (arr: unknown[]): boolean => !arr.length;

/**
 * @description 判断是否为布尔型
 * @param {Array} arr 判断参数
 * @return {boolean}
 */
export const isBoolean = (val: unknown): boolean => typeof val === "boolean";

/**
 * @description 判断是否是超链接
 * @param {String} str 处理的字符串
 * @return {boolean}
 */
export const isHttps = (str: string): boolean => {
  const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;
  return reg.test(str);
};

/**
 * @description 校验密码是否小于6位
 * @param {String} str 处理的字符串
 * @returns {boolean}
 */
export const isPassword = (str: string): boolean => {
  return str.length >= 6;
};

/**
 * @description 判断是否是合法的手机号
 * @param {String} str 处理的字符串
 * @return {boolean}
 */
export const isMobile = (str: string): boolean => {
  const reg = /^1\d{10}$/;
  return reg.test(str);
};

/**
 * @description 判断是否是合法的邮箱
 * @param {String} str 处理的字符串
 * @return {boolean}
 */
export const isEmail = (str: string): boolean => {
  const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  return reg.test(str);
};

/**
 * @description 判断是否是合法的省份证号
 * @param {String} str 处理的字符串
 * @return {boolean}
 */
export const isIdCardNo = (str: string): boolean => {
  const reg = /^([0-9]){7,18}([xX])?$/;
  return reg.test(str);
};

/**
 * @description 判断是否是合法的微信号
 * @param {String} str 处理的字符串
 * @return {boolean}
 */
export const isWeChatNo = (str: string): boolean => {
  const reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
  return reg.test(str);
};

/**
 * @description 判断是否为空
 * @param {String} str 处理的字符串
 * @returns {boolean}
 */
export const isBlank = (str: string): boolean => {
  return (
    str === null ||
    false ||
    str === "" ||
    str.trim() === "" ||
    str.toLocaleLowerCase().trim() === "null"
  );
};

/**
 * @description: 判断屏幕是否为全面屏
 * @return {*} boolean
 */
export const isAndroidFullScreen = (): boolean => {
  let result = false;
  const rate = window.screen.height / window.screen.width;
  const limit = window.screen.height === window.screen.availHeight ? 1.8 : 1.65; // 临界判断值
  if (rate > limit) {
    result = true;
  }
  return result;
};

/**
 * @description 判断是否在app或在微信中,可用于判断顶部导航栏是否显示
 */
export const isAppOrWx: boolean = getBrowser().isApp || getBrowser().isWeChat;
