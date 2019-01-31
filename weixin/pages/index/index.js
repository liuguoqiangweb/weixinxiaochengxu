//index.js
Page({
  handleJump:function(e){
    var id = e.target.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 1, img_url:'http://localhost:3002/img/banner1.png'},
      { id: 2, img_url:'http://localhost:3002/img/banner2.png'},
      { id: 3, img_url:'http://localhost:3002/img/banner3.png'},
      { id: 4, img_url:'http://localhost:3002/img/banner4.png'}],
    navlist:[
      { id: 1, title: '美食', img_url: 'http://localhost:3002/img/grid-01.png'},
      { id: 2, title: '结婚啦', img_url: 'http://localhost:3002/img/grid-02.png' },
      { id: 3, title: '卡拉OK', img_url: 'http://localhost:3002/img/grid-03.png' },
      { id: 4, title: '美食1', img_url: 'http://localhost:3002/img/grid-04.png' },
      { id: 5, title: '美食1', img_url: 'http://localhost:3002/img/grid-05.png' },
      { id: 6, title: '美食1', img_url: 'http://localhost:3002/img/grid-06.png' },
      { id: 7, title: '美食1', img_url: 'http://localhost:3002/img/grid-07.png' },
      { id: 8, title: '美食1', img_url: 'http://localhost:3002/img/grid-08.png' },
      { id: 9, title: '更多', img_url: 'http://localhost:3002/img/grid-09.png' },
      ]
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