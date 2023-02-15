// pages/sell/sell.js
Page({
 data: { },
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {},
  goback()
  {
    wx.switchTab({
      url: '/pages/buy/buy',
    })
  }
   
})