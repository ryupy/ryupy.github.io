window.document.onmousemove = myGetEvent; // �}�E�X�𓮂������B
function myGetEvent( evt ){ 
  myEvent = ( evt ) ? evt : window.event; // FireFox �΍� 
  myObj=document.getElementById("cursor").style;
  myObj.left = document.body.scrollLeft + myEvent.clientX + 15; // X�\���ʒu 
  myObj.top = document.body.scrollTop + myEvent.clientY + 15; // Y�\���ʒu 
} 