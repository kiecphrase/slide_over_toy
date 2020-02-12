$("#toggler").on("click", function() {
  $("#side_pannel").toggleClass("hype-alt", "hype");
});

$("#wide").on("click", function() {
  $("#side_pannel").toggleClass("hype-wide", "hype-alt");
  $("#b").toggleClass("big-alt", "big");
});

$("#biggie").on("click", function() {
  $("#side_pannel").toggleClass("hype-big", "hype-alt");
});
