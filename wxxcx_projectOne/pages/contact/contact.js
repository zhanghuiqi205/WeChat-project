//contact.js
//获取应用实例
var app = getApp();
var logoMenu = require('../../templates/logo_menu/logo_menu.js')
Page({
  data: {
    companyInfo: [
      {
        imgUrl: "../../images/contact/contact01.jpg",
        conTitle: "今科科技·中山分公司",
        conAddress: "广东省中山市东区博爱五路朗晴轩百汇中心六楼",
        conTel:"0760-23320168",
        conFax:"0760-23320408"
      },
      {
        imgUrl: "../../images/contact/contact02.jpg",
        conTitle: "今科科技·广州分公司",
        conAddress: "广东省广州市天河北路890号国际科贸园15楼",
        conTel: "020-38289988",
        conFax: "020-38288292"
      },
      {
        imgUrl: "../../images/contact/contact03.jpg",
        conTitle: "今科科技·佛山分公司",
        conAddress: "广东省佛山市禅城区岭南大道100号岭南大厦2座2401室",
        conTel: "0757-83218150",
        conFax: "0757-83218152"
      },
      {
        imgUrl: "../../images/contact/contact04.jpg",
        conTitle: "今科科技·顺德分公司",
        conAddress: "广东省佛山市顺德区大良新桂路明日广场一座805-807号",
        conTel: "0757-28695222",
        conFax: "0757-22380608"
      },
      {
        imgUrl: "../../images/contact/contact05.jpg",
        conTitle: "今科科技·成都分公司",
        conAddress: "四川省成都市金牛区一环路北一段99号环球广场14楼1号",
        conTel: "028-86798691",
        conFax: "028-86790691"
      },
      {
        imgUrl: "../../images/contact/contact06.jpg",
        conTitle: "今科科技·东莞分公司",
        conAddress: "广东省东莞市南城区莞太大道腾龙商务中心1812室",
        conTel: "0769-88058833",
        conFax: "0769-22994230"
      },
      {
        imgUrl: "../../images/contact/contact07.jpg",
        conTitle: "今科科技·长沙分公司",
        conAddress: "湖南省长沙市岳麓区麓谷新长海中心B1栋503",
        conTel: "0731-88396600",
        conFax: "0731-88396601"
      },
      {
        imgUrl: "../../images/contact/contact08.jpg",
        conTitle: "今科科技·江门分公司",
        conAddress: "广东省江门市蓬江区建设二路98号万源大厦11楼B01",
        conTel: "0750-3166238",
        conFax: "0750-3166239"
      },
      {
        imgUrl: "../../images/contact/contact09.jpg",
        conTitle: "今科科技·深圳分公司",
        conAddress: "广东省深圳市南山区高新北区高新北六道27号（原新西路7号）兰光科技大楼7楼B-713",
        conTel: "0755-86703353",
        conFax: "暂无"
      },
      {
        imgUrl: "../../images/contact/contact10.jpg",
        conTitle: "今科科技·珠海分公司",
        conAddress: "广东省珠海市吉大景山路171号世航大厦（诺瑞比丽名园大厦）508号",
        conTel: "0756-2319088",
        conFax: "0756-2319099"
      },
      {
        imgUrl: "../../images/contact/contact11.jpg",
        conTitle: "今科科技·重庆分公司",
        conAddress: "重庆市北部新区洪湖西路26号软件园A栋5楼B单元",
        conTel: "023-65583666",
        conFax: "023-67683653"
      },
      {
        imgUrl: "../../images/contact/contact12.jpg",
        conTitle: "今科科技·贵阳分公司",
        conAddress: "贵州省贵阳市南明区花果园三期R2区众创大厦1栋25楼2512室",
        conTel: "0851-88171002",
        conFax: "0851-88171815"
      },
    ],
    logo_menu: app.globalData.logo_menu
  },
  showMenu: logoMenu.showMenu,
  showSubMenu: logoMenu.showSubMenu
})
