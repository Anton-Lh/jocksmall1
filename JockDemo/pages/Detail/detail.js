Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    res: [0, 1, 2, 3, 4],
    imgUrl:[
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png',
      '../../images/4.png',
      '../../images/5.png',
      '../../images/6.png'
    ]
  },
  lower() {
    var result = this.data.res;
    var resArr = [];
    // 小于当前
    for (let i = 0; i < 6; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    // 大于14循环第二页
    if (cont.length >= 6) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '加载完毕',
        icon: 'success',
        duration: 1000,
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  // 点击获取详情页参数
  gotableinfo: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(111)
    wx.showLoading({
      title: '详情页正在更新',
      icon: 'loading',
      duration: 500
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

  }
})