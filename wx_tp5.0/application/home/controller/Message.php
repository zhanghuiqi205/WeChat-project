<?php
namespace app\home\controller;

use think\Controller;


class Message extends Controller
{
    public function valid()
    {
        
        $echoStr = input('echostr');
        if ($echoStr) {
            //valid signature , option
            if ($this->checkSignature()) {
                //验证成功后，返回$echoStr字符串给微信处理
                echo $echoStr;
                exit;
            }
        } else {
            $this->responseMsg();
        }
    }

    private function checkSignature()
    {
        $signature = input("signature");
        $timestamp = input("timestamp");
        $nonce = input("nonce");

        $token = 'token';
        $tmpArr = array($token, $timestamp, $nonce);
        // use SORT_STRING rule
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);

        if ($tmpStr == $signature) {
            return true;
        } else {
            return false;
        }
    }

    public function responseMsg()
    {
        // 接受传递的xml格式的数据
        $postStr = file_get_contents("php://input", 'r');

        if (empty($postStr)){
            echo "";
            exit;
        }
        libxml_disable_entity_loader(true);
        // 将xml数据转换为对象  当需要使用数据时使用对象调用属性即可
        $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        
        // 发送方帐号（一个OpenID）
        $fromUsername = $postObj->FromUserName;
        // 开发者微信号
        $toUsername = $postObj->ToUserName;
        // 文本消息内容  仅仅针对于文本消息有值
        $keyword = trim($postObj->Content);
        $time = time();
        $textTpl = "<xml>
        	<ToUserName><![CDATA[%s]]></ToUserName>
        	<FromUserName><![CDATA[%s]]></FromUserName>
        	<CreateTime>%s</CreateTime>
        	<MsgType><![CDATA[%s]]></MsgType> 
        	<Content><![CDATA[%s]]></Content> 
        	</xml>";
        $picTpl="<xml>
        	<ToUserName><![CDATA[%s]]></ToUserName>
        	<FromUserName><![CDATA[%s]]></FromUserName>
        	<CreateTime>%s</CreateTime>
        	<MsgType><![CDATA[%s]]></MsgType>
        	<Image>
        		<MediaId><![CDATA[%s]]></MediaId>
        	</Image>
        	</xml>";
        $voiceTpl="<xml>
        	<ToUserName><![CDATA[%s]]></ToUserName>
        	<FromUserName><![CDATA[%s]]></FromUserName>
        	<CreateTime>%s</CreateTime>
        	<MsgType><![CDATA[%s]]></MsgType>
        	<Voice>
        		<MediaId><![CDATA[%s]]></MediaId>
        	</Voice>
        	</xml>";
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
        $newsTpc="<xml>
        	<ToUserName><![CDATA[%s]]></ToUserName>
        	<FromUserName><![CDATA[%s]]></FromUserName>
        	<CreateTime>%s</CreateTime>
        	<MsgType><![CDATA[%s]]></MsgType>
        	<ArticleCount>%d</ArticleCount>
        	<Articles>%s</Articles>
        	</xml>";
        $MsgType = $postObj->MsgType;
        if($MsgType == 'text'){
            if($keyword == '图片'){
                // 关于此MediaId需要从素材库中获得，没有可以临时使用消息返回的媒体ID
                $MediaId = 'lrb6ShpJm0d_J58LepVUtAVeamVjobw1FHQVO9P8SNR0JEKPl1EgnOvwBVn5taQz';
                $resultStr = sprintf($picTpl, $fromUsername, $toUsername, $time, 'image',$MediaId);
                echo $resultStr;
            }elseif($keyword == '语音'){
                // 关于此MediaId需要从素材库中获得，没有可以临时使用消息返回的媒体ID
                $MediaId = 'mVzO7dBn1pHWw7FzoFvVHqVC9GgNMkOmBxjhMICNK7KvyKjCuXiISIj1uyKFczRi';
                $resultStr = sprintf($voiceTpl, $fromUsername, $toUsername, $time, 'voice',$MediaId);
                echo $resultStr;
            }elseif($keyword == '视频'){
                // 关于此MediaId需要从素材库中获得，没有可以临时使用消息返回的媒体ID
                $MediaId = 'luFAI7hh2H5-5skuA3KG4jKqE5sBzKTcT1IJhUECEYc9_CznEk1YH0FP2B5L7prB';
                $Title = $Description = '微信回复视频有坑';
                $resultStr = sprintf($VideoTpl, $fromUsername, $toUsername, $time, 'video',$MediaId,$Title,$Description);
                echo $resultStr;
            }elseif($keyword == '图文'){
                // 模拟从数据库中查询
                $data = array(
                    array('Title'=>'a','Description'=>'b','PicUrl'=>'http://wx.qlogo.cn/mmopen/1JPdic49icnxtAcxCh3V3lpEhhywYflEqrIqAtGRkebelfXcSNJGuU5icNvkrbkN0Tiaz2Fzc2QibcZopPzicTHcrtic43QL55jIeTT/64','Url'=>'http://itcast.cn')
                );
                foreach ($data as $key => $value) {
                    $Articles .="<item>
						<Title><![CDATA[{$value['Title']}]]></Title> 
						<Description><![CDATA[{$value['Description']}]]></Description>
						<PicUrl><![CDATA[{$value['PicUrl']}]]></PicUrl>
						<Url><![CDATA[{$value['Url']}]]></Url>
					</item>";
                }
                $count = count($data);
                $resultStr = sprintf($newsTpc, $fromUsername, $toUsername, $time, 'news',$count,$Articles);
                echo $resultStr;
            }else{
                // 接受到了一个文本消息
                $contentStr = "你说的话是：".$keyword;
                // 字符串中的内容进行替换 按照消息回复的格式最终响应结果
                $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $MsgType, $contentStr);
                file_put_contents('2', $resultStr);
                echo $resultStr;
            }
        }
        elseif($MsgType == 'image'){
            $contentStr = "图片消息MediaId为：".$postObj->MediaId.'图片的地址为：'.$postObj->PicUrl;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
            file_put_contents('2', $resultStr);
            echo $resultStr;
        }
        elseif($MsgType == 'voice'){
            $contentStr = "语音消息MediaId为：".$postObj->MediaId.'具体内容为'.$postObj->Recognition;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
            file_put_contents('2', $resultStr);
            echo $resultStr;
        }
        elseif($MsgType == 'video'){
            $contentStr = "视频消息MediaId为：".$postObj->MediaId;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
            file_put_contents('2', $resultStr);
            echo $resultStr;
        }
        elseif($MsgType == 'location'){
            $contentStr = "经度为：".$postObj->Location_Y.'维度'.$postObj->Location_X.'具体地址为：'.$postObj->Label;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
            file_put_contents('2', $resultStr);
            echo $resultStr;
        }
        elseif($MsgType == 'link'){
            $contentStr = '消息的标题为'.$postObj->Title;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
            file_put_contents('2', $resultStr);
            echo $resultStr;
        }
        elseif($MsgType == 'event'){
            // 表示为事件
            $Event = $postObj->Event;//获取事件的类型
            if($Event == 'CLICK'){
                // 表示为菜单的点击事件
                $EventKey = $postObj->EventKey;//获取点击的哪一个菜单
                if($EventKey == 'info'){
                    $contentStr = '本人年芳十八岁！';
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, 'text', $contentStr);
                    echo $resultStr;
                }
            }
        }
        else{
            echo "Input something...";
        }
    }
}