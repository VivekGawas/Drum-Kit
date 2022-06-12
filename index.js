//to assign event-listener to all buttons
for(var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

}

//to handle mouse clicks
function handleClick(){
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
}

//to handle keyboard keys
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

//to make respective sounds
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log("buttonClicked");
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}