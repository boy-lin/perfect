/*
 * @Overview     : Weixin interface
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 17:24:42
 * @LastEditTime : 2021-02-23 17:25:05
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\weixin\interface.ts
 * @Mark         : Do not edit
 */

/* 获取微信配置接口参数 */
export interface IGetWXConfig {
  url: string;
}

/* 微信配置 */
export interface IWXData {
  debug?: boolean;
  appId: string;
  timestamp: string | number;
  nonceStr: string;
  signature: string;
  jsApiList: string[];
}

/* 微信分享配置 */
export interface IWXShareData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  success: () => unknown;
  cancel: () => unknown;
}

/* 微信分享额外信息 */
export interface IWXShareOptions {
  showMenu?: boolean;
  showItems?: boolean;
  hideItems?: boolean;
}
