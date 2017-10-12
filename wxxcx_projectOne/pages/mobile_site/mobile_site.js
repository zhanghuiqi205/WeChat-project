//mobile_site.js
//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');

Page({
    data: {
        logoSrc: "../../images/cdn/logo.png",
        menuSrc: "../../images/cdn/menuTab.png",
     
        tempData: {
          imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
        },
        advantageImg:"../../images/mobilesite/avImg.png",
        mobileSite_worth:"../../images/mobilesite/worth.png",
        bannerPlay : true,
        bannerInner : 5000,
        bannerDuration : 500,   
        worthTitle:[
          "宣传随时随地：随时随地做生意，把握无限商机",
          "方便客户沟通：互动功能多样化、人性化，提高询盘率",
          "结合互动推广：一个平台，链接移动社交的一切",
          "抢占搜索排名：搜索引擎会优先把手机版网站排在前面",
          "兼容移动客户端：手机系统和平板系统都支持，强兼容"
        ],
    siteCon: [
      {
        imgSrc: "../../images/mobilesite/peoples.png",
        imgText: "中国网民数据量庞大，达6.5亿",
      },
      {
        imgSrc: "../../images/mobilesite/cell_phone.png",
        imgText: "手机超越电脑成为第一大上网终端",
      },
      {
        imgSrc: "../../images/mobilesite/people_structure.png",
        imgText: "手机上网，移动营销是互联网发展的趋势",
      }
    ],
    whyMakeContent: [
      {
        wmNum: "1",
        wmText: "字体小：pc版网页在手机上缩放后，字体比例会等比例缩小。误差多",
      },
      {
        wmNum: "2",
        wmText: "模糊不清：手机屏幕尺寸较小，pc网站的内容图片和文字在手机上浏览模糊不清。",
      },
      {
        wmNum: "3",
        wmText: "加载慢：pc版页面图片尺寸大，导致加载速度慢，严重时候打不开，耗费流量浪费钱",
      }
    ],
    avContent: [
      {
        avimgUrl: "../../images/mobilesite/av_1.png",
        avText_1: "数据同步",
        avText_2: "微平台与云平台的数据打通，双网统一一站式平台",
      },
      {
        avimgUrl: "../../images/mobilesite/av_2.png",
        avText_1: "我的地盘我做主",
        avText_2: "企业要建立自己的专属平台，不受制于别人如何变化",
      },
      {
        avimgUrl: "../../images/mobilesite/av_3.png",
        avText_1: "实时监控",
        avText_2: "云监控分析、掌控微平台的运营，提升使用效果",
      }
    ],
    productCon: app.globalData.productCon,
    logo_menu: app.globalData.logo_menu,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
},
    onLoad: function () {
      var productConMenu = this.data.productConMenu;
      productConMenu.productTitle = '微平台/手机网站';
      this.setData({
        productConMenu: productConMenu
      })
    },
    showMenu: logoMenu.showMenu,
    showSubMenu: logoMenu.showSubMenu,
   
    backToIndex: function () {
      wx.navigateBack()
    },
    showProductConMenu: ProductConMenu.showProductConMenu//ProductConMenu下拉方法
})
