
Page({

  /**
   * 页面的初始数据
   */

  data: {
    eduArray:[
      {
        id: 0,
        name: '初中以下'
      },
      {
        id: 1,
        name: '高中'
      },
      {
        id: 2,
        name: '专科'
      } ,
      {
        id: 3,
        name: '本科'
      },
      {
        id: 4,
        name: '硕士'
      },
      {
        id: 5,
        name: '博士'
      } 
    ],
    eduIndex:0,
    sexArray:['男','女'],
    sexIndex:0,
    ageArray:["18岁以下","18-24岁","25-30岁","30岁以上"],
    ageIndex:0,
    baseArray:["无","有编程基础"],
    baseIndex:0,
    majorArray:["无专业","计算机相关","理工科","文科"],
    majorIndex:0,
    logicArray:["渣渣","普通","卓越"],
    logicIndex:0,
    eduScore: [{
      1: -1000,
      2: 10,
      3: -50,
      4: -50,
      5: -100,
      6: -50,
      7: 30,
      8: 50,
      9: 50, 10: -1000, 11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 20,
      3: 0,
      4: 0,
      5: -50,
      6: 10,
      7: 30,
      8: 50,
      9: 50,
      10: -1000,
      11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 30,
      3: 30,
      4: 30,
      5: 30,
      6: 30,
      7: 30,
      8: 30,
      9: 50,
      10: -1000,
      11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 30,
      3: 40,
      4: 40,
      5: 40,
      6: 40,
      7: 40,
      8: 40,
      9: 30, 10: -1000, 11: -1000,
      12: 40
    },
    {
      1: -1000,
      2: 30,
      3: 50,
      4: 40,
      5: 50,
      6: 30,
      7: 50,
      8: 30,
      9: -30,
      10: -1000,
      11: -1000,
      12: 50
    },
    {
      1: -1000,
      2: 30,
      3: 50,
      4: 40,
      5: 50,
      6: 30,
      7: 50,
      8: 30,
      9: -30,
      10: -1000,
      11: -1000,
      12: 50
    }],
    sexScore: [{
      1: -1000,
      2: 50,
      3: 50,
      4: 50,
      5: 50,
      6: 50,
      7: 50,
      8: 30,
      9: 30, 10: -1000, 11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 50,
      3: 30,
      4: 30,
      5: 10,
      6: -30,
      7: 50,
      8: 50,
      9: 50,
      10: -1000,
      11: -1000,
      12: 50
    }],
    ageScore: [{
      1: -1000,
      2: 5,
      3: 0,
      4: 0,
      5: -50,
      6: 15,
      7: 20,
      8: 30,
      9: 50,
      10: -1000,
      11: -1000,
      12: 20
    },
    {
      1: -1000,
      2: 20,
      3: 20,
      4: 20,
      5: 20,
      6: 20,
      7: 20,
      8: 20,
      9: 20,
      10: -1000,
      11: -1000,
      12: 20
    },
    {
      1: -1000,
      2: 20,
      3: 20,
      4: 20,
      5: 20,
      6: 20,
      7: 20,
      8: 20,
      9: 20, 10: -1000, 11: -1000,
      12: 20
    },
    {
      1: -1000,
      2: -30,
      3: -30,
      4: -30,
      5: -30,
      6: -30,
      7: 50,
      8: 0,
      9: 0,
      10: -1000,
      11: -1000,
      12: 50
    }],
    baseScore: [{
      1: -1000,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: -1000,
      11: -1000,
      12: 0
    },
    {
      1: -1000,
      2: 10,
      3: 10,
      4: 10,
      5: 10,
      6: 50,
      7: 0,
      8: 0,
      9: 10,
      10: -1000,
      11: -1000,
      12: 0,
    }],
    majorScore: [{
      1: -1000,
      2: 30,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 30,
      8: 50,
      9: 50,
      10: -1000,
      11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 35,
      3: 35,
      4: 35,
      5: 50,
      6: 40,
      7: 40,
      8: 40,
      9: 30,
      10: -1000,
      11: -1000,
      12: 40
    },
    {
      1: -1000,
      2: 30,
      3: 35,
      4: 35,
      5: 40,
      6: 30,
      7: 30,
      8: 30,
      9: 30,
      12: 30,
      10: -1000,
      11: -1000
    },
    {
      1: -1000,
      2: 10,
      3: 10,
      4: 10,
      5: 10,
      6: 10,
      7: 50,
      8: 50,
      9: 30,
      10: -1000,
      11: -1000,
      12: 50
    }],
    logicScore: [{
      1: -1000,
      2: 40,
      3: 10,
      4: 10,
      5: 10,
      6: 10,
      7: 20,
      8: 50,
      9: 50,
      10: -1000,
      11: -1000,
      12: 20
    },
    {
      1: -1000,
      2: 30,
      3: 30,
      4: 30,
      5: 30,
      6: 30,
      7: 30,
      8: 30,
      9: 30,
      10: -1000,
      11: -1000,
      12: 30
    },
    {
      1: -1000,
      2: 40,
      3: 40,
      4: 40,
      5: 50,
      6: 40,
      7: 30,
      8: 0,
      9: 0,
      10: -1000,
      11: -1000,
      12: 30
    }]
  },  
  eduChange(a){
    this.setData({
      eduIndex:a.detail.value
    })
  },
  sexChange(b){
    this.setData({
      sexIndex:b.detail.value
    })
  },
  ageChange(c){
    this.setData({
      ageIndex:c.detail.value
    })
  },
  baseChange(d){
    this.setData({
      baseIndex:d.detail.value
    })  
  },
  majorChange(e){
    this.setData({
      majorIndex:e.detail.value
    })
  },
  logicChange(f){
    this.setData({
      logicIndex:f.detail.value
    })
  },   
  clickMe:function(){
    // console.log(this.data)
    // console.log(this.data.eduScore)
    //结构化赋值
    let [eduScore,sexScore,ageScore]=[this.data.eduScore,this.data.sexScore,this.data.ageScore]
    let [baseScore,majorScore,logicScore]=[this.data.baseScore,this.data.majorScore,this.data.majorScore]
    let [eduIndex,sexIndex,ageIndex]=[this.data.eduIndex,this.data.sexIndex,this.data.ageIndex]
    let [baseIndex,majorIndex,logicIndex]=[this.data.baseIndex,this.data.majorIndex,this.data.logicIndex]
    var score = {1:-1000,2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,10:-1000,11:-1000, 12: 1};
    for(var i=1;i<13;i++){  
      score[i]+=eduScore[eduIndex][i]+sexScore[sexIndex][i]+ageScore[ageIndex][i]+baseScore[baseIndex][i]+majorScore[majorIndex][i]+logicScore[logicIndex][i]
    }
    // console.log('374:'+score)
    //排序
    // var dic={x:2,z:1,y:3};//输出   {z:1，x:2，y:3}
    var newkey = Object.values(score).sort(function(a,b){return b-a})
    // console.log(Object.values(score))　
    // console.log(newkey)
    // console.log(score)
    var newScore=[]
    for(var j=0;j<3;j++){
      for(var k=1;k<13;k++){
        if(score[k]==newkey[j]){
          delete score[k]
          // console.log(score)
          newScore[j]=k
          break
        }
      }
      // newScore[newkey[j]]=score[newkey[j]]
    }
    // console.log('384:'+score)
    // console.log('385:'+newScore)
    // wx.navigateTo({
    //   url: '../../pages/result/result'
    // })
    wx.navigateTo({ url: '../result/result?list=' + JSON.stringify(newScore)});
  }
})
