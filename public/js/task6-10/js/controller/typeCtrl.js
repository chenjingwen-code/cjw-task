app=angular.module('app');
var editContent;
app.controller('typeCtrl',function($scope,FileUploader,$state,$http,$stateParams   ){
    $scope.types=[//下拉菜单，ng-option
        {value:undefined,text:"请选择"},
        {value:0,text:"首页Banner"},
        {value:1,text:"找职业Banner"},
        {value:2,text:"找精英Banner"},
        {value:3,text:"行业大图"}
    ];
    $scope.industrys=[
        {value:undefined,text:"请选择"},
        {value:0,text:"移动互联网"},
        {value:1,text:"电子商务"},
        {value:2,text:"企业服务"},
        {value:3,text:"O2O"},
        {value:3,text:"教育"},
        {value:4,text:"金融"},
        {value:5,text:"游戏"}
    ];
    //图片上传
    var uploader=$scope.uploader=new FileUploader();
    uploader.url='/carrots-admin-ajax/a/u/img/task';
    uploader.queue=[];
    uploader.onSuccessItem = function(data,response,fileItem,$stateParams) {
        console.log(response.data);
        $scope.imageSrc=response.data.url;
      };
    //wangeditor富文本编辑器 
    var editor = new wangEditor("#wEditor");
     //获取富文本编辑器的内容
    // editor.customConfig.onchange = function (html) {
    //     // html 即变化之后的内容
    //     $scope.html =html;
    //     console.log($scope.html);
    // };
    editor.create(); 
    //取消键，后退至list页面
    $scope.retreat=function(){
        $state.go('backstage.list');
    };
    //获取富文本编辑器jquery写法
    $("#wEditor").on('mouseout',function(){
        editContent=editor.txt.html();
        console.log(editContent);
    });

    //立即上线
    $scope.param={};
    if(isNaN(parseInt($stateParams.id))==true){
        $scope.ttitle="新增Article";
        $scope.online=function(param,imageSrc){
            $scope.param.img=imageSrc;
            $scope.param.status=1;
            $scope.param.content=$scope.html;
            console.log($scope.editContent);
            console.log($scope.param);
            $http({
                method:"POST",
                url:"/carrots-admin-ajax/a/u/article",
                params:$scope.param
            }).then(function(response){
                console.log(response);
                if(response.data.code==0){                   
                    bootbox.setLocale("zh_CN");  
                    bootbox.alert({  
                        buttons: {  
                           ok: {  
                                label: '确定',  
                                className: 'btn-myStyle'  
                            }  
                        },  
                        message: '新增成功',  
                        callback: function() {  
                            $state.go('backstage.list');
                        } 
                    });  
                }  
            });  
        };
        //存为草稿
        $scope.draft=function(param,imageSrc){
            $scope.param.img=$scope.imageSrc;
            $scope.param.status=2;
            $scope.param.content=$scope.html;
            $http({//发送请求获取数据
                method:"POST",
                url:"/carrots-admin-ajax/a/u/article",
                params:$scope.param
            }).then(function(response){
                console.log(response);
                if(response.data.code==0){
                    bootbox.setLocale("zh_CN");  
                    bootbox.alert({  
                        buttons: {  
                           ok: {  
                                label: '确定',  
                                className: 'btn-myStyle'  
                            }  
                        },  
                        message: '新增成功',  
                        callback: function() {  
                            $state.go('backstage.list');
                        } 
                    });  
                }
            });
        };
    }
    else{
        $scope.ttitle="编辑Article";
        console.log($stateParams.id);
        $http({
            method:'GET',
            url:'/carrots-admin-ajax/a/article/'+$stateParams.id
        }).then(function(response){
            console.log(response);
            if(response.data.code==0){
                $scope.param=response.data.data.article;
                $scope.imageSrc=response.data.data.article.img;
                editor.txt.html($scope.param.content);
            }
        });
        $scope.online=function(param,imageSrc){
            $scope.param.img=imageSrc;
            $scope.param.status=1;
            $scope.param.content=$scope.html;
            $http({
                method:"PUT",
                url:'/carrots-admin-ajax/a/u/article/'+$stateParams.id,
                params:$scope.param
            }).then(function(response){
                console.log(response);
                if(response.data.code==0){
                    bootbox.setLocale("zh_CN");  
                    bootbox.alert({  
                        buttons: {  
                           ok: {  
                                label: '确定',  
                                className: 'btn-myStyle'  
                            }  
                        },  
                        message: '编辑成功',  
                        callback: function() {  
                            $state.go('backstage.list');
                        } 
                    });  
                }  
            });     
        };
        $scope.draft=function(param,imageSrc){
            $scope.param.img=imageSrc;
            $scope.param.status=2;
            $scope.param.content=$scope.html;
            $http({
                method:"PUT",
                url:'/carrots-admin-ajax/a/u/article/'+$stateParams.id,
                params:$scope.param
            }).then(function(response){
                console.log(response);
                if(response.data.code==0){
                    bootbox.setLocale("zh_CN");  
                    bootbox.alert({  
                        buttons: {  
                           ok: {  
                                label: '确定',  
                                className: 'btn-myStyle'  
                            }  
                        },  
                        message: '编辑成功',  
                        callback: function() {  
                            $state.go('backstage.list');
                        } 
                    });  
                }            
            });    
        };
    }
    


    
});

