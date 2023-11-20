/*
 * @Overview     : Init event
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 17:19:51
 * @LastEditTime : 2021-03-19 10:15:14
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\events\init.ts
 * @Mark         : Do not edit
 */

// 禁止双指/双击放大
document.addEventListener('gesturestart', event => {
  event.preventDefault();
});
document.addEventListener('touchstart', event => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});
