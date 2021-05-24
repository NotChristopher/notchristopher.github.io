let myQuestions =[
    {
     question: "What team did Michael Jordan play for?",
     answers:[
         {option: "La Lakers", answer:false},
         {option: "Chicago Bulls", answer:true},
         {option: "Miami Heat", answer:false}
     ]
    },
    {
        question: "What player has the most NBA Championship rings?",
        answers:[
            {option: "Bill Russel", answer:true},
            {option: "Kobe Bryant", answer:false},
            {option: "Larry Bird", answer:false}
        ]
       },
       {
        question: "How many NBA Championships has the Boston Celtics won?",
        answers:[
            {option: "9", answer:false},
            {option: "17", answer:true},
            {option: "13", answer:false}
        ]
       },
       {
        question: "Which player has the most NBA MVP of the season awards?",
        answers:[
            {option: "Micheal Jordan", answer:false},
            {option: "LeBron James", answer:false},
            {option: "Kareem Abdul-Jabbar", answer:true}
        ]
       },
       {
        question: "Who is the player in the official NBA logo?",
        answers:[
            {option: "LeBron James", answer:false},
            {option: "Jerry West", answer:true},
            {option: "Magic Johnson", answer:false}
        ]
       },
       {
        question: "What year was the NBA established?",
        answers:[
            {option: "1950", answer:false},
            {option: "1955", answer:false},
            {option: "1946", answer:true}
        ]
       },
       {
        question: "Who set the record of scoring a 100 points in a single game?",
        answers:[
            {option: "Steph Curry", answer:false},
            {option: "Micheal Jordan", answer:false},
            {option: "Wilt Chamberlain", answer:true}
        ]
       },
       {
        question: "What team drafted Kobe?",
        answers:[
            {option: "Charlotte Hornets", answer:true},
            {option: "LA Lakers", answer:false},
            {option: "Cleveland Cavaliers ", answer:false}
        ]
       },
       {
        question: "How many NBA championships have the New York Knicks won?",
        answers:[
            {option: "3", answer:false},
            {option: "0", answer:true},
            {option: "1", answer:false}
        ]
       },
       {
        question: "Who is the all time leading scorer in the NBA",
        answers:[
            {option: "Kobe Bryant", answer:false},
            {option: "Kareem Abdul-Jabbar", answer:true},
            {option: "LeBron James", answer:false}
        ]
       },
];


    ;
    const score = document.getElementById("score");
    const questionContainer = document.getElementById("question");
    const restart = document.getElementById('retry');
    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    document.getElementById('retry').style.visibility = "hidden";
   
    

    answer1.addEventListener('click',function(){
        let myAnswer = myQuestions[currentQuestion].answers[0].answer;
        console.log(myAnswer);
        if (myAnswer === true){
            scoreUpdate();
        } else
        next();

        
     
    });

    answer2.addEventListener('click',function(){
        let myAnswer = myQuestions[currentQuestion].answers[1].answer;
        console.log(myAnswer);
        if (myAnswer === true){
            scoreUpdate();
        }else
        next();
        
    });

    answer3.addEventListener('click',function(){
        let myAnswer = myQuestions[currentQuestion].answers[2].answer;
        console.log(myAnswer);
        if (myAnswer === true){
            scoreUpdate();
        }else
        next();
        
    });

    restart.addEventListener('click', function(){
        location.reload();
    });

console.log(myQuestions.length);
let currentScore =0 ;
let currentQuestion =0;
var scoreStart = 0;




function buildQuiz(){
    
    questionContainer.textContent= myQuestions[currentQuestion].question;
    
    answer1.textContent = myQuestions[currentQuestion].answers[0].option;
    answer2.textContent = myQuestions[currentQuestion].answers[1].option;
    answer3.textContent = myQuestions[currentQuestion].answers[2].option;
    
    
    

};

buildQuiz();




function scoreUpdate(){


    if (currentQuestion < myQuestions.length){
        currentScore = currentScore + 10;
    score.textContent = currentScore;
    console.log('help');
    next();
    }else
        done();
   
  
 
};

function next(){

    currentQuestion++;

    if (currentQuestion < myQuestions.length){
        
       
        questionContainer.textContent= myQuestions[currentQuestion].question;
        answer1.textContent = myQuestions[currentQuestion].answers[0].option;
        answer2.textContent = myQuestions[currentQuestion].answers[1].option;
        answer3.textContent = myQuestions[currentQuestion].answers[2].option;
    }else
        done();
    
    

    
    
    
};


function done(){

    document.querySelector('.multi-choice').style.display="none";
    questionContainer.textContent = "Well done!";
    document.getElementById('retry').style.visibility = "visible";

    
    console.log("we stopped");
    
};
