window.document.onmousemove = myGetEvent; 
function myGetEvent(){  
  myObj=document.getElementById('cursor').style;
  myObj.left = document.body.scrollLeft + event.clientX + 15; 
  myObj.top = document.body.scrollTop + event.clientY + 15; 
} 