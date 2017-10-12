function showSubMenu() {
  console.log(this.data.logo_menu)
  var that = this;
  var menu = this.data.logo_menu
  var animation = wx.createAnimation({
    duration: 1000,
    timingFunction: 'ease',
  });
  that.animation = animation;
  if (that.data.logo_menu.flag == 1) {
    var temp = 88.6 * menu.menus.length * that.data.logo_menu.scale
    animation.height(temp).step();
    menu.flag = 0
    that.setData({
      logo_menu: menu
    })
  } else {
    animation.height(0).step();
    menu.flag = 1
    that.setData({
      logo_menu: menu
    })
  }
  menu.animationData = animation.export()
  that.setData({
    logo_menu: menu
  })
}
module.exports = showSubMenu