
var app = getApp()
var logoMenu = require('../../templates/logo_menu/logo_menu.js');
var ProductConMenu =require('../../templates/productConMenu/productConMenu.js');
Page({
    data:{
        imgUrls: [
            "../../images/index/banner01.jpg",
            "../../images/index/banner02.jpg",
            "../../images/index/banner03.jpg",
            "../../images/index/banner04.jpg",
            "../../images/index/banner05.jpg"
        ],
        bannerPlay: true,
        bannerInner: 5000,
        bannerDuration: 500,
        productCon: app.globalData.productCon,
        animationData:{},
        flag:1,
        menu_height_scale:0.5,
        logo_menu: app.globalData.logo_menu,
        productConMenu: app.globalData.productConMenu,//ProductConMenu菜单数据

     },
     onLoad:function(){
         //ProductConMenu标题初始化
         var productConMenu = this.data.productConMenu;
         productConMenu.productTitle = '关于今科';
         this.setData({
             productConMenu: productConMenu
         })
     },
    bindViewTap: function (e) {
        var url=e.currentTarget.dataset.url;
        wx.navigateTo({
            url:url
        })
    },

    showMenu: logoMenu.showMenu,
    showSubMenu: logoMenu.showSubMenu,

    bindBackTap:function(){
        wx.navigateBack()
    } ,
    showProductConMenu: ProductConMenu.showProductConMenu//ProductConMenu下拉方法
});