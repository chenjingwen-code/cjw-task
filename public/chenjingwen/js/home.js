function init() {
    $("#myCarousel").carousel('cycle');
}
setTimeout(init,400);//可以成功初始化

sessionStorage.clear();//清除存储数据
function goPAGE(){
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        sessionStorage.setItem("equipment", "1");
        console.log("移动端")
    }
    else {
        sessionStorage.setItem("equipment", "2");
        console.log("pc端")
    }
}//判断设备类型
goPAGE();
$("#toGame1").click(function(){
    sessionStorage.setItem("gameNum", "game1");
    location.href = "game.html";
});
$("#toGame2").click(function(){
    sessionStorage.setItem("gameNum", "game2");
    location.href = "game.html";
});
$("#toGame3").click(function(){
    sessionStorage.setItem("gameNum", "game3");
    location.href = "game.html";
});


// // 百度地图API功能
// var map = new BMap.Map("allmap");//创建实例
// var point = new BMap.Point(113.670881,34.779231);
// var marker = new BMap.Marker(new BMap.Point(113.670881,34.779231)); // 创建点
// map.centerAndZoom(point, 20);//设置视图中心点,第二个参数为地图缩放
// map.addOverlay(marker);//添加点
// map.enableScrollWheelZoom();//添加缩放功能