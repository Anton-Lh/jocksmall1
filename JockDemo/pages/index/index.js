var app =getApp()
 Page({
 
   /**
    * 页面的初始数据
    */
   data: {
     array: ['沃尔玛', '自营专柜'],
     index: 0,
     imgUrls: [
       '../../images/1.jpg',
       '../../images/2.jpg'
     ]
   },
   bindPickerChange: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value)
     this.setData({
       index: e.detail.value
     })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
     
   },

   getPhoneNumber: function (e) {
     console.log(e.detail.errMsg)
     console.log(e.detail.iv)
     console.log(e.detail.encryptedData)

     if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
       wx.showModal({
         title: '提示',
         showCancel: false,
         content: '未授权',
         success: function (res) { }
       })
     } else {
       wx.login({
         success: res => {
           console.log(app.globalData.urlpage);
           wx.request({
             url: app.globalData.url+'/home/GetPhone',
             data: {
               'encryptedData': e.detail.encryptedData,
               'iv': e.detail.iv,
               'code': res.code
             },
  
             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
             header: {
               'content-type': 'application/json'
             }, // 设置请求的 header
             success: function (res) {
               console.log(res);
               if (res.data.Data != null) {
                 wx.navigateTo({
                   url: '../Camera/camera?store=' + res.data.Data.StoreName + '&num=' + res.data.Data.StoreNum
                 })
               }else{
                 wx.showToast({ 
                   title: '您还未授权',
                   icon: 'loading',
                   duration: 3000,
                 });
               }
             },
             fail: function (err) {
               console.log(err);
           
             },
             
           })
         }
       })
     }
   },
   onReady: function (e) {
     
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