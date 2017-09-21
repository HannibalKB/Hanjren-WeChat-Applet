var app = getApp()
Page( {
  data: {
    
    userInfo: {},
    // projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
      icon: 'http://sc.hanjren.com/images/orders-icon.png',
      text: '我的优惠卷',
      link:"/pages/youhui/index"
      // isunread: true,
      // unreadNum: 2
    }, 
    // {4px
    //     icon: '../../images/iconfont-card.png',
    //     text: '我的代金券',
    //     isunread: false,
    //     unreadNum: 2
    //   }, 
      // {
      //   icon: '../../images/iconfont-icontuan.png',
      //   text: '我的拼团',
      //   isunread: true,
      //   unreadNum: 1
      // }, 
      {
        icon: 'http://sc.hanjren.com/images/adress-icon.png',
        text: '到店咨询',
        link:"/pages/lx/lx"
      }, 
      // {
      //   icon: 'http://sc.hanjren.com/images/iconfont-kefu.png',
      //   text: '联系客服---02089857585',
      //   bindtap:"callmeTap"
      // }, 
      // {
      //   icon: 'http://sc.hanjren.com/images/iconfont-help.png',
      //   text: '常见问题',
      //   link:"/page/component/index"
      // }
      ]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    }),
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
    
  },
  callmeTap: function() {
         wx.makePhoneCall({
           phoneNumber: '02089857585'
         })
       },
      makephone:function(){
        wx.makePhoneCall({
          phoneNumber: '02089857585' //仅为示例，并非真实的电话号码
        })
      },
      fankui:function(){
        
          
            wx.showActionSheet({
              itemList: ['写评论', '发图片'],
              success: function(res) {
                console.log(res.tapIndex);
                if(res.tapIndex==1){
                  wx.chooseImage({  
                      success: function(res) {  
                        var tempFilePaths = res.tempFilePaths  
                        wx.uploadFile({  
                          url: 'https://sc.hanjren.com/index.php/admin/upload/getImg', //仅为示例，非真实的接口地址  
                          filePath: tempFilePaths[0],  
                          name: 'file',  
                          formData:{  
                            'user': res 
                          },  
                          success: function(res){  
                            var data = res.data  
                            //do something
                            console.log(data);  
                          }  
                        })  
                      }  
                    })  
                }else{
                  wx.navigateTo({
                    url: '/pages/rj/rj'
                  })
                }
              },
              fail: function(res) {
                console.log(res.errMsg)
              }
            })
      }   
      ,
      tuichu:function(){
          wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
          success:function(){
            wx.clearStorage();
          }
        })
      },
      choseImg:function(){
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            wx.showLoading({
              title: '颜值测试中...',
              success:function(){
                wx.uploadFile({
                      url: 'https://sc.hanjren.com/index.php/admin/yanzhi/test', 
                      filePath: tempFilePaths[0],
                      name: 'file',
                      formData:{
                        'pic': res
                      },
                      success: function(res){
                        var data = res.data
                        console.log(data);
                        //性别
                        // console.log(data.substr(309,1));
                        //年龄
                        // console.log(data.substr(337,2));

                        var age=data.substr(197,3);
                        console.log(age);
                        var sex='';
                        console.log(data.substr(171,1));
                        if(data.substr(171,1)=='F'){
                           sex='漂亮女性';
                        }else{
                           sex="魅力男士";
                           age=data.substr(195,3);
                        }

                        
                        wx.showModal({
                            title: '测试结果',
                            content: "经测试，您是"+age+"岁的"+sex,
                            showCancel: false,//去掉取消按钮
                            

                    
                    })
                      }
                    })
                // wx.chooseImage({
                //   success: function(res) {
                //     var tempFilePaths = res.tempFilePaths
                    
                //   }
                // })
              
              }
            })
            setTimeout(function(){
              wx.hideLoading()
            },2000)
          }
        })
      }
})