// pages/youhui/index.js
Page({
  data:{

    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getStorage({
    key: 'key',
    success: function(res) {
        console.log(res.data)
        var str="http://sc.hanjren.com/images/"+res.data+".jpg";
        that.setData({    
          key: res.data,
         str: str
        })
    }
    
  })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  xxx:function(){
    wx.showToast({
          title: '联系客服消费哦',
          icon: 'success',
          duration: 2000,
          
        })
  }
})