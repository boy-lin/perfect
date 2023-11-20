/*
 * @Overview     : Store Index
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-20 14:27:49
 * @LastEditTime : 2021-02-24 15:00:24
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\store\index.ts
 * @Mark         : Do not edit
 */
import { createStore } from 'vuex';

const modules = import.meta.globEager('./modules/*.ts');
const storeModules: any = {};
Object.keys(modules).forEach(key => {
  if (key.includes('_')) return;
  (storeModules as any)[key.replace(/(.*\/)*([^.]+).*/gi, '$2')] =
    modules[key].default;
});

export default createStore({
  modules: storeModules,
  strict: true,
});
