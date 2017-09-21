// var WxAutoImage = require("../../js/wxAutoImageCal.js");
// var app = getApp();

// Page({
//     data: {

//     },
//     cusImageLoad: function(e){
//         var that = this;
//         that.setData(WxAutoImage.wxAutoImageCal(e));
//     }
// })




// 抽奖

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    circleList: [],//圆点数组
    awardList: [],//奖品数组
    colorCircleFirst: '#FFDF2F',//圆点颜色1
    colorCircleSecond: '#FE4D32',//圆点颜色2
    colorAwardDefault: '#F5F0FC',//奖品默认颜色
    colorAwardSelect: '#ffe400',//奖品选中颜色
    indexSelect: 0,//被选中的奖品index
    isRunning: false,//是否正在抽奖
    x:1,            //抽奖次数
    imageAward: [
      'http://sc.hanjren.com/images/1.jpg',
      'http://sc.hanjren.com/images/2.jpg',
      'http://sc.hanjren.com/images/3.jpg',
      'http://sc.hanjren.com/images/4.jpg',
      'http://sc.hanjren.com/images/5.jpg',
      'http://sc.hanjren.com/images/6.jpg',
      'http://sc.hanjren.com/images/7.jpg',
      'http://sc.hanjren.com/images/8.jpg',
    ],//奖品图片数组
  },

  onLoad: function () {
    var _this = this;
    //圆点设置
    var leftCircle = 7.5;
    var topCircle = 7.5;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      } else {
        return
      }
      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });
    }
    this.setData({
      circleList: circleList
    })
    //圆点闪烁
    setInterval(function () {
      if (_this.data.colorCircleFirst == '#FFDF2F') {
        _this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F',
        })
      } else {
        _this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32',
        })
      }
    }, 500)
    //奖品item设置
    var awardList = [];
    //间距,怎么顺眼怎么设置吧.
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 25;
        leftAward = 25;
      } else if (j < 3) {
        topAward = topAward;
        //166.6666是宽.15是间距.下同
        leftAward = leftAward + 166.6666 + 15;
      } else if (j < 5) {
        leftAward = leftAward;
        //150是高,15是间距,下同
        topAward = topAward + 150 + 15;
      } else if (j < 7) {
        leftAward = leftAward - 166.6666 - 15;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 15;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({ topAward: topAward, leftAward: leftAward, imageAward: imageAward });
    }
    this.setData({
      awardList: awardList
    })
  },
  //开始游戏
  startGame: function () {
    //   次数
    //   var x=1;
    //   setInterval(function(){var x=0;86400000});
    var yy=Math.floor(Math.random()*10);
        var yyy=yy*10;
      if(this.data.x){
          if (this.data.isRunning) return
                this.setData({
                isRunning: true
                })
                var _this = this;
                var indexSelect = 0
                var i = 0;
                
                var timer = setInterval(function () {
                indexSelect++;
                //这里我只是简单粗暴用y=30*x+200函数做的处理.可根据自己的需求改变转盘速度
                

                i += yyy;
                if (i > 1000) {
                    //去除循环
                    clearInterval(timer)
                    //获奖提示
                    if(_this.data.indexSelect + 1==1){
                      var str="50元";
                    }else if(_this.data.indexSelect + 1==2){
                      var str="50元";
                    }else if(_this.data.indexSelect + 1==3){
                      var str="50元";
                    }else if(_this.data.indexSelect + 1==4){
                      var str="10元";
                    }else if(_this.data.indexSelect + 1==5){
                      var str="299元";
                    }else if(_this.data.indexSelect + 1==6){
                      var str="10元";
                    }else if(_this.data.indexSelect + 1==7){
                      var str="5元";
                    }else{
                      var str="20元";
                    }
                    wx.showModal({
                    title: '恭喜您',
                    content: '获得了' + str + "优惠券,联系客服领取哦！",
                    showCancel: false,//去掉取消按钮
                    success: function (res) {
                        if (res.confirm) {
                        _this.setData({
                            isRunning: false,
                            
                        })
                        
                        }
                        wx.setStorage({
                          key:"key",
                          data:_this.data.indexSelect + 1
                        })
                    }

                    
                    })
                
                }
                // setInterval(function(){
                //     _this.setData({
                    
                //     x:1,
                // })
                    
                //    ,86400000});
                indexSelect = indexSelect % 8;
                _this.setData({
                    indexSelect: indexSelect,
                    x:0,
                })
                }, (200 + i))
      }else{
        wx.showModal({
        //   title: '对不起',
          content: '今日机会已用尽，请明日再来！',
          showCancel: false,//去掉取消按钮
          success: function (res) {
            // if (res.confirm) {
            //   _this.setData({
            //     isRunning: false
            //   })
            // }
          }
        })
         return false;
  }
      }
    
})
