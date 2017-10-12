// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telphone: [{ address: "全国热线", tel:"4008307686"},
    { address: "中山", tel:"0760-23320168" },
      { address: "广州", tel:"020-38289988"},
      { address: "佛山", tel:"0757-83218150" },
      { address: "珠海", tel:"0756-2319088"},
      { address: "江门", tel:"0750-3166238"},
      { address: "顺德", tel:"0757-28695222" },
      { address: "东莞", tel:"0769-88058833"},
      { address: "成都", tel:"0282-86798691"},
      { address: "深圳", tel:"0755-86703353" },
      { address: "长沙", tel:"0731-88396600" },
      { address: "重庆", tel:"023-65583666"},
      { address: "贵阳", tel:"0851-88171002" }
      ]   
  },
  makePhoneCall:function(e){
    var tel=e.currentTarget.dataset.url;
    wx.makePhoneCall({
      phoneNumber: 'tel',
      // success: function (res) { },
      // fail: function (res) { },
      // complete: function (res) { },
    })
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
  
  }
})