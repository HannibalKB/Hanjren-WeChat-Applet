var WxAutoImage = require('../../js/detailImage.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496478224754&di=3de23f2cbb1f5ad44f993f34561c0e4f&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140515%2F240386-1405150S31943.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1496468335&di=f2cb48f0fe91768b04c0f41516706023&src=http://img.taopic.com/uploads/allimg/140515/240386-1405150P95970.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1496468290&di=44b45871134db862d9a1952767a506f5&src=http://img1.juimg.com/141205/330581-14120514301943.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: false
    },
    
    collect: function(){
        this.setData({
            iscollect: !this.data.iscollect
        })
        console.log(this.data.iscollect);
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
      onLoad: function(options) {
  		var that = this;
  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
      console.log(options);
      this.setData({    
      tj: options.tj,
      title:options.title,
     })
     
  	}

})