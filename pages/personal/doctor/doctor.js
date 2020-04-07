// pages/personal/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let userId = wx.getStorageSync("userId")
    if (userId) this.setData({ userId })
  },

  unfollow(e){
    let id=e.currentTarget.dataset.id
    console.log(id)
    wx.showModal({
      title: '提示',
      content: '您确定取消关注吗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  toDoctorDetail(e) {//进入医生详情页
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/index/doctorDetail/doctorDetail',
    })
  },
})