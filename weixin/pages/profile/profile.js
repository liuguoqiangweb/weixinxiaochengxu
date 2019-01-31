// pages/profile/profile.js
Page({
  onMusicPlay:function(){
    var isp = this.data.isPlaying;
    if(isp){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlaying:false
      });
      setTimeout(function(){
        wx.stopBackgroundAudio()
      },5000)
    }else{
      wx.playBackgroundAudio({
        dataUrl: 'http://127.0.0.1:3002/bg.mp3',
        title:'播放背景音乐'
      });
      this.setData({
        isPlaying:true
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})