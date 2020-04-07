// pages/index/doctorDetail/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_path: [],
    now_up: 0,
    image_url: [],
    countPic:6
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {

  },

  onMyEvent: function (e) {//多图上传组件事件
    console.log(e.detail)// 自定义组件触发事件时提供的detail对象
    this.setData({
      img_path: e.detail.img_path
    })
  },
  upWorkData() {
    let up_data = this.data.up_data
    if (up_data["intro"] == "" || up_data["intro"] == undefined) {
      app.alert("请填写工作描述")
    } else {
      wx.request({
        url: appUrl + "/index.php/index/App/activityApp",
        data: {
          //   user_id:wx.getStorageSync("token"),
          id: this.data.activity_id,
          info: up_data.intro,
          img: this.data.image_url
        },
        success: (res) => {
          console.log(res)
          let info = res.data.info
          wx.navigateBack({
            delta: 1,
            success: () => {
              app.alert(info)
            }
          })
        },
      })
    }

  },
  img_up() { //图片上传
    if (this.data.img_path.length == 0) {
      app.alert('请上传图片')
    } else {
      wx.uploadFile({
        url: appUrl + "/index.php/index/App/upload_img",
        filePath: this.data.img_path[this.data.now_up],
        name: 'img',
        success: (res) => {
          console.log(res.data)
          let info = JSON.parse(res.data);
          let image_url = this.data.image_url
          console.log(info)
          if (info.state) {
            image_url.push(info.img);
            console.log()
            this.setData({
              image_url
            });
          }
        },
        complete: (res) => {
          let t = Number(this.data.now_up) + 1;
          if (t === this.data.img_path.length) {
            this.upWorkData()
          } else {
            this.setData({
              now_up: t
            });
            this.img_up();
          };
        }
      });
    }

  },
})