<?php
// memcache操作类
class MyMemcache{
   public $conn;
   public $isMemcache =true;
   public function __construct($host="127.0.0.1",$port='11211')
   {
        //  建立连接
        if(class_exists('MyMemcache')){
            $obj =new \Memcache();
        }else{
            $this ->isMemcache =false;
            $obj =new \Memcached();
        }
        $obj ->addServer($host,$port);
        $this ->conn =$obj;
   }
   //获取数据    
   public function get($key)
   {
       return $this->conn->get($key);
   } 
   //设置数据
   public function set($key,$value,$expire=0)
   {
       if($this->isMemcache){
           $this->conn->set($key,$value,0,$expire);
       }else{
        // Memcached扩展的操作方式
        $this->conn->set($key,$value,$expire);   
       }
   }
}