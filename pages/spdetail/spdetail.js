var WxAutoImage = require('../../js/detailImage.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496380372698&di=15126bdf8fca3d5205c2ea265ebb6b96&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150703%2Ftooopen_sy_132714591175.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3601106917,3576897463&fm=21&gp=0.jpg',
           
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
      desc:options.desc,
      pic:options.pic,
     })
     
  	}

})