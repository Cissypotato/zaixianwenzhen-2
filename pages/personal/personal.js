// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   user:false
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
    // wx.setStorageSync('userId', '1')
    let userId = wx.getStorageSync("userId")
    if (userId) this.setData({ userId })

  },
 toPage(e){
   let id=e.currentTarget.dataset.id
  //  console.log(id)
   if(id==1){
     wx.navigateTo({
       url: './inquiry/inquiry',
     })
   } else if (id == 2) {
     wx.navigateTo({
       url: './doctor/doctor',
     })
   } else if (id == 3) {
     wx.navigateTo({
       url: './card/card_list',
     })
   } else if (id == 4) {
     wx.navigateTo({
       url: './medicine/medicine',
     })
   } else if (id == 5) {
     wx.navigateTo({
       url: './suggest/suggest',
     })
   } else if (id == 0) {
     wx.navigateTo({
       url: './login/login',
     })
   }else if (id == 6) {
    wx.navigateTo({
      url: './myPatient/mypatient',
    })
  }
 }
  
})