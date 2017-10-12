//index.js
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
var ProductConMenu = require('../../templates/productConMenu/productConMenu.js');
Page({
  data:{
    logo_menu: app.globalData.logo_menu,
    productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据
    
    tempData:{
      imgUrls:["../../images/cdn/1.jpg","../../images/cdn/2.jpg","../../images/cdn/3.jpg","../../images/cdn/4.jpg"]
    },

    title:"CDN节点加速服务",
    text:"CDN又叫内容分发网络，使用户可就近取得所需内容，解决Internet网络拥挤的状况，提高用户访问网站的响应速度。",
    tempImgText:{
      oneImg:"../../images/cdn/CDN_01.png",
      title:"现实中有网站也让你头痛",
      textArr:[
          {title:"1、网站时快时慢操心？",content:"花钱做推广，访问量上升了，可是网站时快时慢，导致用户体验极其差，痛失大量用户。"},
          {title:"2、不合理的计费方式费心？",content:"由于抵御了几次攻击，使得宽带峰值急速上升，我却要以这个峰值来付费"},
          {title:"3、洪水般的攻击烦心？",content:"常在网上飘，哪有不挨刀，网站被攻击已经很常见，不知道哪一天你的同行竞争对手就“看上你”。"},
          {title:"4、不同城市访问网站速度不同闹心？",content:"电信网通之间的互联互通问题，电信用户访问电信的网站服务器打开网页可能只需要几秒钟，网通（联通）的客户打开你的网站可能需要30秒、甚至要几分钟才能完全打开。"}
      ]
    },
    tempImgText1:{
      oneImg:"../../images/cdn/CDN_02.png",
      title:"产品功能特点",
      textArr:[
          {title:"1、隐藏真实IP：",content:"花钱做推广，访问量上升了，可是网站时快时慢，导致用户体验极其差，痛失大量用户。"},
          {title:"2、线路一体化：",content:"由于抵御了几次攻击，使得宽带峰值急速上升，我却要以这个峰值来付费"},
          {title:"3、识别IP节点：",content:"常在网上飘，哪有不挨刀，网站被攻击已经很常见，不知道哪一天你的同行竞争对手就“看上你”。"},
          {title:"4、抗攻击：",content:"电信网通之间的互联互通问题，电信用户访问电信的网站服务器打开网页可能只需要几秒钟，网通（联通）的客户打开你的网站可能需要30秒、甚至要几分钟才能完全打开。"},
          {title:"5、节约成本：",content:"减少投入，按需付费，全网分发。"}
      ]
    },
    tempImg:{
      oneImg:"../../images/cdn/CDN_03.png",
      title:"今科CDN提供智能服务，全球覆盖",
      imgTextArr:[
          {src:"../../images/cdn/CDN_icon_01.jpg",title:"访问页面加速"},
          {src:"../../images/cdn/CDN_icon_02.png",title:"文件分发服务"},
          {src:"../../images/cdn/CDN_icon_03.jpg",title:"图片加载提速服务"},
          {src:"../../images/cdn/CDN_icon_04.jpg",title:"视频播放加速服务"},
          {src:"../../images/cdn/CDN_icon_05.jpg",title:"智能DNS解析服务"},
          {src:"../../images/cdn/CDN_icon_06.jpg",title:"移动互联网加速"}
      ]
    },
    moreCases:"客户案例",
    casesArr:[
        "../../images/cdn/case_01.jpg",
        "../../images/cdn/case_02.jpg",
        "../../images/cdn/case_03.jpg",
        "../../images/cdn/case_04.jpg",
        "../../images/cdn/case_05.jpg",
        "../../images/cdn/case_06.jpg",
        "../../images/cdn/case_07.jpg",
        "../../images/cdn/case_08.jpg"
    ]
  },

  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu,

  onLoad: function () {

    var productConMenu = this.data.productConMenu;

    productConMenu.productTitle = 'CDN节点加速服务';

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
