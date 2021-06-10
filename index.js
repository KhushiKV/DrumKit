//listening button clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var btnletter = this.innerHTML;
    respond(btnletter);
    flash(btnletter);

  });
}

//responding to keyboard
document.addEventListener("keydown", function(event) {
  respond(event.key);
  flash(event.key);
});

function respond(to_check) {
  switch (to_check) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log("inappropriate trigger");
  }
}

function flash(e) {
  var activebtn = document.querySelector("." + e);
  activebtn.classList.add("pressed");
  setTimeout(function() {
    activebtn.classList.remove("pressed")
  }, 100);
}
