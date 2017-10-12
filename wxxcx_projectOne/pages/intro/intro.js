// pages/intro/intro.js
var app=getApp();
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
Page({

  /**
   * 页面的初始数据
   */
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
    course:[
        { year: 2016, nextYear: 2015, date: '2016年', detail:'正式登陆新三板；最新研发的一步推获得网络推广软件著作权；成立贵阳分公司。'},
        { year: 2015, nextYear: 2014, date: '2015年', detail:'完成股份制改造，更名为股份公司；建立技术研发基地；获得海峡汇富产业投资基金管理A轮投资；成立重庆分公司。'},
        { year: 2014, nextYear: 2013, date: '2014年', detail:'与兴业证券股份有限公司正式签定股份制改造协议，开启今科上市之路。'},
        { year: 2013, nextYear: 2012, date: '2013年', detail: '适应移动互联网发展需求，推出企业3G官网和App客户端，帮助客户开展移动互联网的企业网络营销服务。'},
        { year: 2012, nextYear: 2011, date: '2012年', detail: '更名为广东今科道同科技有限公司；在云时代，推出商务e云平台，更好为企业提供一站式的企业网络营销服务。' },
        { year: 2011, nextYear: 2010, date: '2011年', detail: '商务e平台国际版成功上线，帮助企业做赚钱的外贸生意。' },
        { year: 2010, nextYear: 2009, date: '2010年', detail: '成为全国59家重点IDC接入服务商之一，总部搬迁新办公大楼，推出今科无限邮、商务e平台2011版。' },
        { year: 2009, nextYear: 2008, date: '2009年', detail: '第一家加盟分公司郑州开业，商务e企业信息平台荣获09年度中国企业信息化最佳解决方案。' },
        { year: 2008, nextYear: 2007, date: '2008年', detail: '实现技术大集中改制，开启今科全国化发展战略。' },
        { year: 2007, nextYear: 2006, date: '2007年', detail: '成立成都、武汉、长沙分公司，商务e企业信息平台获得国家十一五科技支撑计划重大项目。' },
        { year: 2006, nextYear: 2005, date: '2006年', detail: '成立深圳分公司、获得中国诚信示范单位、商务e企业信息平台获得国家科技中小企业创新基金支持项目。' },
        { year: 2005, nextYear: 2004, date: '2005年', detail: '被评为广东推荐企业信息化技术服务商、省级企业信息化培训基地、优秀民营科技企业、启动万家企业商务E工程。' },
        { year: 2004, nextYear: 2003, date: '2004年', detail: '自主研发商务e企业信息平台，被列为广东省重点引导项目。' },
        { year: 2003, nextYear: 2002, date: '2003年', detail: '更名为中山市今科信息科技有限公司，获得高新技术企业认定。' },
        { year: 2002, nextYear: 2000, date: '2002年', detail: '成立珠海、江门、东莞、佛山分公司，获得软件企业认证、增值电信业务经营许可认证、ISO9001:2000质量体系认证。' },
        { year: 2000, nextYear: 1999, date: '2000年', detail: '成立广州、顺德分公司。' },
        { year: 1999, nextYear: 1998, date: '1999年', detail: '获得首批民营科技企业认证证书。' },
        { year: 1998, nextYear: '', date: '1998年', detail: '成立于广东省中山市。' },
    ],
    currentYear:0,
    logo_menu: app.globalData.logo_menu
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
    bindViewTap: function (e) {
        var url=e.currentTarget.dataset.url
        wx.navigateTo({
          url: url
        })
    },
    nextYearTap:function(){
        // console.log(this.data.course.length)
        if(this.data.currentYear<this.data.course.length-1){
            var temp=this.data.currentYear+1
            this.setData({
                currentYear:temp
            })
        }  
    },
    swiperChange:function(e){
        this.setData({
                currentYear:e.detail.current
            })
    },
    showMenu: logoMenu.showMenu,
    showSubMenu: logoMenu.showSubMenu
})