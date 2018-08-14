var flashGame = {
    game1: {
        srcFlash: "flash/game1.swf",
        srcVideo: "flash/game1.mp4",
        title: "反弹小球",
        author: "张笑千",
        start: "游戏加载完毕后点击播放按钮-选中游戏难度即可开始游戏",
        explain: "游戏中，我们需要通过小乌龟来接住小球，使皮球不要碰到地面，锻炼你的敏捷操作能力，现在就让我们一起来试试吧！",
        operation: "鼠标左右滑动操作"
    },
    game2: {
        srcFlash: "flash/game2.swf",
        srcVideo: "flash/game2.mp4",
        title: "小猫找朋友",
        author: "刘博源",
        start: "游戏加载完毕后点击播放按钮-选中游戏难度即可开始游戏",
        explain: "游戏中，我们需要通过小猫的情景对话，回答乌龟的问题，找到小猫的好朋友，锻炼你的计算能力，现在就让我们一起来试试吧！",
        operation: "答对情景对话里面的算术题"
    },
    game3: {
        srcFlash: "flash/game3.swf",
        srcVideo: "flash/game3.mp4",
        title: "魔法师的表演 ",
        author: "王浩宇",
        start: "游戏加载完毕后点击播放按钮-选中游戏难度即可开始游戏",
        explain: "游戏中，我们需要根据提示，点击相应的魔法，控制魔法师的魔法棒，让舞台上的乌龟变变变，现在就让我们一起试试吧！",
        operation: "点击对应按钮即可开始变魔术"
    }
};
var gameNum = sessionStorage.getItem("gameNum");
var gameContent = flashGame[gameNum];
var equipmentNum = sessionStorage.getItem("equipment");
if(equipmentNum == '1'){
    var videoDom = " <source  " +
        "src=" + gameContent.srcVideo +
        " type=\"video/mp4\" />";
    $("#gameVideo").append(videoDom);
    $("#showPhoneVideo").css("display","block");
}else {
    var flashDom = "<embed id=\"gameFlash\" class=\"flash\" " +
        "src=" + gameContent.srcFlash +
         " style=\"LEFT: 0px;  TOP:0px\"  quality=\"high\" wmode=\"transparent\" type=\"application/x-shockwave-flash\" width=\"100%\" height=\"400\">";
    $("#showPcFlash").append(flashDom);
    $("#showPcFlash").css("display","block");
    $("#showPc").css("display","block");
    $("#gameStart").text(gameContent.start);
    $("#gameOperation").text(gameContent.operation);
}
$("#gameTitle").text(gameContent.title);
$("#gameAuthor").text(gameContent.author);
$("#gameExplain").text(gameContent.explain);








