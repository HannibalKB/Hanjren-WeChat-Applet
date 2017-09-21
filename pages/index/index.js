//获取应用实例
var app = getApp()
import {rootUrl} from '../../utils/params'
Page({
    data: { 
      imgUrls: [  
            {  
                link:`/pages/spdetail/spdetail?tj=7000&title=修复双眼皮&desc=双眼皮修复就是通过手术或非手术改善因为天生或是后天双眼皮手术导致的双眼皮重睑线不明显、部分及完全消失，双眼皮过宽或过窄、弧度中断、双侧不对称、双眼皮过厚，瘢痕增生、眼睑上抬困难、眼睑闭合不良等种种双眼皮所存在的问题。改善修复这些问题，使得双眼皮外观自然。&&pic=http://sc.hanjren.com/image/syp.jpg`,  
                url:`https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496477585475&di=fb2421a1952f7a41f8b6561c1a0207bb&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F130216%2F240508-13021609402985.jpg` 
            },{  
                link:'/pages/spdetail/spdetail?tj=680&title=提眉切眉&&desc=韩佳人【切眉术】是将眉毛及周围的皮肤部分切除，重塑新的眉形，可同时改善眼上部皮肤松弛。术前在原不良文眉的部位先设计一个新眉形，依据顾客认可的眉形，设计好的曲线为手术刀路，术后在设计好的眉形上，根据自己喜欢的颜色实施绣眉，因此外观上没有手术痕迹而获得较理想的眉形。&&pic=http://sc.hanjren.com/image/tmqm.jpg',  
                url:`https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1496467356&di=330936e7d082c99c5b3e19cb75b4d441&src=http://img.taopic.com/uploads/allimg/140816/235031-140Q60Q51557.jpg`  
            } ,
            
        ],
        ys:[{
            url:'http://sc.hanjren.com/images/ys1.jpg',
            // link:"",
        },{
            url:'http://sc.hanjren.com/images/ys2.jpg',
            // link:"",
        },{
            url:'http://sc.hanjren.com/images/ys3.jpg',
            // link:"",
        }],
        iconArray: [
           
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-qiandao.png',
                "iconText": '韩佳人品牌',
                "link":'../pinpai/pinpai'
            },
           
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-fuli.png',
                "iconText": '医生团队',
                "link":'../ys/ys'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-zhanhui.png',
                "iconText": '真人案例',
                "link":'../al/al'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-fujin.png',
                "iconText": '来院路线',
                "link":'../lx/lx'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-muma.png',
                "iconText": '眼部整形',
                "link":'../yb/yb'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-xingxing.png',
                "iconText": '鼻部整形',
                "link":'../bb/bb'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-tiyu.png',
                "iconText": '胸部整形',
                "link":'../xb/xb'
            },
            {
                "iconUrl": 'http://sc.hanjren.com/image/icon-qinzi.png',
                "iconText": '注射美容',
                "link":'../zs/zs'
            }
        ],
     
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        // loadingHidden: false,  // loading
        userInfo:'',
        userDate:'',

        tj:158,           //今日特价
        zd1:8800,            //主打第一项价格
        zd2:2680,            //主打第2项价格
        zd3:5280,
        zd4:2680,
        zd5:800,
        zd6:289,
        zd7:280,
        zd8:3180,
        zd9:188,
        zd10:880,
        zd11:58,
        jrtj:"韩佳人自然无痕双眼皮",
        name1:"修复双眼皮",
        name2:"溶脂瘦身",
        name3:"提眉切眉",
        name4:"外切祛眼袋",
        name5:"水动力吸脂瘦身",
        name6:"无针水光",
        name7:"黑脸娃娃",
        name8:"埋线隆鼻",
        name9:"红蓝光祛痘",
        name10:"伊婉玻尿酸",
        name11:"小气泡美肤",

        desc1:"很多人以为只要有双眼皮就是美眼了，于是每天不厌其烦地重复贴双眼皮贴、画眼线、涂双眼皮胶水，当然也有实在觉得麻烦就随便找家整形机构割双眼皮的，以为这样就可以做女神了，真是大错特错。殊不知，并不是所有的双眼皮都是美眼。美眼除了双眼皮，还要看眼形、大小、眼神等综合因素。",
        desc2:"韩佳人溶脂瘦身 溶脂减肥法是近两年来风行的最新医学美容技术。它源自法国，是现今风行欧美的美容科技。它是将多种高科技的治疗手段科学的结合，将营养素、氨基酸、维他命、酶类和作用于微循环生物制剂等药物直接瞄准肥胖部位，注射到皮下脂肪层，发生最大效率的、最温和的生理性溶脂反应。结合减肥部位，选择性的作用于皮下的脂肪组织和微循环系统，痛苦小、安全，可以达到整体减肥、局部塑身的目的。",
        desc3:"韩佳人【切眉术】是将眉毛及周围的皮肤部分切除，重塑新的眉形，可同时改善眼上部皮肤松弛。术前在原不良文眉的部位先设计一个新眉形，依据顾客认可的眉形，设计好的曲线为手术刀路，术后在设计好的眉形上，根据自己喜欢的颜色实施绣眉，因此外观上没有手术痕迹而获得较理想的眉形。",
        desc4:"外切祛眼袋手术指的是通过手术的方法祛除眼袋，从而获得动感迷人的双眼，一般用于祛眼袋的治疗方法有开刀外切法、开刀内切法、不开刀仪器物理疗法、抽脂法、激光法等。",
        desc5:"韩佳人水动力吸脂塑身系统是基于精确螺旋式水刀，通过加压水流精确作用于目标组织，有选择性的分离脂肪细胞，运用水动力吸脂技术，不会对血管和神经造成损伤，具有治疗快速、效果明显、风险大幅度降低的明显优势。采取水动力分解脂肪和回收同步进行方式，使减肥塑身更快捷。",
        desc6:"无针水光，以喷射的方式来治疗，精华成分瞬间直达真皮层，带给您轻松舒适的SPA体验，避免针剂注射带来的疼痛和水肿，真正达到0创伤。",
        desc7:"黑脸娃娃是一种美白嫩肤的方法。由于在治疗时，要在面部涂有一些黑色碳粉，脸会黑黑的，因此，称之为“黑脸娃娃”，黑脸娃娃治疗时，面部涂有黑色碳粉后，碳粉可以吸附皮肤下的污垢以及角质，从而达到美白肌肤。",
        desc8:"埋线隆鼻可以分区雕塑，针对鼻尖、鼻梁、鼻长、鼻翼等各个部位的缺陷，设计方案，在不同部位分别注入MISKO线，经医生塑形后，就能达到理想的效果。",
        desc9:"红蓝光祛痘是根据蓝光作用于皮肤表层,杀灭痤疮丙酸杆菌而起到抗菌消炎的作用，且其还可有效抑制皮脂腺油脂的分泌，防止青春痘的复发;而红光则可穿过皮肤表层组织，作用于瘢痕组织，促使细胞分泌产生胶原蛋白而起到祛除痘印，修复痘疤的作用。",
        desc10:"YVOIRE®伊婉™品牌来自韩国LG生命科学，品牌命名源自法国，Yvoire是以遍布鲜花著称的小镇，它象征着美丽。而精心设计的YVOIRE®伊婉™ Logo 是一枚绚丽的钻石戒指，它象征着承诺，而YVOIRE®伊婉™品牌的宗旨是给予消费者美丽承诺。",
        desc11:"去角质与提供水分同时进行:超微小气泡对角质和毛囊异物的精准剥离作用，可高效而准确祛除堆积和老化角质细胞，彻底清洁毛囊漏斗部（毛囊孔）而健康角质及毛囊漏斗部几乎不受任何影响，在清洁的同时带来大量水分，提供持续的皮肤保湿功效。",

        pic1:"http://sc.hanjren.com/image/syp.jpg",
        pic2:"http://sc.hanjren.com/image/yls.jpg",
        pic3:"http://sc.hanjren.com/image/tmqm.jpg",
        pic4:"http://sc.hanjren.com/image/wqqyd.jpg",
        pic5:"http://sc.hanjren.com/image/sdlxz.jpg",
        pic6:"http://sc.hanjren.com/image/wzsg.jpg",
        pic7:"http://sc.hanjren.com/image/hlww.jpg",
        pic8:"http://sc.hanjren.com/image/xdlb.jpg",
        pic9:"http://sc.hanjren.com/image/qd.jpg",
        pic10:"http://sc.hanjren.com/image/bns.jpg",
        pic11:"http://sc.hanjren.com/image/cwxqp.jpg",

    },
    onShareAppMessage:function() {
        return {
        title: '韩佳人医疗美容',
        desc: '一个专注美容整形的医院',
        path: '/pages/index/index'
        }
    },
    onLoad(){
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo((userInfo)=>{
            // 更新数据
            this.setData({
                userInfo: userInfo
            })
        })
       

    }
})
