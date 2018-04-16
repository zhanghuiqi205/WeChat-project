<?php
namespace app\home\controller;
use think\Controller;

class Msg extends Controller{
    public function valid(){ 
        
        //获取随机字符串
        $echoStr = input("echostr");
        
        if($echoStr){
            // 验证接口的有效性，由于接口有效性的验证必定会传递echostr 参数
            if($this ->checkSignature()){
                echo $echoStr;
               
                exit;
            }
        }else{
            $this->responseMsg();
        }
    }
    protected function checkSignature()
    {
        // 微信加密签名
        $signature = input("signature");
        $timestamp = input("timestamp");//时间戳
        $nonce =input("nonce");//随机数
        $token = "weixin";  //token值，必须和你设置的一样
        $tmpArr =array($token,$timestamp,$nonce);
        sort($tmpArr,SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr =sha1($tmpStr);
        if($tmpStr == $signature){
            return true;
        }else{
            return false;
        }
    }
    
    function responseMsg()
    { 
  
       $postStr = file_get_contents('php://input','r');
       if(empty($postStr)){
           echo "";
           exit;
       }   
       libxml_disable_entity_loader(true);
       $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                // 发送方账号
                $fromUsername = $postObj->FromUserName;
                //开发者账号
                $toUsername = $postObj->ToUserName;
                // 文本信息内容，仅仅针对文本消息有值
                $keyword = trim($postObj->Content);
                $time = time();
                // 文字模板
                $textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							<FuncFlag>0</FuncFlag>
                            </xml>"; 
                // 图片模板
                $picTpl="<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <Image>
                    <MediaId><![CDATA[%s]]></MediaId>
                    </Image>
                </xml>";
                // 语音模板
                $voiceTpl="<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <Voice>
                        <MediaId><![CDATA[%s]]></MediaId>
                    </Voice>
                    </xml>";
                    // 视频模板
                $VideoTpl="<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <Video>
                        <MediaId><![CDATA[%s]]></MediaId>
                        <Title><![CDATA[%s]]></Title>
                        <Description><![CDATA[%s]]></Description>
                    </Video>
                    </xml>";
                    // 图文模板
                $newsTpc="<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <ArticleCount>%d</ArticleCount>
                    <Articles>%s</Articles>
                    </xml>";
                 $msgType =$postObj->MsgType;                      
				if($msgType == "text")
                {
                    // 根据keyword表中的字段进行相等匹配
                    $info = db('Keyword')->where(array('keyword'=>$keyword))->find();
                   
                    if(!$info){
                        //针对没有匹配的关键词使用机器人回复
                        $url ="http://www.tuling123.com/openapi/api?key=96308475006241449b53013d66f8e387&info=".$keyword;
                        
                        $result = file_get_contents($url);
                        $result = json_decode($result,true);
                        
                        if($result['code'] == 100000){
                            // 回复文本消息
                            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $result['text']);
                        }elseif ($result['code'] == 200000) {
                            $str = '<a href="'.$result['url'].'">'.$result['text'].'</a>';
                            // 机器人中区分为链接
                            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $str);
                        }elseif ($result['code'] ==302000) {
                            // 机器人中的新闻
                            
                            $data = $result['list'];
                           
                            for($i=0;$i<8;$i++){
                                $Articles ="<item>
                                    <Title><![CDATA[{$data[$i]['article']}]]></Title> 
                                    <Description><![CDATA[{$data[$i]['article']}]]></Description>
                                    <PicUrl><![CDATA[{$data[$i]['icon']}]]></PicUrl>
                                    <Url><![CDATA[{$data[$i]['detailurl']}]]></Url>
                                </item>";
                            }
                            
                            $count = 1;
                            $resultStr = sprintf($newsTpc, $fromUsername, $toUsername, $time, 'news',$count,$Articles);	
                        }else{
                            // 回复文本消息
                            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', '抱歉没有理解，再说一遍问题');
                        }
                        echo $resultStr;
                        // file_put_contents('2',33333);
                        exit;
                    }
                    $content_id = $info['content_id'];

	                $contents = db('Contents')->where("id=%d",$content_id)->find();

                    if($contents['type']=='text'){
                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contents['content']);
                    }elseif(($contents['type'] == 'image') || 
                        ($contents['type'] == 'voice')){
                        $resultStr = sprintf($picTpl, $fromUsername, $toUsername, $time, $contents['type'],$contents['mediaid']);
                    }elseif($contents['type']=='video'){
                        $resultStr = sprintf($VideoTpl, $fromUsername, $toUsername, $time, 'video',$contents['mediaid'],$contents['title'],$contents['description']);
                    }elseif($contents['type']=='news'){
                        // 从新闻表中查询数据
                        $data = D('news')->where("id in (%s)",$contents['content'])->select();
                        foreach ($data as $key => $value) {
                            $Articles .="<item>
                                <Title><![CDATA[{$value['title']}]]></Title> 
                                <Description><![CDATA[{$value['description']}]]></Description>
                                <PicUrl><![CDATA[{$value['picurl']}]]></PicUrl>
                                <Url><![CDATA[{$value['url']}]]></Url>
                            </item>";
                        }
                        $count = count($data);
                        $resultStr = sprintf($newsTpc, $fromUsername, $toUsername, $time, 'news',$count,$Articles);
                    }else{
                        // 音乐的回复内容
                        $resultStr = '';
                    }
                    echo $resultStr;


