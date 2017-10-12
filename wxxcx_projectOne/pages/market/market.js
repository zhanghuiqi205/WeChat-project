var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {

    logoSrc: "../../images/cdn/logo.png",
    menuSrc: "../../images/cdn/menuTab.png",
    menus: ["首页", "关于今科", "新闻资讯", "全网营销", "产品中心", "人才招聘", "联系我们"],

    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },

    logo_menu: app.globalData.logo_menu,
    tempSubMenuBarData: app.globalData.tempSubMenuBarData,
    src1:"../../images/market/p1.png",
    src2:"../../images/market/p2.png",
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },

  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,
  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '全网营销';
    this.setData({
      productConMenu: productConMenu
    })
  },

  bindBackTap: function () {
    wx.navigateBack()
  },

  onShareAppMessage: function () {
    return {
      title: '转发此文档',
      path: '/page/user?id=123'
    }
  },
  showProductConMenu: ProductConMenu.showProductConMenu//ProductConMenu下拉方法
})





