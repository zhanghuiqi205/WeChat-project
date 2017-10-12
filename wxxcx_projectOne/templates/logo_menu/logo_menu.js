function showMenu() {
    var that = this;
    var menu=this.data.logo_menu;
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
    });
    that.data.logo_menu.animationData=animation;
    if (that.data.logo_menu.flag == 1) {
        var temp = 88.6*(menu.menus.length) * that.data.logo_menu.scale;
        animation.height(temp).step();
        menu.flag=0;
        that.setData({
            logo_menu:menu
        })
    } else {
        function close(){
            animation.height(0).step();     
            menu.flag=1;
            that.setData({
                logo_menu:menu
            }); 
        }
        if(menu.subFlag==0){
           that.showSubMenu();
           close()
        }else{
            close()
        }
        
        
    }
    menu.animationData = animation.export();
    that.setData({
        logo_menu:menu
    })
};
function showSubMenu() {
    // debugger
    var thiz = this;
    var menu=this.data.logo_menu;
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
    });
    menu.menus[3].animationSubMenu=animation
    if (thiz.data.logo_menu.subFlag == 1) {
        var temp = 88.6*8* thiz.data.logo_menu.scale;
        animation.height(temp).step();
        menu.subFlag=0;
        menu.menus[3].child=1;
        thiz.setData({
            logo_menu:menu
        })
    } else {
        animation.height(0).step();
        menu.subFlag=1;
                // menu.menus[3].child=false;
        thiz.setData({
            logo_menu:menu
        })
        setTimeout(function(){
             menu.menus[3].child=false;
             thiz.setData({
                logo_menu:menu
            })
        },1000)
    }
    menu.menus[3].animationSubMenu = animation.export();
    thiz.setData({
        logo_menu:menu
    })
}
module.exports ={showMenu:showMenu,showSubMenu:showSubMenu};