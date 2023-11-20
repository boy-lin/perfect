/*
 * @Overview     : Do not edit
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:57:06
 * @LastEditTime : 2021-02-23 11:20:22
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\methods\interface.ts
 * @Mark         : Do not edit
 */

/* 微信授权 参数对象 */
export interface IWxAuth {
  appId: string;
  redirectUrl: string;
  url: string;
}

/* returnLeftTime 返回对象 */
export interface ILeftTime {
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
