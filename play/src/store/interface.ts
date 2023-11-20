/*
 * @Overview     : Store Interface
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 09:27:53
 * @LastEditTime : 2021-03-05 13:30:49
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\store\interface.ts
 * @Mark         : Do not edit
 */

/* app state */
export interface IAppState {
  fixedNavBar?: boolean;
  fixedTabBar?: boolean;
  showVConsole?: boolean;
}

/* user state */
export interface IUserState {
  userInfo?: Record<string, unknown> | undefined;
  accessToken?: string | undefined;
}
