/*
 * @Overview     : Date
 * @Author       : Zi Jun
 * @Email        : zijun2030@163.com
 * @Date         : 2021-02-23 10:56:25
 * @LastEditTime : 2021-02-23 17:21:57
 * @LastEditors  : Zi Jun
 * @FilePath     : \simple-vite\src\utils\methods\date.ts
 * @Mark         : Do not edit
 */

import { ILeftTime } from './interface';
// import dayjs from 'dayjs'

/**
 * @description 倒计时计算年，天，时，分，秒
 * @param {number | string} targetTime 目标时间（将来的设定时间）
 * @param {number | string} startTime 开始时间（一般为现在时间）
 * @return {{years: *, days: *, hours: *, minutes: *, seconds: *}} 返回对象
 */
export const returnLeftTime = (
  targetTime: number | string,
  startTime: number | string
): ILeftTime | undefined => {
  function checkTime(i: number) {
    let str = '';
    if (i < 10) {
      str = '0' + i;
    }
    return String(str);
  }
  const currTime = startTime || new Date().getTime();
  const leftTime = Number(targetTime) - Number(currTime);
  if (leftTime >= 0) {
    const years = parseInt(String(leftTime / 1000 / 60 / 60 / 24 / 365), 10);
    const days = parseInt(String(leftTime / 1000 / 60 / 60 / 24), 10);
    const hours = parseInt(String((leftTime / 1000 / 60 / 60) % 24), 10);
    const minutes = parseInt(String((leftTime / 1000 / 60) % 60), 10);
    const seconds = parseInt(String((leftTime / 1000) % 60), 10);
    return {
      years: checkTime(years),
      days: checkTime(days),
      hours: checkTime(hours),
      minutes: checkTime(minutes),
      seconds: checkTime(seconds),
    };
  }
};

/**
 * @description 获取当前日期的N个月/天前后的日期
 * @param {number} months N月，+N 表示N月之后; -N 表示N月之前
 * @param {number} days {number} N日， +N 表示N天之后; -N 表示N天之前
 * @param {boolean} isZero 是否需要补零 true(默认) 需要;
 * @param  {string} joinSign 日期连接符号 ‘-’(默认)
 * @return {string} 输出需求格式
 */
export const getFewMonthAgoOrAfterDate = (
  months = 0,
  days = 0,
  isZero = true,
  joinSign = '-'
): string => {
  const dt = new Date();
  dt.setMonth(dt.getMonth() + months, dt.getDate() + days);
  const Year = dt.getFullYear();
  let Month: string | number = dt.getMonth() + 1;
  let Day: string | number = dt.getDate();
  if (isZero) {
    Month = Month < 10 ? '0' + Month : Month;
    Day = Day < 10 ? '0' + Day : Day;
  }
  return `${Year}${joinSign}${Month}${joinSign}${Day}`;
};

/**
 * @description 是否为闰年
 * @return {boolean} 输出需求格式
 */
export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
