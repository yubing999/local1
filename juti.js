// pages/juti/juti.js
Page({
  data: {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {},
  goback()
  {wx.navigateTo({
      url: '/pages/siliao/siliao',
    })},
  gotobuy()
  { wx.switchTab({
      url: '/pages/buy/buy',
    })
  }})