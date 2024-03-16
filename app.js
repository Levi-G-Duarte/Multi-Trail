const cl = console.log

let globalClass;
let secGlobalClass;
let colorClass =[];
let arrayCounter = 0;
let animationClass;

// let butterDog = "https://static.wikia.nocookie.net/nicos-nextbots-fanmade/images/e/e0/Butter_dog.png/revision/latest?cb=20230624213412"

const arrayCount = document.getElementById('array-count');


// This is the event Listener
document.addEventListener("DOMContentLoaded", () => {
    let mouseMovement = 0
  
  document.addEventListener("mousemove", (e) => {

    mouseMovement++;
    const diceDot = document.createElement("i");
    // diceDot = butterDog;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let diceX = mouseX - 8;
    let diceY = mouseY - 8;
    diceDot.classList.add("font-cursor");
    diceDot.classList.add(`${globalClass}`);
    diceDot.classList.add(`${secGlobalClass}`);
    // diceDot.classList.add(animationClass);
    diceDot.style.animation = animationClass
    

    diceDot.style.left = diceX + "px";
    diceDot.style.top = diceY + "px";
   
    if(mouseMovement == 5) {
    document.body.appendChild(diceDot);
      mouseMovement = 0;
      setTimeout(() => {document.body.removeChild(diceDot) } , 400);
      if(colorClass != undefined){
        if(arrayCounter == colorClass.length - 1){
          arrayCounter = 0;
        } else{
          arrayCounter++;
        }
        diceDot.style.color = colorClass[arrayCounter];
        
      }
    }


    
  });
});
const fireColors = ["rgb(222, 26, 26)", "rgb(255, 149, 5)", "rgb(250, 163, 7)", "rgb(255, 186, 8)", "rgb(244, 140, 6)"];
const rainColors = ["rgb(3, 4, 94)", "rgb(2, 62, 138)", "rgb(0, 119, 182)", "rgb(0, 150, 199)", "rgb(0, 180, 216)", "rgb(72, 202, 228)", "rgb(144, 224, 239)", "rgb(173, 232, 244)", "rgb(202, 240, 248)"];
const rainbowColors = ["rgb(255, 0, 0)", "rgb(255, 135, 0)", "rgb(255, 211, 0)", "rgb(222, 255, 10)", "rgb(161, 255, 10)","rgb(10, 255, 153)","rgb(10, 239, 255)", "rgb(20, 125, 245)", "rgb(88, 10, 255)", "rgb(190, 10, 255)"];
const neonColors = ["rgb(247, 37, 133)", "rgb(181, 23, 158)", "rgb(114, 9, 183)", "rgb(86, 11, 173)", "rgb(72, 12, 168)", "rgb(58, 12, 163)", "rgb(63, 55, 201)", "rgb(67, 97, 238)", "rgb(72, 149, 239)", "rgb(76, 201, 240)"];
const toxicColors = ["rgb(0, 75, 35)", "rgb(0, 100, 0)", "rgb(0, 114, 0)", "rgb(0, 128, 0)", "rgb(56, 176, 0)", "rgb(112, 224, 0)", "rgb(158, 240, 26)", "rgb(204, 255, 51)"];
const imperialColors = ["rgb(43, 45, 66)", "rgb(141, 153, 174)", "rgb(237, 242, 244)", "rgb(239, 35, 60)", "rgb(217, 4, 41)", "rgb(237, 41, 57)" ];


function addDiceClass(diceClass){
  switch (diceClass) {
    case "dice":
      globalClass = "fa-dice-d6";
      secGlobalClass = "fa-solid";
      break;
    case "code":
      globalClass =  "fa-code";
      secGlobalClass = "fa-solid";
      break;
    case "atom":
      globalClass = "fa-atom";
      secGlobalClass = "fa-solid";
      break;
    case "empire":
      globalClass = "fa-galactic-republic";
      secGlobalClass = "fa-brands";
      break;
    case "fan":
      globalClass =  "fa-fan";
      secGlobalClass = "fa-solid";
      break;
    case "radiation":
      globalClass =  "fa-radiation";
      secGlobalClass = "fa-solid";
      break;
    case "null":
      globalClass = "null";
      break;
  }
  cl(globalClass);

}

function colorChange(colorRoll){
  switch(colorRoll){
    case "fire":
      colorClass = fireColors;
      break;
    case "rain":
      colorClass = rainColors;
      break;
    case "rainbow":
      colorClass = rainbowColors;
      break;
    case "neon":
      colorClass = neonColors;
      break;
    case "toxic":
      colorClass = toxicColors;
      break;
    case "imperial":
      colorClass = imperialColors;
      break;
    case "null":
      colorClass = "null";
      break;
  }
  arrayCounter = 0;
  cl(colorClass);

}

function animationChange(animateRoll){
  switch(animateRoll){
    case "spin":
      animationClass = "diceSpin 1s ease infinite";
      break;
    case "fall":
      animationClass = "diceFall 1s ease infinite";
      break;
    case "shrink":
      animationClass = "diceShrink 1s ease infinite";
      break;
    case "dissolve":
      animationClass = "diceDissolve 1s ease infinite";
      break;
    case "grow":
      animationClass = 'diceGrow 1s ease infinite';
      break;
    case "null":
      animationClass = "null";
      break;
  }
  cl(animationClass)
}

// function resetAnimation(){
//   animationClass = null
// }





