console.log("hiiiiiiiiiiiii");
var body = document.getElementsByTagName('body');
body.onclick = function(){
   console.log("clicked");
};

console.log("script injected successfullyy");

var divs = document.querySelectorAll('div');
for(i=0;i<divs.length;i++){
   divs[i].addEventListener("click", function() {
      console.log("clicked on div");
   });
}

var mainContent = document.getElementsByClassName("ms-Button-label test-name");
mainContent.onclick = function(){
   console.log("clicked on list ");
   console.log(this);
};