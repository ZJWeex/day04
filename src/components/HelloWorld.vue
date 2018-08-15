<template>
  <div class="subdiv">
    <text class="button" @click="getFetch">GET加载数据</text>
    <text class="button" @click="postFetch">POST加载数据</text>
    <text class="button" @click="postModelFetch">POSTModel 加载数据</text>
  </div>
</template>

<script>
import Fetch from '@/Module/Fetch.js'

var modal = weex.requireModule('modal')
var stream = weex.requireModule('stream')

export default {
  name: 'Hello',
  data () {
    return {
      GET_URL :'http://app.taocaimall.com/taocaimall/superiorGoodsTemplate.json',
      POST_URL:'http://ts.taocaimall.com/cg/pub/about/CgVersion'
    }
  },
  created: function() {
     setInterval(function(){
      console.log('11111')
    },1000);
    setTimeout(function(){
      console.log('2222')
    },1000);
  },
  methods: {
    postFetch: function() {
      var param = {app_version:'1.0.0',os_flag:'CG_ios'};
      var url = 'cg/pub/about/CgVersion';
     
      Fetch.post(url, param, function(data){
        modal.alert({
            message:data
          },function(vaule){})

      },function(err){
        modal.alert({
            message:err
          },function(vaule){})
      });
    },
    postModelFetch: function () {
      var param = {'os_flag':'ios'};
      var url = 'http://app.taocaimall.com/taocaimall/version.json';
      Fetch.postModel(url,{requestmodel:JSON.stringify(param)}, function(data){
        modal.alert({
            message:data
          },function(vaule){})
      }, function(err){
        modal.alert({
            message:err
          },function(vaule){})
      });
    },
    getFetch: function() {
      Fetch.get(this.GET_URL,function(data){
        modal.alert({
            message:data
          },function(vaule){})
      },function(er){
        modal.alert({
            message:err
          },function(vaule){})
      })
    },
    postLoadData: function() {
      var HTTPHeader = {}
      var jsonType = ''
      if (WXEnvironment.platform === 'Web'){
        HTTPHeader = {'Content-Type':'application/json'}
        jsonType = 'json'
      }else{
        HTTPHeader = {'Content-Type':'application/json;charset=utf-8'}
        jsonType = 'jsonp'
      }
      stream.fetch({
        method: 'POST',
        url: this.POST_URL,
        type:jsonType,
        headers:HTTPHeader,
        body:JSON.stringify({app_version:'1.0.0',os_flag:'CG_ios'})
      },function(ret){
        if(!ret.ok){
          modal.toast({
            message: 'request failed',
            duration: 0.3
          })
        }else{
          var result = JSON.stringify(ret.data);
          console.log('post:'+result);
          modal.alert({
            message:result
          },function(vaule){})
        }
      },function(response){
        console.log('get in progress:'+response.length);
        console.log('response:'+response);
      })
    },
    getLoadData:function() {
      stream.fetch({
        method: 'GET',
        url: this.GET_URL,
        type:'jsonp'
      },function(ret) {
        if(!ret.ok){
          modal.toast({
            message: 'request failed',
            duration: 0.3
          })
        }else{
          var result = JSON.stringify(ret.data);
          console.log('get:'+result);
          modal.alert({
            message:result
          },function(vaule){})
        }
      },function(response){
        console.log('get in progress:'+response.length);
        console.log('response:'+response);
      })
    }
  }
}
</script>

<style scoped>
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>
