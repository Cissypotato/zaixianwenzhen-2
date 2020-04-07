// pages/index/doctorList/doctorList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array0: [{ name: "全部科室", id: 0 }, { name: "骨科", id: 1 },{ name: "儿科", id: 2 }],
    array1: [{ name: "推荐排序", id: 0 }, { name: "问诊量排序", id: 1 }, { name: "评分排序", id: 2 }],
    index0:0,
    index1:0,
    list:[1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  tosearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toDoctorDetail(e) {//进入医生详情页
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '../doctorDetail/doctorDetail',
    })
  },
  bindPickerChange0: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index0: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  

  
})