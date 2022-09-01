// SELECTORS
var nuumberOfButtons = document.querySelectorAll(".drum").length;

// EVENTS
for (i = 0; i < nuumberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonHtml = this.innerText; //for button click identification
    playSound(buttonHtml);
    btnAnimation(buttonHtml);
  });
}
document.addEventListener("keydown", function (event) {
  var keyPressed = event.key; //for keypress identification
  playSound(keyPressed);
  btnAnimation(keyPressed);
});

// METHODS
function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonHtml);
      break;
  }
}

function btnAnimation(key) {
  var currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");
  setTimeout(function () {
    currentKey.classList.remove("pressed");
  }, 100);
}
