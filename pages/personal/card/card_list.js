// pages/personal/card/card_list.js
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
  bindCard(){
    wx.navigateTo({
      url: './addCard/addCard'
    })
  },
  toCardDetail(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: './cardDetail/cardDetail'
    })
  }
  
})