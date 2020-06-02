// Detecting button click on website

let drumButtonClick = document.querySelectorAll(".drum");
for( let i = 0; i < drumButtonClick.length; i++){
    //drumButtonClick[i].addEventListener('click',drumClickFunction);           //listens for a click on the button only
    drumButtonClick[i].addEventListener('click', function(){
        let buttonClick = this.innerHTML;
        makeSound(buttonClick);
        buttonAnimation(buttonClick);
    });
}

/*function drumClickFunction(){
    let buttonClick = this.innerHTML;
    makeSound(buttonClick);
}
*/

// Detecting Keyboard button press

//document.addEventListener('keydown', keyButtonPress); 
//listens to whole site for a keypress

document.addEventListener('keydown', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

/*
function keyButtonPress(event){                 //event tell us what triggered the function makeSound to play, gives full info on that key
    makeSound(event.key)                        //gets the key property value from event object
}
*/

function makeSound(key){
    
    switch (key) {
        case "w":
            let audio1 = new Audio(src="sounds/crash.mp3");
            audio1.play();
            break;
        
        case "a":
            let audio2 = new Audio(src="sounds/kick-bass.mp3");
            audio2.play();
            break;
    
        case "s":
            let audio3 = new Audio(src="sounds/snare.mp3");
            audio3.play();
            break;
    
        case "d":
            let audio4 = new Audio(src="sounds/tom-1.mp3");
            audio4.play();
            break;
    
        case "j":
            let audio5 = new Audio(src="sounds/tom-2.mp3");
            audio5.play();
            break;
    
        case "k":
            let audio6 = new Audio(src="sounds/tom-3.mp3");
            audio6.play();
            break;
    
        case "l":
            let audio7 = new Audio(src="sounds/tom-4.mp3");
            audio7.play();
            break;
    
        
        default:
            break;
    }
    
    
}

function buttonAnimation(currentKey){
    let buttonToAnimate = document.querySelector("."+currentKey);

    buttonToAnimate.classList.add("pressed");

    setTimeout(function(){
        buttonToAnimate.classList.remove("pressed")
    }, 100);
}