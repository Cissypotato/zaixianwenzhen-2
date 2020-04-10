// pages/index/allSort/allSort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

 
  onShow: function () {
    this.getInitData()
  },
  getInitData(){
    wx.request({
      url: 'https://jkxw.guaishe.com/sxq/api.php?fa=detail&departid=4',
      success: (result) => {
        this.setData({initData:result.data.token.alldepart})
        console.log(result)
      },
    })
  },

  toDoctorList(e) {
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '../doctorList/doctorList',
    })
  },
})