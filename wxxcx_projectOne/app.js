//app.js
App({
    onLaunch : function(){
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs);
        //   rpx转px单位转换比例，默认rpx*0.5
        var thiz = this;
        wx.getSystemInfo({
            success : function(res){
                if(res.windowWidth > 375){
                    thiz.globalData.logo_menu.scale = 0.552
                } else if(res.windowWidth < 375){
                    thiz.globalData.logo_menu.scale = 0.42
                }
            },
        })
    },

    getUserInfo : function(cb){
        var that = this
        if(this.globalData.userInfo){
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success : function(){
                    var thiz = this
                    wx.getUserInfo({
                        success : function(res){
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)

                        }
                    })
                }
            })
        }
    },
    globalData : {
        userInfo : null,
        topListId : '',
        songData : null,
        logo_menu : {
            logoSrc : "../../images/cdn/logo.png",
            menuSrc : "../../images/cdn/menuTab.png",
            menus : [{title : "首页", url : '../index/index'},
                {title : "关于今科", url : '../intro/intro'},
                {title : "全网营销", url : '../network_b/network_b'},
                {
                    title : "产品中心",
                    child : false,
                    animationSubMenu : {},
                    image : '../../images/template/open.png',
                    list : [{title : "商务e云平台", url : "../cloud/cloud"},
                        {title : "移动网站", url : "../mobile_site/mobile_site"},
                        {title : "一步推", url : "../promotion_one/promotion_one"},
                        {title : "企业商城", url : "../shopMall/shopMall"},
                        {title : "云主机", url : "../host_server/host_server"},
                        {title : "企业邮箱", url : "../cloud_email/cloud_email"},
                        {title : "CDN", url : "../CDN/CDN"},
                        {title : "云监控", url : "../cloudMon/cloudMon"}]
                },
                {title : "联系我们", url : '../contact/contact'}],
            flag : 1,
            subFlag : 1,
            animationData : {},
            openStatus : 0,
            scale : 0.5

        },
        tempSubMenuBarData : {
            titleType : "CDN节点加速服务",
            backIcon : "../../images/cdn/leftArrow.png",
            subMenu : "../../images/cdn/subMenu.png",
            subMenuList : ["商务E云平台", "移动网站", "一步推", "企业商城", "云主机", "企业邮箱", "CDN", "云监控"],
            animationSubData : {},
            flag : 1,
            scale : 0.5
        },
        productCon : [
            {
                imgSrc : "../../images/index/product01.png",
                imgText : "商务e云平台",
                url : "../cloud/cloud"
            },
            {
                imgSrc : "../../images/index/product02.png",
                imgText : "移动网站",
                url : "../mobile_site/mobile_site"
            },
            {
                imgSrc : "../../images/index/product03.png",
                imgText : "一步推",
                url : "../promotion_one/promotion_one"
            },
            {
                imgSrc : "../../images/index/product04.png",
                imgText : "企业商城",
                url : "../shopMall/shopMall"
            },
            {
                imgSrc : "../../images/index/product05.png",
                imgText : "云主机",
                url : "../host_server/host_server"
            },
            {
                imgSrc : "../../images/index/product06.png",
                imgText : "企业邮箱",
                url : "../cloud_email/cloud_email"
            },
            {
                imgSrc : "../../images/index/product07.png",
                imgText : "CDN",
                url : "../CDN/CDN"
            },
            {
                imgSrc : "../../images/index/product08.png",
                imgText : "云监控",
                url : "../cloudMon/cloudMon"
            }
        ],
        productConMenu : {
            animationProductConMenu : {},
            flag : 1,
            scale : 0.5,
            productTitle : '',
            list : [{title : "商务e云平台", url : "../cloud/cloud"},
                {title : "移动网站", url : "../mobile_site/mobile_site"},
                {title : "一步推", url : "../promotion_one/promotion_one"},
                {title : "企业商城", url : "../shopMall/shopMall"},
                {title : "云主机", url : "../host_server/host_server"},
                {title : "企业邮箱", url : "../cloud_email/cloud_email"},
                {title : "CDN", url : "../CDN/CDN"},
                {title : "云监控", url : "../cloudMon/cloudMon"}]
        }
    },
})