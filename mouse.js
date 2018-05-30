window.document.onmousemove = myGetEvent; 
function myGetEvent(){  
  myObj=document.getElementById('cursor').style;
  myObj.left = document.body.scrollLeft + e.clientX + 15; 
  myObj.top = document.body.scrollTop + e.clientY + 15; 
} 