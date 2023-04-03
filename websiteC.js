//const imgs=document.querySelector("image")

//imgs.style.display='none';
//let imgNum=0;

//setInterval(function(){
//imgs[imgNum].style.visibility='visible';
//imgNum++;
//},3);
//let thing=document.getElementById("move");
//thing.style.height="10px";
let num=0;
let lock=0;
setInterval(function(){
    if(num>1700){
    //for(let i=0;i<10;i++){
        lock=1;
    document.getElementById("move").style.right=num+"px";
    num-=1}

   else{
    if(lock==0){
    document.getElementById("move").style.right=num+"px";
    num+=10}


   }
}
//}
,1)
