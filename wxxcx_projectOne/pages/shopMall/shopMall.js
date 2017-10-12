//shopMall.js
//获取应用实例
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data: {
    //banner数据
    tempData: {
      imgUrls: ["../../images/cdn/1.jpg", "../../images/cdn/2.jpg", "../../images/cdn/3.jpg", "../../images/cdn/4.jpg"]
    },
    bannerPlay: true,
    bannerInner: 5000,
    bannerDuration: 500,
    mallInfo: [
      {
        imgUrl: "../../images/shopMall/mall-plat01.png",
        mallTitle: "多平台营销",
        mallTxt: "支持PC商城、安卓App苹果App和微信商城"
      },
      {
        imgUrl: "../../images/shopMall/mall-plat02.png",
        mallTitle: "社会化分享",
        mallTxt: "会员分享商品到社会渠道提升商城购买率"
      },
      {
        imgUrl: "../../images/shopMall/mall-plat03.png",
        mallTitle: "支持多个搜索引擎",
        mallTxt: "优化SEO、提升搜索营销的效果"
      },
      {
        imgUrl: "../../images/shopMall/mall-plat04.png",
        mallTitle: "数据分析",
        mallTxt: "网站数据的统计与分析能直观反映网店的运行状况"
      }
    ],
    pointArr: [
      {
        pointTitle: "运维服务",
        pointTxt: "智能备份：每日进行站点运营数据库全量备份，灾难恢复：按需恢复站点运营数据机房值班，网站备案协助。"
      },
      {
        pointTitle: "设计定制服务",
        pointTxt: "项目设计师和程序员服务，跟客户确认后再进行程序制作，满足不同行业的设计风格，提升形象。"
      },
      {
        pointTitle: "本地化服务",
        pointTxt: "系统问题受理，在线、线下商务培训，多平台数据同步问题受理，6天*8小时在线客服中心。"
      },
      {
        pointTitle: "持续升级",
        pointTxt: "系统持续更新，客户享受服务。"
      }
    ],
    featureArr: [
      {
        featureTitle: "1",
        featureTxt: "多销路：给你一个搭建直营分销一体化的销售平台。支持零售、批发、代销、代理连锁加盟等多种销售渠道，更多的收益。"
      },
      {
        featureTitle: "2",
        featureTxt: "快搭建：人人都有朋友圈人际圈，用好资源，打破传统被动招商局面，反客为主，快速锁定合适分销商"
      },
      {
        featureTitle: "3",
        featureTxt: "好管理：一店多核，无论是直营还是分销，订单统一收订、统一发货；团队各岗位明确分工有序合作；"
      },
      {
        featureTitle: "4",
        featureTxt: "省成本：不用烧钱做推广；不用花钱建牛人团队，让更多会卖货的人给你卖货，你只需负责发货即可。"
      }
    ],
    modalArr: [
      {
        modalSrc: "../../images/shopMall/mall_func01.png",
        modalTxt: "三级分销"
      },
      {
        modalSrc: "../../images/shopMall/mall_func02.png",
        modalTxt: "分销商"
      },
      {
        modalSrc: "../../images/shopMall/mall_func03.png",
        modalTxt: "分销订单"
      },
      {
        modalSrc: "../../images/shopMall/mall_func04.png",
        modalTxt: "三级分佣"
      }
    ],
    logo_menu: app.globalData.logo_menu,
    productCon: app.globalData.productCon,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
  },
  onLoad: function () {
    var productConMenu = this.data.productConMenu;
    productConMenu.productTitle = '企业商城';
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
