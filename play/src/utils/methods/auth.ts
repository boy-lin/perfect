/*
 * @Overview     : Auth
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:56:45
 * @LastEditTime : 2021-02-23 10:57:50
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\methods\auth.ts
 * @Mark         : Do not edit
 */

import { IWxAuth } from './interface';

/**
 * @description 微信获取用户信息授权
 * @param config {Object} 授权参数对象
 * ！ 注意 [redirectUrl]和[url]参数传入前需要对字符串进行encodeURIComponent(xxx)处理
 */
/**
 * @description:
 * @param {*} config
 * @return {*}
 */
export const wxAuth = (config: IWxAuth) => {
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${config.redirectUrl}&response_type=code&scope=snsapi_userinfo&state=${config.url}#wechat_redirect`;
};
