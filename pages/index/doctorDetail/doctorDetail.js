// pages/index/doctorDetail/doctorDetail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    follow:false,
    patientList:[1],
    coverShow:false,
    aniStyle:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
    this.getInitData()
  },
  onShow(){
   
  },
  getInitData(){
    console.log(2)
    wx.request({
      url: 'https://jkxw.guaishe.com/sxq/api.php?fa=personal&id=2',
      success: (result) => {
        console.log(3)
        this.setData({
          initData:result.data.token
        })
        console.log(result.data.token)
      },
    })
  },
  onShow: function () {
    let userId = wx.getStorageSync("userId")
    if (userId) this.setData({ userId })
  },
  handleFollow(){
    let follow=!this.data.follow
    let userId=this.data.userId
    if(!userId){
      wx.showModal({
        title: '提示',
        content: '您还没有登陆，请登陆后关注',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/personal/login/login'
            })
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }else if(follow==true && userId){
      app.alert('关注成功')
      this.setData({ follow })
    } else{
      wx.showModal({
        title: '提示',
        content: '您确定取消关注吗',
        success:(res)=> {
          if (res.confirm) {
            this.setData({ follow })
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }
    
  },
  inquiry(e){
    let userId = this.data.userId
    let id=e.currentTarget.dataset.id
    if (!userId) {
      wx.showModal({
        title: '提示',
        content: '您还没有登陆，请登陆后继续',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/personal/login/login'
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }else{
     this.setData({
       coverShow:true,
       aniStyle: true
     })
    }

  },
  toOrder(e){
    let userId = this.data.userId
    wx.navigateTo({
      url: './order/order',
    })
  },
  toAddCard(){
    wx.navigateTo({
      url: '/pages/personal/card/addCard/addCard',
    })
  },
  closeCover(){
    this.setData({      
      aniStyle: false
    })
    setTimeout( ()=> {  
      this.setData({
        coverShow: false
      })
    }, 500)
  },
  incover(){
    console.log("阻止冒泡")
  }
})