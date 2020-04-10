//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
    // wx.setStorageSync('userId',1)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow(){
    this.getInitData()
  },
  getInitData(){
    wx.request({
      url: 'https://jkxw.guaishe.com/sxq/api.php?fa=homepage',
     
      success: (result) => {
        let initData=result.data.token
        console.log(result)
        this.setData({initData})
      },
    })
  },
  tosearch(){
    wx.navigateTo({
      url: './search/search',
    })
  },
  toAllSort(){
    wx.navigateTo({
      url: './allSort/allSort',
    })
  },
  toTips(){
    wx.navigateTo({
      url: './tips/tips',
    })
  },
  toDoctorList(e){
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: './doctorList/doctorList',
    })
  },
  toDoctorDetail(e){//进入医生详情页
    let id =e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: './doctorDetail/doctorDetail',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
