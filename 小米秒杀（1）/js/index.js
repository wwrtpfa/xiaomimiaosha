var tabs = document.getElementById("tables").getElementsByTagName("li"); // 获取ul里面li的数组、
var infm = document.getElementById("infm").getElementsByTagName("ul"); //获取body-information中ul数组

console.log(tabs);//调试
console.log(infm);//调试

for( var i=0;i<tabs.length;i++){
    tabs[i].onclick = show;
}
function show() {
    for(var i=0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            infm[i].className = "active";
        }else{
            tabs[i].className = "";
            infm[i].className = "";
        }
    }
}