                    // if($keyword=="图片"){
                        
                    //     // 关于此MediaId需要从素材库中获得，没有可以使用临时消息返回的媒体id
                    //     $MediaId="y-da216eEhArJ4yjtvSEW9EggxnAi8QWrfLqYosZej1uARvtx2HfUS4sO2XMOwwQ";
                    //     $resultStr = sprintf($picTpl, $fromUsername, $toUsername, $time, 'image', $MediaId);
                    //     echo $resultStr;
                    // }elseif($keyword=="语音"){
                    //     // 关于此MediaId需要从素材库中获得，没有可以使用临时消息返回的媒体id
                    //     $MediaId="BRxxaBbcDsoqCcISaWYJANG-ZL6DP0ezGFNadYhR9QdUlPqRODGS5apeFaTnpyOV";
                    //     $resultStr = sprintf($voiceTpl, $fromUsername, $toUsername, $time, 'voice', $MediaId);
                    //     echo $resultStr; 

                    // }elseif($keyword=="视频"){
                    //     //关于此MediaId需要从素材库中获得，没有可以使用临时消息返回的媒体id
                    //     $MediaId="xxMyAoPbUt1u3q5Z95xrhafNzyvL3Tg08E-9Ub2m6db_Elj4XAJHr2pUOqLhREyB";
                    //     $Title = $Description ="视频还是好看的";
                    //     $resultStr = sprintf($VideoTpl, $fromUsername, $toUsername, $time, 'video', $MediaId, $Title,$Description);
                    //     echo $resultStr; 
                    // }elseif($keyword=="图文"){
                       
                    //     $data = array(
                    //         array('Title'=>'图文消息','Description'=>'效果好像还不错啊','PicUrl'=>'http://mmbiz.qpic.cn/mmbiz_jpg/E3TENE8JsTAqus3ic5qEtt4wl14ibBu4UaobarzTVOP18Awt83hkZM0aI9XStapN4xay6JI4lfm0H7QnKSfxQyVA/0','Url'=>'http://xiaomi.com')
                            
                    //     );
                    //     file_put_contents('2',$data[0]['Title']);
                    //      for ($i=0; $i <count($data); $i++) { 
                    //        $Articles .="<item>
                    //             <Title><![CDATA[{$data[$i]['Title']}]]></Title> 
                    //             <Description><![CDATA[{$data[$i]['Description']}]]></Description>
                    //             <PicUrl><![CDATA[{$data[$i]['PicUrl']}]]></PicUrl>
                    //             <Url><![CDATA[{$data[$i]['Url']}]]></Url>
                    //            </item>";
                    //      }    
                            
                    //     $count = count($data);
                    //     $resultStr = sprintf($newsTpc, $fromUsername, $toUsername, $time, 'news',$count,$Articles);
                    //     echo $resultStr;
                        
                    // }else{
                    //     // 接受一个文本消息
                    //     $contentStr = "Welcome to wechat world!";
                    //    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                    //     echo $resultStr;
                    // }
                	
                    
                }elseif($msgType=="image"){
                    $contentStr = "图片消息MediaId为：".$postObj->MediaId."图片地址为：".$postObj->PicUrl;
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                }elseif($msgType=="voice"){
                    $contentStr ="语音消息MediaId为：".$postObj->MediaId.'具体内容为:'.$postObj->Recognition;
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                }elseif($msgType=="video"){
                    $contentStr ="视频消息MediaId为：".$postObj->MediaId;
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                }elseif($msgType=="location"){

                    $Locatiuon_X = $postObj->Location_X;
                    $Locatiuon_Y = $postObj->Location_Y;
                    $ak ="vEuxcgoZb0cWgLr7DoRXrwK8hIbYfCz9";
                    $url ="http://api.map.baidu.com/geocoder/v2/?location=". $Locatiuon_X.','.$Locatiuon_Y."&output=json&pois=1&ak=".$ak;
                    $json = file_get_contents($url);
                    $result =json_decode($json,true);
                    $contentStr ="位置为".$result['result']['formatted_address']."经度为".$Locatiuon_X.','.$Locatiuon_Y;
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                }elseif($msgType=="link"){
                    $contentStr ="消息的标题为：".$postObj->Title;
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                }elseif($msgType=="event"){
                    // 表示为事件
                   $Event =$postObj->Event;//获取事件的类型
                   if($Event=="CLICK"){
                    // 表示为菜单的点击事件
                    $EventKey =$postObj->EventKey;
                    if($EventKey =="info"){
                        $contentStr ="本人年芳十八岁！";
                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                        echo $resultStr;
                    }else{
                        $contentStr ="本人年芳二十岁！";
                        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                        echo $resultStr;  
                    }
                   }elseif($Event=="subscribe"){
                    // 关注
                    $contentStr ="欢迎关注";
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time,'text', $contentStr);
                    echo $resultStr;
                    }elseif($Event=="unsubscribe"){
                      // 取消关注  不能回复消息
                      
                    }
                }else{
                    echo "inptu somthing....";
                }


    }

}