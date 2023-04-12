var arr=document.querySelectorAll(".click1");
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
        document.querySelector(".click1 img").classList.toggle("pressed");
    })
}
var arr=document.querySelectorAll(".click2");
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
        document.querySelector(".click2 img").classList.toggle("pressed");
    })
}