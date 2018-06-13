var app = angular.module('app');
var num;
var deleM;
app.controller("listCtrl", function ($scope, $state, $http, $log, $stateParams, $filter,styles,states,articleOper,timeConver) {
    $scope.styles = styles;
    $scope.states = states;
    $scope.param={};
    $scope.addlist = function () {
        $state.go('backstage.detail', {
            id: null
        }); //跳转状态到新增
    };
    articleOper.getList($stateParams)//获取列表
    .then(function (response) {
        $scope.param.endAt = new Date($filter('date')($stateParams.endAt-86399999, 'yyyy-MM-dd'));
        $scope.list = response.data.data.articleList;
        num = response.data.data.total;
        $scope.$watch('num', function (newValue, oldValue) { //获取信息总数，确定分页
            $scope.totalItems = num;
        });
        //new Date()必须加，否则时间显示不出来，$filter把时间戳过滤为标准时间
        $scope.param.startAt = new Date($filter('date')($stateParams.startAt, 'yyyy-MM-dd'));
        $scope.param.type = $stateParams.type;
        if ($stateParams.status == null) { //status为空的时候不做转换，否则value值变为？,没有该选项
            $scope.param.status = undefined;
        } else {
            $scope.param.status = parseInt($stateParams.status);
        }
    });

    $scope.currentPage = $stateParams.page; //获取url当前页信息 
    //分页请求
    $scope.pageChanged = function (currentPage, param) { //页数改变，重新发送请求获取数据
        $log.log('Page changed to: ' + $scope.currentPage);
        $scope.param.startAt=timeConver.startTime(param.startAt);
        $scope.param.endAt=timeConver.endTime(param.endAt);
        $scope.param.page=$scope.currentPage;
        $state.go('backstage.list',$scope.param);
    };
    $scope.maxSize = 5; //显示最大分页数，其余在...中
    $scope.bigTotalItems = 175; //最大总数
    $scope.bigCurrentPage = 1;

    //datapickerpopup时间选择器
    $scope.openStart = function () {
        $scope.popupStart.opened = true;
    };
    $scope.openEnd = function () {
        $scope.popupEnd.opened = true;
    };
    $scope.popupStart = {
        opened: false
    };
    $scope.popupEnd = {
        opened: false
    };

    //开始时间设置条件
    $scope.startDateOptions = {
        formatYear: 'yy',
        maxDate:new Date()
    };
    //结束时间设置条件
    $scope.endDateOptions = {
        formatYear: 'yy',
        maxDate: new Date(), //最大时间不超过当天
        minDate: $scope.param.startAt, //最小时间不超过开始时间
        startingDay: 1
    };
    $scope.$watch('param.startAt', function (newValue, oldValue) {
        $scope.endDateOptions.minDate = newValue;
        //监视开始时间的变化
    });
    //监视结束时间的变化
    $scope.endDate=function(param){
        if(param.endAt==undefined){
            $scope.startDateOptions.maxDate=new Date();
        }
        else{
            $scope.startDateOptions.maxDate=param.endAt;
        }
    };
    //搜索按钮
    $scope.search = function (param) {
        $scope.param.startAt=timeConver.startTime(param.startAt);
        $scope.param.endAt=timeConver.startTime(param.endAt);
        
        $scope.param.page=1;
        if($scope.param.endAt==undefined){
            $state.go("backstage.list",$scope.param);
        }
        else{
            $scope.param.endAt=$scope.param.endAt+86399999;
            $state.go("backstage.list",$scope.param);
        }       
    };
    //清空按钮
    $scope.empty = function () {
        angular.forEach($scope.param,function(obj,index,array){
            array[index]=undefined;
        }); 
        $scope.param.page=1;
        $state.go('backstage.list', $scope.param);  
    };
    //上下线切换
    $scope.statusToggle = function (status, id) {
        if (status === 1) {
            articleOper.toggleList(id,2)//上下线切换请求
            .then(function (response) {
                if (response.data.code == 0) {
                    $state.reload("backstage.list");
                }
            });
        } else {
            articleOper.toggleList(id,1)//上下线切换请求
            .then(function (response) {
                if (response.data.code == 0) {
                    $state.reload("backstage.list");
                }
            });
        }
    };
    //编辑
    $scope.edit = function (id) {
        $scope.id = id;
        $state.go('backstage.detail', {
            id: $scope.id
        });
    };
    //删除
    $scope.delete = function (index, list) {
        bootbox.confirm({
            buttons: {
                confirm: {
                    label: '确认',
                    className: 'btn-myStyle'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-default'
                }
            },
            message: '是否确定删除',
            callback: function (result) {
                if (result) {
                    articleOper.deleList($scope.list[index].id)//删除请求
                    .then(function (response) {
                        if(response.data.code==0){
                            $state.reload('backstage.list');
                        }                       
                    });
                }
            },
            // title: "bootbox confirm也可以添加标题哦",  
        });
    };
});


