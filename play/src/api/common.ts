import { packAxios } from "@/utils/axios";
import { RequestEnum } from "@/utils/enums";
import { IUploadFileParams } from "@/utils/axios/interface";
enum Api {
  WEIXIN = "",
  UPLOAD = "",
}

/**
 * @description: 修改手机号
 * @param {*} data
 * @return {*}
 */
export function fetchPurchaseInfo(code: string) {
  return packAxios.request({
    url: `/jarvis/signConfirmation/${code}`,
    method: RequestEnum.POST,
  });
}

/**
 * @description: 修改手机号
 * @param {*} data
 * @return {*}
 */
export function postPurchasChangeTel(data: {
  code: string;
  receiveId: string;
  telephone: string | number;
}) {
  return packAxios.request({
    url: `/jarvis/projectImplementation/purchase/signConfirmation/receiverTelUpdate`,
    method: RequestEnum.POST,
    data,
  });
}

/**
 * @description: 收货人签名
 * @param {*} data
 * @return {*}
 */
export function postReceiverSign(data: {
  code: string;
  receiveId: string;
  signFileId: string;
}) {
  return packAxios.request({
    url: `/jarvis/projectImplementation/purchase/signConfirmation/receiverSign`,
    method: RequestEnum.POST,
    data,
  });
}

/**
 * @description: 上传公共文件
 * @param {*} data
 * @return {*}
 */
export function uploadFile(params: IUploadFileParams) {
  console.log('uploadImgParams', params)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200, 
        data: {},
        msg: '模拟提交，上传成功',
      })
    }, 2000)
  })
}

/**
 * @description: 获取微信配置
 * @param {*} data
 * @return {*}
 */
export const getWXConfig = (data = {}) => {
  return packAxios.request({
    url: Api.WEIXIN,
    method: RequestEnum.GET,
    params: data,
  });
};
