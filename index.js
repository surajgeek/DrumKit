var number0fDrum = document.querySelectorAll(".drum").length;

for(var i=0; i<number0fDrum; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var innerHtml= this.innerHTML;

    keyValue(innerHtml);
    addEnimation(innerHtml);
  });
}

document.addEventListener("keypress",function(event){
    var pressKeyValue=event.key;
    keyValue(pressKeyValue);
    addEnimation(pressKeyValue);

});


function keyValue(value){
  switch (value) {
    case "w":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case"d":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case"j":
    var audio= new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case"l":
    var audio= new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    default:
    var audio= new Audio("sounds/snare.mp3");
    audio.play();
  }
}

function addEnimation(key){
  var currentElement = document.querySelector("."+key);
  currentElement.classList.add("pressed");
  setTimeout(function(){
    currentElement.classList.remove("pressed");
  },100);
}
