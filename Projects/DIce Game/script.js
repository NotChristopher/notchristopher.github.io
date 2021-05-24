'use strict';


const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScoreDisplay0 = document.getElementById('current--0');
const currentScoreDisplay1 = document.getElementById('current--1');
const player1 = document.querySelector(`.player--0`);
const player2 = document.querySelector(`.player--1`);


score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
var currentScore = 0;
var overall1=0
var overall2=0
player1.classList.add('player--active');


btnRoll.addEventListener('click', function(){
    
 

    //Generating a random roll
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    currentScore = currentScore + dice;
    console.log(`Current Score ${currentScore}`)

   
    //Check for 1: true, switch to next player and reset score
    if(dice === 1 && player1.classList.contains('player--active')){
        currentScore = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        currentScoreDisplay0.textContent = currentScore;
    }
    else if(dice === 1 && player2.classList.contains('player--active')){ 
        currentScore = 0;
        currentScoreDisplay1.textContent = currentScore;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }

    //update current Score
    if(player1.classList.contains('player--active' )){
        currentScoreDisplay0.textContent = currentScore;
        
    }
    else if (player2.classList.contains('player--active')){
        currentScoreDisplay1.textContent = currentScore;
       
    }
    });

//hold button function

btnHold.addEventListener('click', function(){

 if(player1.classList.contains('player--active')){
    
    overall1= overall1 + currentScore;
    score0.textContent = overall1;
    if(overall1 >= 100){
        player1.classList.add('.player--winner')
        score0.textContent = `winner`;
        score1.textContent = 'loser';
    }else{
     score0.textContent = overall1;
     player1.classList.remove('player--active');
     player2.classList.add('player--active');
     currentScore=0;
     currentScoreDisplay0.textContent = currentScore;
    }
 }else if(player2.classList.contains('player--active')){

    overall2= overall2 + currentScore;
    score1.textContent = overall2;
    if(overall2 >= 100){
        player2.classList.add('.player--winner')
        score1.textContent = `winner`;
        score0.textContent = 'loser';
    }else{
    score1.textContent = overall2;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore=0;
     currentScoreDisplay1.textContent = currentScore;
    }
} 




});

// New Game

btnNew.addEventListener('click', function(){
    if(player1.classList.contains('player--active')){
        currentScore=0;
        currentScoreDisplay1.textContent = 0;
        currentScoreDisplay0.textContent = 0;
        overall2 =0;
        overall1=0;
        score0.textContent=0;
        score1.textContent=0;
        diceEl.classList.add('hidden');
    }
    else{
        currentScore=0;
        currentScoreDisplay1.textContent = 0;
        currentScoreDisplay0.textContent = 0;
        overall2 =0;
        overall1=0;
        score0.textContent=0;
        score1.textContent=0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        diceEl.classList.add('hidden');
        
    }
    }
);
