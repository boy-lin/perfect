/*
 * @Overview     : Do not edit
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-22 15:59:14
 * @LastEditTime : 2021-02-23 09:36:27
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\types\declarations.d.ts
 * @Mark         : 主要维护简写模式的模块（包括内部需要声明的 .js 文件，兼容历史遗留问题）
 */

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

declare interface IObject<T = any> {
  [key: string]: T;
  [key: number]: T;
}

export type State = {
  [str in string | number]: any;
};
