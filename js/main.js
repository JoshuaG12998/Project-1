// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
  var lines = [
    "Discuss.",
    "Speak out loud.",
    "Go ahead.",
    "Feel free.",
    "Tell us what you think."
  ];
  
  var text = lines[getRandomInt(0, lines.length)];
  $('#bigline').text(text);
});

$('#textarea').click(function(){
  $('.markdown').addClass('fade');
});



var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: 'gfm',
        lineNumbers: true,
        theme: "default"
 });
    






$(document).ready(function() {
  $('#button').bind("click", function(e) {
    clickTilt(e.offsetX, e.offsetY);
  });
});

function clickTilt(x, y) {
  var width = $('#button').width();
  var height = $('#button').height();
  x = x - (width/2);
  y = -1 * (y - height/2);
  var xTiltPercent = 2 * (x/width);
  var yTiltPercent = 2 * (y/height);
  var rotateY = xTiltPercent * 10 + "deg";
  var rotateX = yTiltPercent * 20 + "deg";

  $('#button').transition({
    perspective:'3500px',
    rotateX:rotateX,
    rotateY:rotateY,
    scale:0.975,
    easing:'snap',
    duration:300
  }).transition({
    rotateX:'0deg',
    rotateY:'0deg',
    scale:1
  });
}




