function mouseEvent(){
  myObject = document.getElementById("cursor").style;
  myObject.left = document.body.scrollLeft + event.clientX + 15;
  myObject.top = document.body.scrollTop + event.clientY + 15;
}

window.document.onmousemove = mouseEvent();