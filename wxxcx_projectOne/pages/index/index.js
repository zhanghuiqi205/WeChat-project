//index.js
//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
Page({
  data: {
    //banner数据
    imgUrls: [
      "../../images/index/banner01.jpg",
      "../../images/index/banner02.jpg",
      "../../images/index/banner03.jpg",
      "../../images/index/banner04.jpg",
      "../../images/index/banner05.jpg"
    ],
    bannerPlay: true,
    bannerInner: 5000,
    bannerDuration: 500,
    productCon: app.globalData.productCon,

    videoSrc:"https://video.kenfor.com/video/www2.kenfor.com/1474853538767375.mp4",
    chooseUs:[
      {
        imgUrl:"../../images/index/kenfor01.png",
        text1:"专注互联网服务19年",
        text2:"累计为5万客户提供服务"
      },
      {
        imgUrl: "../../images/index/kenfor02.png",
        text1: "12家分公司",
        text2: "华南地区最大网络服务商"
      },
      {
        imgUrl: "../../images/index/kenfor03.png",
        text1: "云架构",
        text2: "累计为5万客户提供服务"
      },
      {
        imgUrl: "../../images/index/kenfor04.png",
        text1: "本地化服务",
        text2: "在线客服、400电话"
      }
    ],
    logo_menu: app.globalData.logo_menu
  },
    //小图标页面跳转，先在app.json中配置页面路径，然后在index.js中productCon填写相对路径url
    bindViewTap: function (e) {
        var url=e.currentTarget.dataset.url
        wx.navigateTo({
            url:url
        })
    },
    showMenu: logoMenu.showMenu,
    showSubMenu:logoMenu.showSubMenu
})
