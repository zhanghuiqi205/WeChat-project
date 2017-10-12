var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {
    logoSrc: "../../images/cdn/logo.png",
    menuSrc: "../../images/cdn/menuTab.png",
    menus: ["首页", "关于今科", "新闻资讯", "全网营销", "产品中心", "人才招聘", "联系我们"],
    flag: 1,
   
    animationData:{},
    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },

    server_title: [
        {
          imgSrc: "../../images/host_server/shopping.png",
          imgText: "按需订购",
          url: ""
        },
        {
          imgSrc: "../../images/host_server/time_68.png",
          imgText: "快速部署",
          url: "../mobile_site/mobile_site"
        },
        {
          imgSrc: "../../images/host_server/eye_85.png",
          imgText: "全面监控",
          url: "../promotion_one/promotion_one"
        },
        {
          imgSrc: "../../images/host_server/bar.png",
          imgText: "负载均衡",
          url: ""
        },
        {
          imgSrc: "../../images/host_server/network.png",
          imgText: "私有网络",
          url: "../host_server/host_server"
        },
        {
          imgSrc: "../../images/host_server/cloud.png",
          imgText: "维护便捷",
          url: "../cloud_email/cloud_email"
        },
      
    ],
    
    server_title2: [
      {
        imgSrc: "../../images/host_server/money.png",
        imgText: "更低价格",
        url: ""
      },
      {
        imgSrc: "../../images/host_server/meter.png",
        imgText: "更高性能",
        url: "../mobile_site/mobile_site"
      },
      {
        imgSrc: "../../images/host_server/meter.png",
        imgText: "更大带宽",
        url: "../promotion_one/promotion_one"
      },
      {
        imgSrc: "../../images/host_server/computer.png",
        imgText: "最优服务",
        url: ""
      },
      {
        imgSrc: "../../images/host_server/box.png",
        imgText: "免费备案",
        url: "../host_server/host_server"
      },
      {
        imgSrc: "../../images/host_server/people.png",
        imgText: "本地化商务顾问",
        url: "../cloud_email/cloud_email"
      },

    ],
    logo_menu: app.globalData.logo_menu,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,

  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '云主机服务';
    this.setData({
      productConMenu: productConMenu
    })
  },

  bindBackTap: function () {
    wx.navigateBack()
  },
  
  showProductConMenu: ProductConMenu.showProductConMenu//ProductConMenu下拉方法
  })    
