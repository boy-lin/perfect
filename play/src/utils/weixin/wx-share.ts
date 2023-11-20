import wx from "weixin-js-sdk";
import { getBrowser } from "@/utils/methods/common";
import { getStorage, setStorage } from "@/utils/methods/storage";
import * as config from "./config";
import { Toast } from "vant";
import { getWXConfig } from "@/api/common";
import { IWXData, IWXShareData, IWXShareOptions } from "./interface";

const $wxShare = async (
  shareData: IWXShareData | null = config.DEFAULT_SHARE_DATA,
  options?: IWXShareOptions
): Promise<void> => {
  // 兼容ios和android微信分享
  // IOS：每次切换路由，SPA的url是不会变的，发起签名请求的url参数必须是当前页面的url(就是最初进入页面时的url)
  // Android：每次切换路由，SPA的url是会变的，发起签名请求的url参数必须是当前页面的url(不是最初进入页面时的)
  const url = getBrowser().isIos
    ? getStorage("firstHref")
    : location.href.split("#")[0];
  // 先获取localStorage中的微信配置，如果没有，再接口获取
  const WX_CONFIG = localStorage.wxConfig && JSON.parse(localStorage.wxConfig);
  if (WX_CONFIG && WX_CONFIG.url === url) {
    handleWXShare(WX_CONFIG);
  } else {
    try {
      const res = await getWXConfig(url);
      setStorage("wxConfig", JSON.stringify(res[config.WX_CONFIG_NAME]));
      handleWXShare(WX_CONFIG);
    } catch (err) {
      // do catch err
    }
  }

  function handleWXShare(WXData: IWXData) {
    wx.config({
      debug: false,
      appId: WXData.appId,
      timestamp: WXData.timestamp,
      nonceStr: WXData.nonceStr,
      signature: WXData.signature,
      jsApiList: config.DEFAULT_API_LIST,
    });

    wx.ready(() => {
      if (options && options.showMenu) {
        wx.showOptionMenu();
      } else {
        wx.hideOptionMenu();
      }

      wx.showMenuItems({
        menuList: (options && options.showItems) || config.DEFAULT_SHOW_MENU,
      });
      wx.hideMenuItems({
        menuList: (options && options.hideItems) || config.DEFAULT_HIDE_MENU,
      });

      const data = {
        title:
          (shareData && shareData.title) || config.DEFAULT_SHARE_DATA.title,
        desc: (shareData && shareData.desc) || config.DEFAULT_SHARE_DATA.desc,
        link: (shareData && shareData.link) || config.DEFAULT_SHARE_DATA.link,
        imgUrl:
          (shareData && shareData.imgUrl) || config.DEFAULT_SHARE_DATA.imgUrl,
        success: () => {
          setTimeout(() => {
            (shareData && shareData.success()) ||
              config.DEFAULT_SHARE_DATA.success();
          }, 500);
        },
        cancel:
          (shareData && shareData.cancel()) ||
          config.DEFAULT_SHARE_DATA.cancel(),
      };

      wx.updateTimelineShareData(data);
      wx.updateAppMessageShareData(data);
    });

    wx.error((err: any) => {
      Toast.fail(err);
    });
  }
};

export default $wxShare;
