/*
Navicat MySQL Data Transfer

Source Server         : 自己的阿里云
Source Server Version : 50557
Source Host           : 47.104.71.253:3306
Source Database       : wxkf

Target Server Type    : MYSQL
Target Server Version : 50557
File Encoding         : 65001

Date: 2019-04-23 10:44:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '密码',
  `user_nickname` varchar(50) NOT NULL DEFAULT '' COMMENT '昵称',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '当前账号的状态',
  `user_type` varchar(2) DEFAULT NULL,
  `create_time` varchar(30) DEFAULT NULL COMMENT '创建时间',
  `update_time` varchar(30) DEFAULT NULL COMMENT '更新时间',
  `code_time` varchar(40) DEFAULT '0' COMMENT '分享吗时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '管理员', '0', '0', '1550738794', null, '12');

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(50) DEFAULT NULL COMMENT '分组的名称',
  `addtime` varchar(30) DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES ('1', '第一小区', '1551149469');
INSERT INTO `group` VALUES ('2', '第二小区', '1551149469');
INSERT INTO `group` VALUES ('3', '第三小区', '1551149469');
INSERT INTO `group` VALUES ('4', '第四小区', '1551149469');
INSERT INTO `group` VALUES ('5', '第五小区', '1551149469');
INSERT INTO `group` VALUES ('6', '第六小区', '1551149469');
INSERT INTO `group` VALUES ('7', '第七小区', '1551149469');
INSERT INTO `group` VALUES ('8', '第八小区', '1551236529');

-- ----------------------------
-- Table structure for repair_order
-- ----------------------------
DROP TABLE IF EXISTS `repair_order`;
CREATE TABLE `repair_order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `order_id` varchar(30) NOT NULL DEFAULT '' COMMENT '订单id',
  `type` varchar(100) DEFAULT NULL COMMENT '订单类别',
  `linkman` varchar(100) DEFAULT NULL COMMENT '联系人',
  `linktel` varchar(100) DEFAULT NULL COMMENT '联系电话',
  `repuser` varchar(100) DEFAULT NULL COMMENT '维修人',
  `status` int(2) NOT NULL DEFAULT '0' COMMENT '订单的状态(0接单中,1处理中，2完成)',
  `group` varchar(25) DEFAULT NULL COMMENT '小区信息',
  `address` varchar(100) DEFAULT NULL COMMENT '地址信息',
  `title` varchar(255) DEFAULT NULL COMMENT '问题的简单描述',
  `content` varchar(255) DEFAULT NULL COMMENT '问题的详细描述',
  `message` varchar(255) DEFAULT NULL COMMENT '备注',
  `grade` varchar(5) DEFAULT NULL COMMENT '订单的等级',
  `create_time` varchar(25) DEFAULT NULL COMMENT '订单创建时间',
  `update_time` varchar(25) DEFAULT NULL COMMENT '订单更新时间',
  `openid` varchar(100) NOT NULL DEFAULT '' COMMENT '提交订单的用户微信标识符',
  `repuser_message` varchar(255) DEFAULT NULL COMMENT '管理者对订单的评论',
  `linkman_message` varchar(255) DEFAULT NULL COMMENT '报修者对订单的评论',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of repair_order
-- ----------------------------
INSERT INTO `repair_order` VALUES ('1', '2019022252505556', '', '张惠奇', '15176628061', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', '0', '第九小区', '512', '水龙头问题', '水龙头一直流水，管不住', '周六日来维修', '0', '1550807988', '1550807988', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', null, null);
INSERT INTO `repair_order` VALUES ('2', '2019022210299509', '', '张惠奇', '15176628062', '', '1', '第七小区', '512', '路由器问题', '一直连接不上网络', '周六日来维修', '1', '1550808111', '1551149469', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', '', null);
INSERT INTO `repair_order` VALUES ('3', '2019022210299510', '', '张惠奇', '15176628062', null, '2', '第八小区', '512', '路由器问题', '一直连接不上网络', '周六日来维修', '1', '1550808111', '1550808111', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', null, 'nihao');

-- ----------------------------
-- Table structure for share
-- ----------------------------
DROP TABLE IF EXISTS `share`;
CREATE TABLE `share` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(40) DEFAULT NULL COMMENT '分享者',
  `url` varchar(100) DEFAULT NULL COMMENT '分享地址',
  `code` varchar(10) DEFAULT NULL COMMENT '邀请码',
  `addtime` varchar(20) DEFAULT NULL COMMENT '生成时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of share
-- ----------------------------
INSERT INTO `share` VALUES ('1', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://www.repair.com/home/index/register?num=346789', '346789', '1553220022');
INSERT INTO `share` VALUES ('2', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://www.repair.com/home/index/register?num=125678', '125678', '1553221169');
INSERT INTO `share` VALUES ('3', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://www.repair.com/home/index/register?num=234569', '234569', '1553221337');
INSERT INTO `share` VALUES ('4', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://www.repair.com/home/index/register?num=123489', '123489', '1553221339');
INSERT INTO `share` VALUES ('5', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://www.repair.com/home/index/register?num=124578', '124578', '1553223121');
INSERT INTO `share` VALUES ('6', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=456789', '456789', '1554261755');
INSERT INTO `share` VALUES ('7', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=234689', '234689', '1554261809');
INSERT INTO `share` VALUES ('8', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=346789', '346789', '1554261882');
INSERT INTO `share` VALUES ('9', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=134689', '134689', '1554261882');
INSERT INTO `share` VALUES ('10', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=135789', '135789', '1554261903');
INSERT INTO `share` VALUES ('11', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=123567', '123567', '1554262033');
INSERT INTO `share` VALUES ('12', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=345678', '345678', '1554262067');
INSERT INTO `share` VALUES ('13', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/home/index/register?num=124579', '124579', '1554262351');
INSERT INTO `share` VALUES ('14', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://ceshi.kamihu.com/index/index/register?num=124689', '124689', '1554262473');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `openid` varchar(255) DEFAULT NULL COMMENT '微信中唯一的标识符',
  `headimgurl` varchar(255) DEFAULT NULL COMMENT '头像',
  `telephone` varchar(30) DEFAULT '' COMMENT '注册的手机号码',
  `username` varchar(255) DEFAULT '' COMMENT '注册的姓名',
  `group` varchar(30) DEFAULT '' COMMENT '分组信息(所属的片区)',
  `area` varchar(50) DEFAULT NULL COMMENT '所属的小区',
  `address` varchar(255) DEFAULT '' COMMENT '地址信息',
  `addtime` varchar(255) DEFAULT '' COMMENT '添加时间',
  `identity` varchar(255) DEFAULT '0' COMMENT '身份选择（0报修 1维修 2协管者）',
  `is_register` int(10) NOT NULL DEFAULT '0' COMMENT '是否注册过(0未注册 1注册)',
  `is_check` int(10) NOT NULL DEFAULT '0' COMMENT '是否审核(0 未审核  1 审核)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('4', 'Kyermë', 'oOnXGwvmG0kPcrQO7CjkzMGqHN_M', 'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ervmh8icaUd9yOxVugIO3ZtXer0icJNXZ7xPiaW9FhscYkgSqDqa8ialiaoHTAZqeLtjg8jCictVQPBfNDQ/132', '', '', '1', null, '', '1550738794', '99', '1', '0');
INSERT INTO `user` VALUES ('6', 'Sam', 'oOnXGwrfWmHuLnED77BTFCIWn3Os', 'http://thirdwx.qlogo.cn/mmopen/vi_32/0iaGqqJtNGrq6oia5KOdZVOcrWRXqFIbx2GfMTS9jIqgXpWfIFM3ne4Dq3pDJfCpwZI9laxRFtKKveBdOsiaIo8vA/132', '', '', '', null, '', '1550738794', '', '0', '0');
INSERT INTO `user` VALUES ('7', '风清扬', 'oOnXGwpc7_8My4YLpDkTnbSFdrak', 'http://thirdwx.qlogo.cn/mmopen/vi_32/5Jwdq5hdxaQGMC3horzmbBia32VialnqBmr50zd0HKAyKfGRzpwdzUw9kd7WcG7UxfwuFeE3Y7MCIu5lN7g8K2mw/132', '15176628061', '张惠奇哈', '1', '天水小区', '512', '1554262552', '2', '1', '1');
INSERT INTO `user` VALUES ('8', '惶恐不安的我', null, null, '15176628063', '张天师', '6', null, '天水小城', '1551166024', '0', '0', '0');
INSERT INTO `user` VALUES ('9', '天下之大', null, null, '15176628000', '独孤九剑', '1', null, '第三小区的张雅丹', '1551238860', '0', '1', '0');
INSERT INTO `user` VALUES ('10', 'yy', 'oOnXGwrxYZ7iZZxo1tEYci9Kjlnk', 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLSfHuP26MM5y0C0tCia1icJOz2aib31jwAlicJu1TSTQ3MptkD7CEF9fIDP84FHIfxCcTRgY7ShNnJQ/132', '13890276475', 'lqj', '1', '恒升', '什邡', '1555061360', '0', '1', '0');
