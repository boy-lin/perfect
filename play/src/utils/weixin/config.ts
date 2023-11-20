/*
 * @Overview     : Config
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 17:24:09
 * @LastEditTime : 2021-02-23 17:25:31
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\weixin\config.ts
 * @Mark         : Do not edit
 */

import { IWXShareData } from './interface';

/* 后端返回的微信配置字段名称 */
export const WX_CONFIG_NAME = 'wx_config';

/* 设置默认的分享信息 */
export const DEFAULT_SHARE_DATA: IWXShareData = {
  title: '默认标题',
  desc: '默认描述',
  link: location.href,
  imgUrl: '/public/resources/images/logo.png',
  success: () => {},
  cancel: () => {},
};

/* 默认的api列表 */
export const DEFAULT_API_LIST = [
  'updateAppMessageShareData',
  'updateTimelineShareData',
  'hideMenuItems',
  'showMenuItems',
  'closeWindow',
  'hideOptionMenu',
  'showOptionMenu',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'previewImage',
];

/* 默认分享需要隐藏的平台 */
export const DEFAULT_HIDE_MENU = [
  'menuItem:share:qq',
  'menuItem:share:weiboApp',
  'menuItem:share:facebook',
  'menuItem:share:QZone',
];

/* 默认分享的平台 */
export const DEFAULT_SHOW_MENU = [
  'menuItem:share:appMessage',
  'menuItem:share:timeline',
  'menuItem:favorite',
];
