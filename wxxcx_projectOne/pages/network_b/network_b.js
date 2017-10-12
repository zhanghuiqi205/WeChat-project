//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerPlay: true,
    bannerInner: 5000,
    bannerDuration: 500,
    productCon: app.globalData.productCon,
    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },
    logo_menu: app.globalData.logo_menu
  },
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,
  bindViewTap:function(e){
      var url = e.currentTarget.dataset.url
      wx.navigateTo({
          url:url ,
      })
  },
  bindBackTap: function () {
    wx.navigateBack()
  },
})