<?php
namespace app\home\controller;
use think\Controller;
use think\Request;
use think\Db;
require_once('function.php');
class Common extends Controller{
    public $accessToken ="";   //属性保存在access_token
    public $appid ="wx1ba8f59d9e2c0be0";
    public $appsecret="9e65155599fb9ec047455e197ff6e121";
    public function __construct(Request $request)
    {
       parent::__construct();
       $this->accessToken = get_access_token();
      //获得方法    
       $action_name =$request->action();
      //获得控制器   
        $controller_name = $request->controller();
       if(!cookie('user')){
          if($action_name !='getcode'){
                $this->auth($action_name, $controller_name);
          }
       }
      
      
    }
    public function auth($action_name, $controller_name)
    {
    //    var_dump($action_name, $controller_name);
       $bak = urlencode("http://www.xiaoziheng.club/home/".$controller_name."/".$action_name);
       
       $redirecr_uri =urlencode('http://www.xiaoziheng.club/home/demo/getcode?bak='.$bak);
       $url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$this->appid."&redirect_uri=".$redirecr_uri."&response_type=code&scope=snsapi_userinfo&state=".time()."#wechat_redirect";
       header('Location:'.$url);
    }
    public function getcode(Request $request)
    {
        $code = $_GET['code'];
        if(!$code){
            echo '微信服务器故障';
            exit;
        }
        // 通过code换取网页授权中的access_token
        $url ="https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$this->appid."&secret=".$this->appsecret."&code=".$code."&grant_type=authorization_code";
        $result =file_get_contents($url);
        $result = json_decode($result,true);
        if(!$result){
            echo '微信服务器故障';
            exit;
        }
        // 获取用户的基本信息，此操作仅限scope为snspai_userinfo
        $url ="https://api.weixin.qq.com/sns/userinfo?access_token=".$result['access_token']."&openid=".$result['openid']."&lang=zh_CN";
        $result =file_get_contents($url);
        $result = json_decode($result,true);
        $userInfo = db('user')->where("openid","=",$result['openid'])->find();
        if(!$userInfo){
            echo '操作数据可以';
            $data = [
                'nickname' =>$result['nickname'] ,
                'openid'=>$result['openid'],
                'headimgurl'=>$result['headimgurl']
            ];
            db('user')->insert($data);
            $userInfo = $result;
        }
        $bak = $_GET['bak'];
        cookie('user',$userInfo);
        header('Location:'.$bak);
    }
}