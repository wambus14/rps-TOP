

function getComputerChoice() {
let rock = Math.random()
let paper = Math.random()
let scissors = Math.random()
if (rock > paper && rock > scissors){return "rock"}
else if (paper > rock && paper > scissors){return "paper"}
else if (scissors > rock && scissors > paper){return "scissors"}
else {return "indesicive"}
};

function getPlayerChoice() {
  return  prompt(`ROUND ${RoundCount + 1} \nComputer : ${CompScore}, You : ${PlayerScore} | Your Choice?  `)
};
let PlayerChoice 
let CompChoice 
let CompScore = 0
let PlayerScore = 0
let RoundCount = 0
const actionLog = document.getElementById("log")

function playRound(CC, PC){
    console.log(`ROUND : ${RoundCount + 1}`)
    console.log("computer " + CC)
    actionLog.innerHTML += `<br> ROUND : ${RoundCount + 1}<br> Computer ${CC} - You ${PC}`
  
   RoundCount ++;

if (CC === PC){console.log("tie")
    return "tie"
}
else if (CC == "rock" && PC.toLowerCase() == "scissors" || CC == "paper" && PC.toLowerCase() == "rock" || CC == "scissors" && PC.toLowerCase() == "paper"){
    console.log(`${CC} beats ${PC.toLowerCase()}, computer wins `)
CompScore += 1
}
else if (CC == "paper" && PC.toLowerCase() == "scissors" || CC == "scissors" && PC.toLowerCase() == "rock" || CC == "rock" && PC.toLowerCase() == "paper"){
    console.log(`${PC.toLowerCase()} beats ${CC}, human wins`)
PlayerScore += 1
}    
else {console.log( "still works")}
  
};

function playGame(){
    RoundCount = 0
    PlayerScore = 0
    CompScore = 0
    while(Math.max(CompScore,PlayerScore)<5 ){
PlayerChoice = getPlayerChoice()
CompChoice = getComputerChoice()
playRound(CompChoice,PlayerChoice)
console.log(`Computer : ${CompScore}, You : ${PlayerScore}`)
actionLog.innerHTML += `<br>Computer : ${CompScore}, You : ${PlayerScore} <br> `
    }

if(CompScore === PlayerScore) {
        console.log("you tied :P")
        actionLog.innerHTML = "you tied??"
    }
else if (Math.max(CompScore,PlayerScore) == CompScore) {
    console.log("you LOSE hahaha")
    actionLog.innerHTML += "<br> you LOSE hahaha"
}
else if (Math.max(CompScore, PlayerScore) == PlayerScore) {
    console.log("yay you WIN")
    actionLog.innerHTML +="<br> you win yay"
}

};

function firstTo(n){
    RoundCount = 0
    PlayerScore = 0
    CompScore = 0
    for(i=0;i<=n; ){
PlayerChoice = getPlayerChoice()
CompChoice = getComputerChoice()
if (playRound(CompChoice, PlayerChoice) === "tie"){console.log(`Computer : ${CompScore}, You : ${PlayerScore}`) 
    continue}
else {
console.log(`Computer : ${CompScore}, You : ${PlayerScore}`)
i++;
}
    }
if (Math.max(CompScore,PlayerScore) == CompScore){
    console.log("you LOSE hahaha")
}
else if (Math.max(CompScore, PlayerScore) == PlayerScore) {
    console.log("yay you WIN")
}
};

function bestOf(r){
    RoundCount = 0
    PlayerScore = 0
    CompScore = 0
      for(i=0;i<r;i++ ){
PlayerChoice = getPlayerChoice()
CompChoice = getComputerChoice()
playRound(CompChoice,PlayerChoice)
console.log(`Computer : ${CompScore}, You : ${PlayerScore}`)
    }
    if(CompScore === PlayerScore){console.log("you tied :P")}
else if (Math.max(CompScore,PlayerScore) == CompScore){
    console.log("you LOSE hahaha")
}
else if (Math.max(CompScore, PlayerScore) == PlayerScore) {
    console.log("yay you WIN")
}

};


