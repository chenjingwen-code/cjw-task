var app=angular.module('app')
// .factory('commonUtil',function($state){
//     return {
//         //搜索
//         search:function(param){
//             $state.go('backstage.list',param);
//         },
//         //清除
//         clean:function(){
//             angular.forEach(param,function(obj,index,array){
//                 array[index]=undefined;
//             });
//             $state.go('backstage.list',param);
//         },
//         //翻页
//         pageTurn:function(param){
//             $state.go('backstage.list',param);
//         },
//         //取消，返回列表页
//         back:function(){
//             $state.go('backstage.list');
//         }
//     };
// });
.factory('timeConver',function(){
    return {
        startTime:function(date){
            date= Date.parse(new Date(date));//转换标准时间为时间戳
            if(isNaN(date)==true){//判断不是时间戳的时候赋值undefined
                date=undefined;
            }
            return date;
        },
        endTime:function(date){
            date=Date.parse(new Date(date));
            if(isNaN(date)==true){
                date=undefined;
            }
            else{
                date=date+86399999;
            }
            return date;
        }
    };
});