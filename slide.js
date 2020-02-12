$("#toggler").on("click", function() {
  $("#side_pannel").toggleClass("hype-alt", "hype");
  $("#this_hides_things").toggleClass("hider-alt", "hider");
});

$("#wide").on("click", function() {
  $("#side_pannel").toggleClass("hype-wide", "hype-alt");
  $("#b").toggleClass("big-alt", "big");
});

$("#biggie").on("click", function() {
  $("#side_pannel").toggleClass("hype-big", "hype-alt");
});
