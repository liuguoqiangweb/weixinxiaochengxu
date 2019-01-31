// pages/message/message.js
Page({
  loadMore:function(){
    if(this.data.hasMore == false) return;
    var pi = this.data.pageIndex+1;
    var ps = this.data.pageSize;
    wx.request({
      url: 'http://127.0.0.1:3002/getMessage',
      data: { pno: pi,pageSize:ps},
      success:(res)=>{
        console.log(res)
        var rows = this.data.list.concat(res.data.data);
        var pageCount = res.data.pageCount;
        var flag = pi < pageCount;
        this.setData({
          list:rows,
          pageIndex:pi,
          hasMore:flag
        });

        wx.showLoading({
          title: '数据正在加载...',
        });
        setTimeout(function(){
          wx.hideLoading()
        },200)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    pageIndex:0,    //页码
    pageSize:3,     //页大小
    list:[],        //当前页数据
    hasMore:true    //是否有下一页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})