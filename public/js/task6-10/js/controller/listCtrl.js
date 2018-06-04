var app = angular.module('app');
var num;
var deleM;
app.controller("listCtrl", function ($scope, $state, $http, $log, $stateParams, $filter) {
    $scope.styles = {
        0: "首页Banner",
        1: "找职业Banner",
        2: "找精英Banner",
        3: "行业大图",
    };
    $scope.states = [{
            value: undefined,
            text: "全部"
        },
        {
            value: 1,
            text: "上线"
        },
        {
            value: 2,
            text: "草稿"
        }
    ];
    $scope.addlist = function () {
        $state.go('backstage.detail', {
            id: null
        }); //跳转状态到新增
    };
    $http({ //发送请求获取数据
        method: "GET",
        url: "/carrots-admin-ajax/a/article/search",
        params: {
            page: $stateParams.page,
            type: $stateParams.type,
            status: $stateParams.status,
            startAt: $stateParams.startAt,
            endAt: $stateParams.endAt
        }
    }).then(function (response) {
        $scope.list = response.data.data.articleList;
        num = response.data.data.total;
        $scope.$watch('num', function (newValue, oldValue) { //获取信息总数，确定分页
            $scope.totalItems = num;
        });
        //new Date()必须加，否则时间显示不出来，$filter把时间戳过滤为标准时间
        $scope.dtStart = new Date($filter('date')($stateParams.startAt, 'yyyy-MM-dd'));
        $scope.dtEnd = new Date($filter('date')($stateParams.endAt, 'yyyy-MM-dd'));

        $scope.styleName = $stateParams.type;
        if ($stateParams.status == null) { //status为空的时候不做转换，否则value值变为？,没有该选项
            $scope.stateName = undefined;
        } else {
            $scope.stateName = parseInt($stateParams.status);
        }
    });

    $scope.currentPage = $stateParams.page; //获取url当前页信息 
    $scope.pageChanged = function (currentPage, dtStart, dtEnd, styleName, stateName) { //页数改变，重新发送请求获取数据
        $log.log('Page changed to: ' + $scope.currentPage);
        console.log(currentPage);
        $scope.dtStart = Date.parse(new Date(dtStart));
        $scope.dtEnd = Date.parse(new Date(dtEnd));
        if (isNaN($scope.dtStart) == true) {
            $scope.dtStart = undefined;
        }
        if (isNaN($scope.dtEnd) == true) {
            $scope.dtEnd = undefined;
        }
        else{
            $scope.dtEnd=$scope.dtEnd+86399999;
        }
        $scope.styleName = styleName; //获取类型值
        $scope.stateName = stateName; //获取状态值
        $state.go('backstage.list', { //分页跳转页面
            page: $scope.currentPage,
            type: $scope.styleName,
            status: $scope.stateName,
            startAt: $scope.dtStart,
            endAt: $scope.dtEnd
        });
    };
    $scope.maxSize = 5; //显示最大分页数，其余在...中
    $scope.bigTotalItems = 175; //最大总数
    $scope.bigCurrentPage = 1;

    //datapickerpopup时间选择器
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };

    //开始时间设置条件
    $scope.startDateOptions = {
        // dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: $scope.dtEnd, //最大时间不超过当天
        startingDay: 1
    };
    //结束时间设置条件
    $scope.endDateOptions = {
        formatYear: 'yy',
        maxDate: new Date(), //最大时间不超过当天
        minDate: $scope.dtStart, //最小时间不超过开始时间
        startingDay: 1
    };
    //结束时间没有选时，自动给结束时间赋值为当天
    if ($scope.dtEnd == undefined) {
        $scope.dtEnd = new Date();
    } else {
        $scope.startDateOptions.maxDate = $scope.dtEnd;
    }
    $scope.$watch('dtStart', function (newValue, oldValue) {
        $scope.endDateOptions.minDate = newValue; //监视开始时间的变化
    });
    $scope.$watch('dtEnd', function (newValue, oldValue) {
        $scope.startDateOptions.maxDate = newValue; //监视结束时间的变化
    });

    //搜索按钮
    $scope.search = function (dtStart, dtEnd, styleName, stateName) {
        $scope.dtStart = Date.parse(new Date(dtStart));
        $scope.dtEnd = Date.parse(new Date(dtEnd));
        if (isNaN($scope.dtStart) == true) {
            $scope.dtStart = undefined;
        }
        if (isNaN($scope.dtEnd) == true) {
            $scope.dtEnd = undefined;
        }
        else{
            $scope.dtEnd=$scope.dtEnd+86399999;
        }

        console.log("dtStart:" + dtStart);
        console.log("dtEnd:" + dtEnd);
        console.log("152:" + $scope.dtStart);
        console.log("153:" + $scope.dtEnd);
        // $scope.dtStart=Date.parse(new Date(dtStart));
        // $scope.dtEnd=Date.parse(new Date(dtEnd));
        $scope.styleName = styleName; //获取类型值
        $scope.stateName = stateName; //获取状态值
        $state.go("backstage.list", { //发起搜索请求
            page: 1,
            type: $scope.styleName,
            status: $scope.stateName,
            startAt: $scope.dtStart,
            endAt: $scope.dtEnd
        });
    };
    //清空按钮
    $scope.empty = function () {
        $state.go('backstage.list', { //发起清空请求，清空url上参数
            type: null,
            status: null,
            startAt: undefined,
            endAt: undefined,
            page: null
        });
        $scope.styleName = ''; //给类性值，状态值，开始和结束时间赋空值
        $scope.stateName = undefined;
        $scope.dtStart = undefined;
        $scope.dtEnd = undefined;
    };
    //上下线切换
    $scope.statusToggle = function (status, id) {
        console.log(id);
        console.log(status);
        if (status === 1) {
            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/status',
                params: {
                    id: id,
                    status: 2
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.code == 0) {
                    $state.reload("backstage.list");
                }
            });
        } else {
            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/status',
                params: {
                    id: id,
                    status: 1
                }
            }).then(function (response) {
                console.log(response);
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
                    $http({
                        method: 'DELETE',
                        url: '/carrots-admin-ajax/a/u/article/status' + $scope.list[index].id
                    }).then(function (response) {
                        console.log(response);
                        $state.reload('backstage.list');
                    });
                }
            },
            // title: "bootbox confirm也可以添加标题哦",  
        });

    };

});


