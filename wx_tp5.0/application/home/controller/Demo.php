<?php
namespace app\home\controller;
use think\Controller;
use \app\home\controller\Common;

// ak可以从应用中获取
class Demo extends  Common
{

    // 地图测试
    public function demo()
    {
        $ak ="vEuxcgoZb0cWgLr7DoRXrwK8hIbYfCz9";
        $url ="http://api.map.baidu.com/geocoder/v2/?location=35.658651,139.745415&output=json&pois=1&ak=".$ak;
        $json =file_get_contents($url);
        echo "<pre>";
        var_dump(json_decode($json,true));
    }
    // 机器人测试
    public function demo2()
    {
        var_dump($_GET['info']);
        $url ="http://www.tuling123.com/openapi/api?key=96308475006241449b53013d66f8e387&info=".$_GET['info'];
        $res = file_get_contents($url);
        var_dump($res);exit;
    }
    public function demo3()
    {
        echo "网页授权测试";
    }
    public function demo4()
    {
        echo "哈哈哈哈";
    }
    
}

