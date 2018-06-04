var app=angular.module('app');
    app.controller('pageCtrl',function ($scope,$state,$http) {
        a=sessionStorage.a;
        console.log(a);
        if(a!=1){
            $state.go("login");
        }
        $scope.loginDown=function(){
            console.log("退出键生效");
            $http({
                method:'POST',
                url:'/carrots-admin-ajax/a/logout'
            }).then(function(response){
                console.log(response);
                if(response.data.code==0){
                    sessionStorage.clear();
                    $state.go('login');
                }
            });
        };
        $scope.aaa=[{
            name:'信息管理',
            children:['公司信息','职位信息']
        },{
            name:'Article管理',
            children:['Artice列表','文章管理','内容管理']
        },{
            name:'用户管理',
            children:['用户管理']
        }
    ];
        $scope.go=function(pIndex){
          $scope.cIndex=pIndex;
        };
        $scope.songo=function(x){
          $scope.sonIndex=x;

          switch(x){
                case "公司信息":
                $state.go("");
                break; 
                case "职位信息":
                $state.go("");
                break;
                case "Artice列表":
                $state.go("backstage.list",{
                    page:null,
                    type:null,
                    status:null,
                    startAt:undefined,
                    endAt:undefined                   
                }
            );
                break;
                case "文章管理":
                $state.go("");
                break;
                case "内容管理":
                $state.go("");
                break;
                case "用户管理":
                $state.go("");
                break;           
          }
        };
    });