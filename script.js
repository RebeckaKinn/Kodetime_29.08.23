//MODEL

let app = document.getElementById("app");

let operators = ["+", "-", "/", "*"];
let number1;
let number2;

let userInput; 
let rightAnswer;
let points = 0;
let op;
let mathProblem; 

let coolMessage;

//VIEW

updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
    <div id="container">
        <div id="mathProblem">${mathProblem || ""}</div>
        <button onclick="generateProblem()">GET MATH</button>
        <input autofocus onchange="handleInput(this.value)" type="text" value="">
        <div id="result">${coolMessage || ""}</div>
        <div>${points}</div>
    </div>
  `;
}

//CONTROLLER

function handleInput(input){
    userInput = input;
    getAnswer();
}

function generateProblem(){
    number1 = Math.floor(Math.random() * 20 + 1);
    number2 = Math.floor(Math.random() * 20 + 1);
    op = operators[Math.floor(Math.random() * operators.length)];
    mathProblem = number1 + " " + op + " " + number2;

    // randomNum = Math.floor(Math.random() * 3)
    // if(randomNum == 0){
    // operator = "+"
    // }
    // if(randomNum == 1){
    // operator = "-"
    // }
    updateView();
}

function getAnswer(){
    if(op === "+"){
        rightAnswer = number1 + number2;
    } else if(op === "-"){
        rightAnswer = number1 - number2;
    } else if(op === "/"){
        rightAnswer = number1 / number2;
    }else if(op === "*"){
        rightAnswer = number1 * number2;
    }
    if(userInput == rightAnswer){
        coolMessage = "Good math yes";
        points++;
    }else{
        coolMessage = "BAD AT MATH";
        points--;
    }
    generateProblem();
    updateView();
}


/*Oppgave:  Lag et program som lager et mattestykke 
når man trykker på en knapp, og vurderer input fra 
brukeren om det er riktig eller feil - oppdater en 
poengsum +1 poeng for riktig resultat og -1 poeng for feil resultat */