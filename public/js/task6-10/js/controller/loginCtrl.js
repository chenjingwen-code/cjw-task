var app=angular.module("app");
var a=0;
app.filter("to_trusted",['$sce',function($sce){//过滤器
    return function(text){
        return $sce.trustAsHtml(text);
    };
}]);
app.controller("loginCtrl",function($scope,$http,$state){
    $scope.login=function(){
        $http({
            method:"POST",
            url:"/carrots-admin-ajax/a/login",
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            data:{name:$scope.name,pwd:$scope.password},
            transformRequest:function(obj){//参数序列化
                var str=[];
                for(var p in obj){
                    str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));                    
                }
                return str.join("&");
            }
        }).then(function(response){
            var code;
            console.log(response);
            sessionStorage.code=response.data.code;
            if(response.data.code==0){
                a=1;
                sessionStorage.a=a;
                console.log(sessionStorage.a);
                $state.go("backstage");
                console.log("登录成功");                 
            }
            else{
                $scope.errormessage=response.data.message;
            }
        });
    };
});

