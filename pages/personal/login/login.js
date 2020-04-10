const app = getApp();
Page({
  data: {
    code: ''
  },
  onLoad: function (options) {

    // wx.getUserInfo({
    //   success: (res)=> {

    //       console.log(res);
    //       // let userInfo = res.userInfo;

    //       this.setData({
    //           iv:res.iv,
    //           encryptedData:res.encryptedData

    //       })
    //   }
    // })

    wx.login({
      success: (res)=> {
        console.log(res.code)
        this.setData({
          code: res.code
        })
      },
    })
  },
  bindGetUserInfo(e) {
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
    wx.request({
      url: 'https://jkxw.guaishe.com/sxq/api.php?fa=login',
      data: {
        code: this.data.code,
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData
      },
      success:  (res)=> {
        console.log(res)
        if(res.data.state==0){
          wx.setStorageSync("userId", res.data.token)
          wx.setStorageSync("identity", res.data.Identifier)
          app.alert(res.data.msg)
          setTimeout(() => {
            wx.navigateBack({
              delta: 1,
            })
          }, 500);
          
        }
       
      },
    })
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  }
})

// https://jkxw.guaishe.com/index.php/index/user/create_user