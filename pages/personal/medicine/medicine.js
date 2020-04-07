// pages/personal/medicine/medicine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function () {
    let userId = wx.getStorageSync("userId")
    if (userId) this.setData({ userId })
  },

  
})