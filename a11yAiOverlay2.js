console.log("hiiiiiiiiiiiii");
var body = document.getElementsByTagName('body');
body.onclick = function(){
   console.log("clicked");
};

console.log("script injected successfullyy");
document.querySelector(".overview-heading").click(function(){
   console.log("clicked on the heading");
});