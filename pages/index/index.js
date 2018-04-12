Page({
    launchAppError: function(e) {
        wx.showToast({
            title: '打开app失败',
            duration: 30000
        });
    },
    onLoad:function(){
        console.log("加载");
    },
    data:{
      name:""
    },
    inputName:function(event){
      var t  = this;
      t.setData({
          name:event.detail.value
      })
    },
    createWish:function(){
        var t = this;
        if(t.data.name.length){
            wx.showToast({
                title: '新年汪汪',
                icon: 'loading',
                duration: 30000
            });
            setTimeout(function(){
                wx.hideToast();
                wx.navigateTo({
                    url: '../bless/bless?name='+t.data.name
                })
            },2500)

        }else{
            wx.showModal({
                title: '输入名字',
                content: '请在内容区输入您的名字，获取您的新年汪汪',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }else{
                        console.log('用户点击取消')
                    }

                }
            })
        }
    }
});