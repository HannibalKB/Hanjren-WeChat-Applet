Page({
  	data: {
  		carArray: [
  			{
  				carImage: '../../image/defaultpic.gif',
  				carTitle: '韩佳人水光嫩肤',
  				carPrice: '¥192.00',
  				carNum: 1,
  				carShow: true,
				sum:'¥192.00'
  			},
  			
  		]
  	},
  	carAdd: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum + 1;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		obj[key] = con;
  		this.setData(obj);
  	},
  	carReduce: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		if(con <= 1){
  			obj[key] = 1;
  			that.setData(obj);
  		}
  		else {
  			con--;
  			obj[key] = con;
  			that.setData(obj);
  		}
  	},
  	carRemove: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var key = 'carArray['+index+'].carShow';
  		var obj = {};
  		obj[key] = false;
  		this.setData(obj);
  	},
    toPay: function(){
        wx.navigateTo({
          url: '../pay/pay'
        })
    },
	sumAdd: function(){
		var that = this;
  		var index = event.target.dataset.alphaBeta;
		  var con = that.data.carArray[index].carNum*that.data.carArray[index].carPrice;
		  var sum = 'carArray['+index+'].con';
  		var obj = {};
  		obj[sum] = con;
  		this.setData(obj);
	}
})


