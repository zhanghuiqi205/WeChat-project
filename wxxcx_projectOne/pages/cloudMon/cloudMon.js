//cloudMon.js
//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {
    mainFunc: [
      {
        imgUrl: "../../images/cloudMon/yun01.png",
        funcTxt1: "工作监督",
        funcTxt2: "维护管理网站、恰当处理询问、投诉等信息"
      },
      {
        imgUrl: "../../images/cloudMon/yun02.png",
        funcTxt1: "分析简报",
        funcTxt2: "维护管理网站、恰当处理询问、投诉等信息"
      },
      {
        imgUrl: "../../images/cloudMon/yun03.png",
        funcTxt1: "获取信息",
        funcTxt2: "简洁、直观，监控站点和服务器，实时获取信息并提供多种告警方式"
      },
      {
        imgUrl: "../../images/cloudMon/yun04.png",
        funcTxt1: "文档审阅",
        funcTxt2: "文稿活灵活现，我们简化文档操作，并支持不同文件格式，与云平台云同步，让办公变得轻松有趣！"
      }
    ],
    logo_menu: app.globalData.logo_menu,
    productCon: app.globalData.productCon,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,
  showProductConMenu: ProductConMenu.showProductConMenu,//ProductConMenu下拉方法
  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '云监控';
    this.setData({
      productConMenu: productConMenu
    })
  },
  bindBackTap: function () {
    wx.navigateBack()
  },

})
