import dictiContainer  from '../../commom/wishWord';
import blessName  from '../../commom/blessName';
Page({
    data:{
        blessList:[],
        userName:"",
        shareName:""
    },
    onShareAppMessage:function(options){
        var t = this;
        var shareObj = {
            title: "新年送祝福",        // 默认是小程序的名称(可以写slogan等)
            path: '/pages/wish/wish?name='+t.data.shareName,        // 默认是当前页面，必须是以‘/’开头的完整路径
            imageUrl: 'http://pic.qqtn.com/up/2017-12/201712041459334817579.png',     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
            success: function(res){

            },
            fail: function(){

            },
            complete: function(){
                // 转发结束之后的回调（转发成不成功都会执行）
            }
        };
        return shareObj;
    },
    getUserInfo:function(callBack){
        var t = this;
        wx.getUserInfo({
            success: function(res){
                // success；
                console.log(res);
                var userName = res.userInfo.nickName;
                callBack&&callBack(userName);

            },
            fail: function() {
                // fail
                console.log("获取失败！")
            },
            complete: function() {
                // complete
                console.log("获取用户信息完成！")
            }
        })
    },
    onLoad:function(options){
        var t = this;
        if(options.idNum){
            t.setData({
                userName:blessName[parseInt(options.idNum,10)]+'汪'+options.originalName
            });
            t.setData({
                yourName:''
            });
            t.setData({
                shareName:options.originalName
            });
        }else{
            t.setData({
                userName:options.name
            });
            this.getUserInfo(function(name){

                t.setData({
                    yourName:'('+name+')'
                });
                t.setData({
                    shareName:name
                });
            });
        }
        this.createBless();

    },
    createBless:function(){
        function randomNum(minNum,maxNum){
            switch(arguments.length){
                case 1:
                    return parseInt(Math.random()*minNum+1,10);
                    break;
                case 2:
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                    break;
                default:
                    return 0;
                    break;
            }
        }
        var arr = [];
        for(var i = 0;i<4;i++){
            arr.push(dictiContainer[randomNum(i*15,(i+1)*15)])
        }
        this.setData({
            blessList:arr
        });
        return arr;
    }
});