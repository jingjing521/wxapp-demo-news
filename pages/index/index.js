//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList:[
      {
        type:'1',
        "title":'印媒称印度五领域遥遥领先中国 专家:说话不过脑子',
        'img':'images/4.png',
        'author':'印媒'
      },{
        type:"2",
        "title":"男篮备战亚洲杯次战 刘晓宇赤膊肌肉抢镜",
        "img":[
          "images/1.jpeg", "images/2.jpeg", "images/3.jpeg"
        ],
        'author':'中国男篮 CBA'
      },{
        type:'3',
        "title":'众明星与自己孩子的对比照 基因真强大',
        'img':'images/4.jpeg',
        'author':'娱乐'
      },{
        type:'1',
        "title":'印媒称印度五领域遥遥领先中国 专家:说话不过脑子',
        'img':'images/4.png',
        'author':'印媒'
      },{
        type:"2",
        "title":"男篮备战亚洲杯次战 刘晓宇赤膊肌肉抢镜",
        "img":[
          "images/1.jpeg", "images/2.jpeg", "images/3.jpeg"
        ],
        'author':'中国男篮 CBA'
      },{
        type:'3',
        "title":'众明星与自己孩子的对比照 基因真强大',
        'img':'images/4.jpeg',
        'author':'娱乐'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
