// pages/user/chat.js
var util = require('./../../../../utils/util.js');
var app = getApp();

Page({
  data: {
    taskId: '',
    userId: '',
    chatList: [{status:1,content:["helloWord1",'2333jfewgh9joaih9shuishviudhgvgedgh0esapjv89rhvsifhe8wghijdopifjwuyhg7ehgisvwohtr8']},{status:2,content:["helloWord2"]},{status:1,content:["helloWord3"]}],//聊天内容
    isShowModelUp: false,//底部弹框显示true,隐藏为false 
    // isLuYin: false,//没有录音false,开始录音true
    // luYinText: '按住说话',
    // audioUrl: '',//录音文件地址
    // isShowLuYin: false,//true为开始播放，false为取消播放
    // inputValue: '',//输入框内容
    // lockReconnect: false,//默认进来是断开链接的
    // limit: 0,//重连次数
  },
  onLoad: function (options) {
     
    // this.linkSocket();
  },
  getInitData(){获取初始数据
    let doctorId=''
    let patientId=""
    wx.request({
      url: 'url',
      complete: (res) => {},
      data: {
        
      },
      success: (result) => {},
    })
  },
  //打开底部弹框
  showModelUp: function () {
    if (this.data.isShowModelUp == false) {
      this.setData({
        isShowModelUp: true,
      })
    } else {
      this.setData({
        isShowModelUp: false,
      })
    }
  },
  //关闭底部弹框
  closeModelUp: function () {
   
    this.setData({
      isShowModelUp: false,
    })
  },
  //选择照片
  chooseImage: function () {

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
      success:  (res)=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(res);
        this.pushChatList(1, {
          imgUrl: tempFilePaths,
        })
        //关闭弹窗
        this.closeModelUp();
        this.pageScrollToBottom();
      }
    })
  },
  //界面滚到最底端
  pageScrollToBottom: function () {
    wx.createSelectorQuery().select('#bottom').boundingClientRect(function (rect) {
      console.log(rect.top);
      console.log(rect.bottom);
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.bottom + 200
      })
    }).exec()
  },
  //预览图片
  previewImage: function (e) {
    console.log(e);
    var url = e.currentTarget.dataset.src;
    var that = this;
    wx.previewImage({
      current: url[0], // 当前显示图片的http链接
      urls: url // 需要预览的图片http链接列表
    })
  },
  //拍摄
  paishe: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(res);
        that.pushChatList(1, {
          imgUrl: tempFilePaths,
        })
        //关闭弹窗
        that.closeModelUp();
        that.pageScrollToBottom();
      }
    })
  },
  
 
  
  btnConfirm: function (e) {//存输入框数据  
      this.setData({
        inputValue: e.detail.value
      })  
  },
  submitInputValue(){//发送inputvalue
    if (this.data.inputValue == 'undefined' || this.data.inputValue == '') {
      return false;
    }else{
      this.pushChatList(1, {
        text: this.data.inputValue
      });
      this.setData({
        inputValue:''
      })
      //关闭弹窗
      this.closeModelUp();
      this.pageScrollToBottom();
    }
   
  },
  //页面隐藏/切入后台时触发
  onHide: function () {
    // wx.onSocketClose(function (res) {
    //   console.log('WebSocket已关闭！')
    // })
  },
  //页面卸载时触发
  onUnload: function () {
    // wx.onSocketClose(function (res) {
    //   console.log('WebSocket已关闭！')
    // })
  },
  //pushchatList
  //enu:0 是患者发送的消息
  //enu:1 是医生发送的消息
  pushChatList: function (enu, options) {
    var defaults = {
      userImage: '',
      text: '',
      isAdmin: false,
    }
    options = util.extendObj(defaults, options);
    options.time = util.formatDateTime(util.getNowFormatDate());
    console.log(options);

    // if (enu == 0) {
    //   options.userImage = '../images/admin.png';
    //   options.isAdmin = false;
    // } else if (enu == 1) {
    //   options.userImage = app.globalData.wxUserInfo.avatarUrl;
    //   options.isAdmin = true;
    // }
    // var t = that.data.chatList;
    // t.push(options)
    // that.setData({
    //   chatList: t
    // });
  }
})