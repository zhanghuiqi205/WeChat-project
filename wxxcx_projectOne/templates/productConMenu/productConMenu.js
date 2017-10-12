function showProductConMenu(){
    var that = this;
    var menu = this.data.productConMenu;
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
    });
    that.data.productConMenu.animationData = animation;
    if (that.data.productConMenu.flag == 1) {
        var temp = 61.25 * (menu.list.length) * that.data.productConMenu.scale;
        animation.height(temp).step();
        menu.flag = 0;
        that.setData({
            productConMenu: menu
        })
    } else {
            function close() {
                animation.height(0).step();
                menu.flag = 1;
                that.setData({
                    productConMenu: menu
                });
            }
            close()
        }
    menu.animationProductConMenu= animation.export();
    that.setData({
        productConMenu: menu
    })
};
function initTitle(title){
    var thiz=this
    console.log(this)
    var productConMenu = thiz.data.productConMenu;
    productConMenu.productTitle=title;
    this.setData({
        productConMenu:productConMenu
    })
}
module.exports = {showProductConMenu:showProductConMenu,initTitle:initTitle}
