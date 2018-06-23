Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    returnData:{},
    currentTab:0,
    salaryListOne:[],
    salaryListTwo:[],
    salaryListThree:[],
    currentTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取url中参数
    that.data.list=JSON.parse(options.list)
    // console.log(that.data.list)
    var newList=[]
    //参数数组所有值减1对应数组下标
    for(var i=0;i<that.data.list.length;i++){
      newList[i]=that.data.list[i]-1
    }
    that.setData({
      newList:newList
    })
    // console.log(newList)   
    //发送get请求，获取职业信息
    wx.request({
      url: 'http://www.jnshu.com//a/occupation/list',
      success:function(res){
        // console.log(res.data)  
        // console.log(res.data.data.occupations)
        // console.log(res.data.data.occupations[newList[0]].name)
        that.setData({
          returnData:res.data.data.occupations        
        })
        var returnData=that.data.returnData
        // returnData=res.data.data.occupations
        // console.log(returnData[newList[0]].name)
        //第一个职业薪资信息
        that.setData({
          salaryListOne:JSON.parse(res.data.data.occupations[newList[0]].salary)
        })
        //第二个职业薪资信息
        var salaryListOne = that.data.salaryListOne
        that.setData({
          salaryListTwo: JSON.parse(res.data.data.occupations[newList[1]].salary)
        })
        //第三个职业薪资信息
        var salaryListTwo = that.data.salaryListTwo
        that.setData({
          salaryListThree: JSON.parse(res.data.data.occupations[newList[2]].salary)
        })
        var salaryListThree = that.data.salaryListThree
      }
    })
  },
  //点击事件，获取当前点击事件id，隐藏其他信息
  clickTap:function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})