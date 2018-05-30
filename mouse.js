window.document.onmousemove = myGetEvent; // マウスを動かした。
function myGetEvent( evt ){ 
  myEvent = ( evt ) ? evt : window.event; // FireFox 対策 
  myObj=document.getElementById("cursor").style;
  myObj.left = document.body.scrollLeft + myEvent.clientX + 15; // X表示位置 
  myObj.top = document.body.scrollTop + myEvent.clientY + 15; // Y表示位置 
} 