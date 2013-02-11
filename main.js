var main = function(){ //MEMORIZE THIS!
  
  $(".content").append("<p>Hello from jQuery</p>");//always start a jquery with  $ and inside the paranthesis choose selector
  $(".content").append("<p id='watchthis' style='display:none'>Watch This!</p>")
  
  $("#watchthis").fadeIn(5000); 
}
$(document).ready(main);//abstracts main