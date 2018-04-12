import createRand  from '../../commom/createRandom.js'
import man  from '../../commom/blessMan';
import woman  from '../../commom/blessWoman';
import blessName  from '../../commom/blessName';
Page({
    randomNum:function(minNum,maxNum){
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
    },
    onLoad:function(options){
        var t = this;
        var nowNum = t.getAsciiCode(options.name);
        while (nowNum>blessName.length-5){
            nowNum-=5;
        }
        nowNum = nowNum>0?(nowNum):((-1)*nowNum);
        nowNum = t.randomNum(0,nowNum);
        t.setData({
           nameNum:blessName[nowNum]
        });
        t.setData({
            "nickName":options.name
        });
        t.setData({
            pushNum:nowNum
        });
        t.setData({
            idNum:t.getAsciiCode(options.name)
        });
        wx.getUserInfo({
            success: function (res) {
                t.setData({
                    "sexType":res.userInfo.gender
                });
                if(parseInt(res.userInfo.gender,10)===1){
                    t.getYourDes(man);
                }else{
                    t.getYourDes(woman);
                }
            }
        })
    },
    getYourDes:function(arr){
       var t = this;
       var arrResult = [];
       var randomArr = t.createBless();
       for(var num = 0;num<randomArr.length;num++){
           arrResult.push(arr[randomArr[num]])
       }
       t.setData({
           desBox:arrResult
       })
    },
    data:{
        pathNum:0,
        nameNum:'',
      idNum:0,
        nickName:"",
        sexType:"",
        desBox:[]
    },
    createBless:function(){
      var t = this;
      var arr = createRand();
      for(var num = 0;num<arr.length;num++){
          arr[num] = arr[num]*t.data.idNum+2018
      }
        var newArrRan = [];
        for(var iun = 0;iun<arr.length;iun++){
            var nowNum = parseInt(arr[iun].toString(),10);
            var deleteNum = iun*14+94;
            while(nowNum>90){
                nowNum-=(deleteNum);
            }
            newArrRan.push((nowNum>0)?nowNum:nowNum*(-1));
        }
      return newArrRan
    },
    getAsciiCode:function(str){
        var strAscii = new Array();//用于接收ASCII码
        for(var i = 0 ; i < str.length ; i++ ){
            strAscii[i] = str.charCodeAt(i);//只能把字符串中的字符一个一个的解码
        }
        var getAscii = "";//把这些ASCII码按顺序排列
        for(var i = 0 ; i < strAscii.length ; i++ ){
            getAscii += strAscii[i];
            getAscii += "";
        }
        var num = parseInt(getAscii%2018,10) ;
        while (num>100){
            num-=8;
        }
        return num;
    },
    createWish:function(){
        var t = this;
        wx.showToast({
            title: '新年祝福',
            icon: 'loading',
            duration: 30000
        });
        setTimeout(function(){
            wx.hideToast();
            wx.navigateTo({
                url: '../wish/wish?idNum='+t.data.pushNum+'&originalName='+t.data.nickName
            })
        },2500)

    }
});