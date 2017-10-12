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

    line:"../../images/cloud_email/line.png",
    src: "../../images/cloud_email/back.png",
    src1: "../../images/cloud_email/menu.png",
    src3: "../../images/cloud_email/center.png",
    src4: "../../images/cloud_email/p1.png",
    src5: "../../images/cloud_email/p2.png",
    src6: "../../images/cloud_email/p3.png",
    src7: "../../images/cloud_email/p4.png",
    logo_menu: app.globalData.logo_menu,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },

  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,

  onLoad: function () {
    
      var productConMenu = this.data.productConMenu;
      productConMenu.productTitle = '企业邮箱';
      this.setData({
        productConMenu: productConMenu
      })
    
  },
  onShareAppMessage: function () {
    return {
      title: '转发此文档',
      path: '/page/user?id=123'
    }
  },
  bindBackTap: function () {
    wx.navigateBack()
  },
  showProductConMenu: ProductConMenu.showProductConMenu//ProductConMenu下拉方法

})





