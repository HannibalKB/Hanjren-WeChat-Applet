
Page({
  data:{
    tempFilePaths: ''
  },
  onLoad:function(options){
    
  },
  onReady:function(){
    
  },
  onShow:function(){
    
  },
  onHide:function(){
    
  },
  onUnload:function(){
    
  },
  
  modalTap: function(e) {  
    this.setData({  
      modalHidden: false  
    })  
  },
  chooseimage: function () {  
    var _this = this;  
    wx.chooseImage({  
  success: function(res) {  
    var tempFilePaths = res.tempFilePaths  
    wx.uploadFile({  
      url: 'https://sc.hanjren.com/index.php/admin/upload/getImg', 
      filePath: tempFilePaths[0],  
      name: 'file',  
      formData:{  
        'user': 'test'  
      },  
      success: function(res){  
        var data = res.data  
        
        console.log(data);  
      }  
    })  
  }  
})    
  },
 formSubmit: function(e) {  
    var that = this;  
    var formData = e.detail.value;   
    wx.request({  
      url: 'https://sc.hanjren.com/index.php/admin/upload/getWord',  
      data: formData,  
      header: {  
          'Content-Type': 'application/json'  
      },  
      success: function(res) {  
        console.log(res.data)  
        that.modalTap();  
      }  
    })  
  }
})

// var app = getApp();
// Page({
//  data:{
//    evaContent  : ''
//  },
//  onLoad:function(){
//  },
//  onReady:function(){
//   // 页面渲染完成
//  },
//  onShow:function(){
//   // 页面显示
//  },
//  onHide:function(){
//   // 页面隐藏
//  },
//  onUnload:function(){
//   // 页面关闭
//  },
//  //事件
//  textBlur: function(e){
//    if(e.detail&&e.detail.value.length>0){
//     if(e.detail.value.length<12||e.detail.value.length>500){
//      //app.func.showToast('内容为12-500个字符','loading',1200);
//     }else{
//      this.setData({
//        evaContent : e.detail.value
//      });
//     }
//    }else{
//     this.setData({
//       evaContent : ''
//     });
//     evaData.evaContent = '';
//     app.func.showToast('请输入投诉内容','loading',1200);
//    }
//  },
//  //提交事件
//  evaSubmit:function(eee){  
//   var that = this;
//   //提交(自定义的get方法)
//   wx.request({  
//        url: 'https://sc.hanjren.com/index.php/admin/upload/getWord',  
//        data: formData,  
//        header: {  
//           'Content-Type': 'application/json'  
//        },  
//        success: function(res) {  
//          console.log(res.data)  
//         that.modalTap();  
//        }  
//      })  
//  }
// })