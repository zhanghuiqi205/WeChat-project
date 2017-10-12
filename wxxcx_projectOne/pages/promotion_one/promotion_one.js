//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {
    bannerPlay: true,
    bannerInner: 5000,
    bannerDuration: 500,
    // logoSrc: "../../images/cdn/logo.png",
    // menuSrc: "../../images/cdn/menuTab.png",
    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },
    pnumImgs: [
      "../../images/promotion_one/click_01.png",
      "../../images/promotion_one/click_02.png",
      "../../images/promotion_one/click_03.png",
      "../../images/promotion_one/click_04.png",
      "../../images/promotion_one/click_05.png",
      "../../images/promotion_one/click_06.png"
    ],
    casesArr:[
      "../../images/cdn/case_01.jpg",
      "../../images/cdn/case_02.jpg",
      "../../images/cdn/case_03.jpg",
      "../../images/cdn/case_04.jpg",
      "../../images/cdn/case_05.jpg",
      "../../images/cdn/case_06.jpg",
      "../../images/cdn/case_07.jpg",
      "../../images/cdn/case_08.jpg"
    ],
    promotion_p3Content:[
      "1对1专家服务，专业托管式推广，前期主要工作我们代劳",
      "2秒上手，轻点鼠标 + 输入验证码，推广也可以很简单",
      "3分之一的竞价费用，100%的同等首页效果",
      "4大功能——产品介绍、企业宣传、产品招商，甚至是个人广告",
      "5大搜索引擎（百度、360、搜狗、有道、必应）首页有您，为您的需求客户节约搜索成本",
      "6-10天就可查看直观的推广效果，效果稳定且持续，数据报表每日更新。"
    ],
    promotionContent: [
      {
        pcImg: "../../images/promotion_one/lineup.png",
        pcText: "让企业信息全网覆盖，pc端，移动端，微信朋友圈，分享推广等一个也不能少",
      },
      {
        pcImg: "../../images/promotion_one/lineup.png",
        pcText: "自然排名流量和seo优化",
      },
      {
        pcImg: "../../images/promotion_one/lineup.png",
        pcText: "霸屏首页，抢占商机，关键字上主流搜索引擎首页",
      }
    ],
    logo_menu:app.globalData.logo_menu,
    productCon: app.globalData.productCon,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },
  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '一步推';
    this.setData({
      productConMenu: productConMenu
    })
  },
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,
  showProductConMenu: ProductConMenu.showProductConMenu,//ProductConMenu下拉方法
  bindBackTap: function () {
    wx.navigateBack()
  },
 
})
