//adding event lister
//document.querySelector("button").addEventListener("click",)


//detecting button press
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0; i< numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //which button triggered the event using this
        //this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });
}

//keyboard press events
// addEventListener("keypress", function(){
//     alert("Key was Pressed");
// });

//detecting keyboard press
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch(key){
        case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(buttonInnerHTML); 

    }
    
}


function buttonAnimation(currentKey){
    //select class w
    // document.querySelector(".w");

   var activeButton =  document.querySelector("." + currentKey);
   //add presesd class inside activeButton
   activeButton.classList.add("pressed");
   //timeout funcitons in javascript
   //setTimeout
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);

}




