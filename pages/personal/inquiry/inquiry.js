// pages/personal/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[1],
  isArr1: true,
    isArr2: false,
    isArr3: false
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
  changeArr(e) {
    let arr = e.currentTarget.dataset.arr
    console.log(arr)
    if (arr == 1) {
      this.setData({
        isArr1: true,
        isArr2: false,
        isArr3: false,
      })
    } else if (arr == 2) {
      console.log(this.data.arr2)
      this.setData({
        isArr1: false,
        isArr2: true,
        isArr3: false,
      })
    } else if (arr == 3) {
      console.log(this.data.arr3)
      this.setData({
        isArr1: false,
        isArr2: false,
        isArr3: true,
      })
    }
   
  },
  toChat(e) {
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: './chat/chat',
    })
   }

  
})