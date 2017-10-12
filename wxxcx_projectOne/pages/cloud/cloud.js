//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {
     public_back: "../../images/cloud/back.png", 
    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },
    description:{
      imgUrl:"/images/cloud/e.jpg",
      content:"商务e云平台是以网站建设为基础的一站式网络平台，它包括网站、推广、管理和应用四位一体的服务。产品整合了pc企业官网，手机/移动终端网站，整个平台贯穿了传统互联网、移动互联网、微信营销，帮助企业快速开展网络营销的平台。"
    },
    text:[{
      imgUrl:"/images/cloud/icon1.png",
      title:"网站建设",
      content: "商务e云平台基础部分，支持移动端，云平台+微平台，数据同步。系统结构简洁，有利于seo搜索引擎收录页面。新闻信息自动采集，省心省时。内部规范的制作流程，专业的设计团队为企业提供个性的设计方案。"
    },{
      imgUrl:"/images/cloud/icon2.png",
      title:"网站推广",
      content: "结构性优化技术，动态网站静态化html架构技术，打开速度快，收录快，优化快。商务e中国平台推广性优化，让正常开通的网站一定时间内迅速被百度，360收录。结合推广神器“一步推”，让你选定的产品关键字登上百度，360搜索，搜狗搜索引起，还能上首页。"
      }, {
        imgUrl: "/images/cloud/icon3.png",
        title: "网站管理",
        content: "云桌面管理，一个账号全网管理，解决多账号难以管理的问题。配送享有著作权的网聆通和数据分析系统，聆听网络声音的同时做出科学的决策。云监控的介入，可实时掌控其企业官网的运营数据，有效地促进官网为企业带来更多的实际效益。"
    }, {
      imgUrl: "/images/cloud/icon4.png",
      title: "网络应用",
      content: "开展网络营销的基础，同样可以提升服务品质，降低成本"
    }],
    note: [{
      imgUrl: "/images/cloud/pic1.png",
      title: "快速找到你",
      content: "让客户无论是通过PC端、移动端、微信端都能随时随地找到你"
    }, {
        imgUrl: "/images/cloud/pic2.png",
        title: "高传播",
        content: "客户容易知道你，快速缔造企业品牌, 方便快速提升网络知名度及曝光度"
    }, {
        imgUrl: "/images/cloud/pic3.png",
        title: "高传播",
        content: "客户容易知道你，快速缔造企业品牌, 方便快速提升网络知名度及曝光度"
    }],
    logo_menu: app.globalData.logo_menu,
    productCon: app.globalData.productCon,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },
  
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,
  showProductConMenu: ProductConMenu.showProductConMenu,//ProductConMenu下拉方法
  bindViewTap: function (e) {
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '商务e云平台';
    this.setData({
      productConMenu: productConMenu
    })
  },
  // backToIndex: function () {
  //   wx.navigateBack()
  // },
  bindBackTap: function () {
    wx.navigateBack()
  },
  
})
