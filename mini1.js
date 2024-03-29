let userScore ='0'
let computerScore ='0'
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("com-score")
const scoreBoard_div = document.querySelector(".scoreBoard")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function getComputerChoice(){
     const choices = ['r', 'p', 's'];
     const radomNumber = Math.floor(Math.random()*3);
     return choices[radomNumber];
}

function convert(letter) {
    if(letter === "r") return "바위";
    if(letter === "p") return "보";
    if(letter === "s") return "가위";
}

function win(userChoice, computerChoice){
    const smallUserWord = "유저".fontsize(3).sub(); 
    const smallComWord = "컴".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord}는 ${convert(computerChoice)}${smallComWord}를 이깁니다. YOU WIN`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice){
    const smallUserWord = "유저".fontsize(3).sub();
    const smallComWord = "컴".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord}는 ${convert(computerChoice)}${smallComWord}에게 집니다. YOU LOSE`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice){
    const smallUserWord = "유저".fontsize(3).sub();
    const smallComWord = "컴".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord}는 ${convert(computerChoice)}${smallComWord}와 비깁니다. DRAW`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
            
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissor_div.addEventListener('click', () => game("s"))
}

main();