
function change(){
    var num=document.getElementById("range");
    var location=document.getElementById("shownum");
    location.value=num.value;
}
function synchro(){
    var num=document.getElementById("range");
    var location=document.getElementById("shownum");
    num.value=location.value;
}
function addnum(){
    var num=document.getElementById("range");
    num.value=++num.value;
    change();
}
function subnum(){
    var num=document.getElementById("range");
    num.value=num.value-1;
    change();
}

function roleArray(){
    var location=document.getElementById("shownum");
    var figure=location.value;
    var role=[];
    for(i=0;i<Math.ceil(figure/5);i++){
        role.push("杀手");
    }
    for(j=0;j<(figure-Math.ceil(figure/5));j++){
        role.push("平民");
    }
    for(var n=0;n<(role.length-1);n++){
        var m=Math.round(Math.random()*(role.length-1));
        var temp=role[n];
        role[n]=role[m];
        role[m]=temp;
    }
    return role;
}

function orderArray(){
    var location=document.getElementById("shownum");
    var figure=parseInt(location.value);
    var order=[];
    for(k=1;k<=figure;k++){
        order.push(k);
    }
    return order;
}
function distribute(){
    var _role=roleArray();
    var _order=orderArray();
    for(l=0;l<_role.length;l++){
        document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+_order[l]+"号玩家是"+_role[l]+"<br/>";
    }
}
function judge(){
    var location=document.getElementById("shownum");
    if(location.value>=6&&location.value<=18){
        document.getElementById("write").innerHTML = "";
        distribute();
    }
    else{
        alert("请填写正确的人数,6-18之间");
    }
}
function deal(){
    if(document.getElementById("write").innerHTML==""){
        alert("请点击'点击设置'按钮进行角色分配");
    }
    else if (document.getElementById("shownum").value<6||document.getElementById("shownum").value>18){
        alert("请输入正确的人数并重新点击'点击设置'按钮");
    }
}