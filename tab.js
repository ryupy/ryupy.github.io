var tabs = document.getElementById('tab_control').getElementsByTagName('a');
var pages = document.getElementById('tab_body').getElementsByTagName('div');

function changeTab() {
   var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

   for(var i=0; i<pages.length; i++) {
      if( pages[i].id != targetid ) {
         pages[i].style.display = "none";
      }
      else {
         pages[i].style.display = "block";
      }
   }

   for(var i=0; i<tabs.length; i++) {
      tabs[i].style.zIndex = "0";
   }
   this.style.zIndex = "10";

   return false;
}

for(var i=0; i<tabs.length; i++) {
   tabs[i].onclick = changeTab;
}

tabs[0].onclick();