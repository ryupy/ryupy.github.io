window.document.onmousemove = myGetEvent; 
function myGetEvent(){ 
  myObj=document.getElementById("cursor").style;
  myObj.left = document.body.scrollLeft + myEvent.clientX + 15; 
  myObj.top = document.body.scrollTop + myEvent.clientY + 15; 
} 