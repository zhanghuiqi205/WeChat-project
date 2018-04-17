<?php
namespace app\home\controller;
use think\Controller;
require_once('function.php');
class File extends Controller{
   public $accessToken ="";
   public function __construct()
   {
       parent::__construct();
       $this->accessToken =get_access_token();
   }
//    上传临时素材
   public function lsupload()
   {
       $url="https://api.weixin.qq.com/cgi-bin/media/upload?access_token=".$this->accessToken."&type=image";
       
       $file =dirname(THINK_PATH).'/1.jpg';
       $data = array(
          "media"=>new \CurlFile($file)
       );
       $res = http_curl($url,$data,'post');
       dump($res);
   }
   // 添加图文素材
    public function addNews()
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/material/add_news?access_token='.$this->accessToken;

        $data['articles'] = db('newsMedia')->select();
        $list = json_encode($data,JSON_UNESCAPED_UNICODE);
        echo $list;
        $res = http_curl($url,$list,'post');
        dump($res);
    }
    // 手动缩略图的上传
    public function addThumb()
    {
    	$url = 'https://api.weixin.qq.com/cgi-bin/material/add_material?access_token='.$this->accessToken.'&type=image';
    	$file = dirname(THINK_PATH).'/1.jpg';

        $data = array(
            'media'=>new \CurlFile($file)
        );
        $res = http_curl($url,$data,'post');
        dump($res);

    }
    // 创建标签
    public function createTag()
    {
    	$url = 'https://api.weixin.qq.com/cgi-bin/tags/create?access_token='.$this->accessToken;
    	$data = '{"tag" : {"name" : "中国好声音"}}';
    	$res = http_curl($url,$data,'post');
    	dump($res);
    }
    // 查看已有标签
    public function getTag()
    {
    	$url = 'https://api.weixin.qq.com/cgi-bin/tags/get?access_token='.$this->accessToken;
    	$res = http_curl($url);
    	dump($res);
    }
    //设置标签
    public function setTag()
    {
    	$url = 'https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging?access_token='.$this->accessToken;
    	$data = '{"openid_list" : ["oOnXGwpc7_8My4YLpDkTnbSFdrak","oOnXGwsELMp54MG3Vl0abY4aLluk" ], "tagid" : 100 }';
    	$res = http_curl($url,$data,'post');
    	dump($res);
    }
    // 按照标签给用户群发消息
    public function send()
    {
    	$url = 'https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token='.$this->accessToken;
    	// 根据要发送的消息的类型判断拼接不同的json格式数据
    	$data='{
		   "filter":{
		      "is_to_all":false,
		      "tag_id":100
		   },
		   "text":{
		      "content":"测试按照标签，群发消息"
		   },
		    "msgtype":"text"
		}';
		$res = http_curl($url,$data,'post');
    	dump($res);
    }

} 