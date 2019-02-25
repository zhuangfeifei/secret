//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 展示本地存储能力
    var keys = wx.getStorageSync('keys') || ''
    this.setData({
      value: keys
    })
  },
  bindinputs(e){
    // console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  determine(){
    var keys = this.data.value
    wx.setStorageSync('keys', keys)
    wx.navigateTo({
      url: '../secret/secret?key='+ this.data.value,
    })
  }
})
