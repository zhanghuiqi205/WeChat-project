<?php
namespace app\home\controller;
require_once('function.php');
use think\Controller;
use \app\home\controller\Common;
class Index extends Common
{
    public function getAccessToken()
    {
        dump(get_access_token());
    }
    public function creatMenu()
    {
        //组装请求的url地址
        $url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$this->accessToken;

        $data = array(
            // button下的每一个元素
            "button"=>array(
                //第一个一级菜单
               array('type'=>'click',"name"=>"个人简介","key"=>"info"),
               array(
                   "name"=>"语言排行",
                   "sub_button"=>array(
                       array("name"=>'商品列表',"type"=>"view",
                       'url'=>"http://xiaoziheng.club/home/demo/demo4"),
                       array('name'=>'c/c++','type'=>'pic_sysphoto','key'=>'sysptoto'),
                       array('name'=>'java','type'=>'pic_weixin','key'=>'pic_weixin')
                   )
                   ),
                array('type'=>'click','name'=>'xxxx','key'=>'content')
                )
        );
    //    将数据转换为json格式
    $data = json_encode($data,JSON_UNESCAPED_UNICODE);
    $result = http_curl($url,$data,'post');
    dump($result);
    }

    //获取自定义菜单
    public function getMenu()
    {
        $url = "https://api.weixin.qq.com/cgi-bin/menu/get?access_token=".$this->accessToken;
        $res =http_curl($url);
        var_dump($res);
    }
    // 删除自定义菜单
    public function delMenu()
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/menu/delete?access_token='.$this->accessToken;
        $res =http_curl($url);
        dump($res);
    }
}
