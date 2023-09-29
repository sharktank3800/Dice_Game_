var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var randomDice1 = dice1.setAttribute("src", "assets/images/dice"+randomNumber1+".png");
var randomDice2 = dice2.setAttribute("src", "assets/images/dice"+randomNumber2+".png");

var div = document.querySelector("#div")
var title = document.querySelector("h1");

function titleRan(){
    
    if(randomNumber1 === randomNumber2){
       title.innerHTML = "Draw!!";
    }
     if (randomNumber1 > randomNumber2){
       title.innerHTML = "player 1 Wins";
    }
    if (randomNumber1 < randomNumber2){
        title.innerHTML = "player 2 Wins";
    }
};


titleRan();

