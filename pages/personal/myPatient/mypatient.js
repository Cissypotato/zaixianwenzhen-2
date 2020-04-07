// pages/personal/myPatient/mypatient.js
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

    },
    toChat(e){
        let id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../inquiry/chat/chat',
        })
    }

   
    
})