// pages/index/search/search.js
let app=getApp()
let appUrl=app.globalData.appUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
list:[1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getInitData()
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  getInitData(){
    wx.request({
      url: appUrl+'?fa=search',
      success: (result) => {
        console.log(result)
      },
    })
  },
  getSearchVal(e){
   console.log(e)
   let value=e.detail.value
   this.setData({
     searchVal:value
   })
  },

  search(){
    wx.request({
      url: appUrl+'?fa=search',  
      data: {
        search:this.data.value
      }, 
      success: (result) => {
        if(result.data.state==5){
          app.alert(result.data.msg)
        }
        console.log(result)
      },
    })
  }
})