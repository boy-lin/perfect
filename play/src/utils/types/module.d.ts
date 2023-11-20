/*
 * @Overview     : Do not edit
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-22 15:59:26
 * @LastEditTime : 2021-03-10 16:16:22
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\types\module.d.ts
 * @Mark         : 主要维护比较详细的外部模块
 */

// Add declarations for all .vue files
declare module '*.vue' {
  import type { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

// Property 'xxx' does not exist on type 'Window & typeof globalThis'.(2339)
// other method: (window as any).xxx
declare interface Window {
  $config: any;
  WebViewJavascriptBridge: any;
  WVJBCallbacks: any;
}

declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    NODE_ENV?: string;
  }
}
declare const process: NodeJS.Process;

declare module 'js-cookie';

declare module 'weixin-js-sdk';

declare module 'vant/es/locale/lang/en-US';
declare module 'vant/es/locale/lang/zh-CN';
declare module 'vant/es/locale/lang/zh-HK';
declare module '@/utils/methods/storage';
declare module '@/utils/enums';
declare module '@/lang';

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
