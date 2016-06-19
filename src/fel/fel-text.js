
$(function() {
    setTimeout(felifyText, 5000);
});

function felifyText(){ 
  console.log("felify text!");

  $("span, li, a, p, h1, h2, h3, code, input").each(function(index) {
    var obj       = $(this);
    var text      = obj.text();
    if (text != undefined && text != "") {
      
      if (Math.floor((Math.random() * 10) + 1) < 2) {
        $(this).css('color', "rgb(151, 189, 13)")
          .delay(index * 50)
          .fadeOut(1500);
      }
    }
  });  

  setTimeout(felifyText, 5000);
}