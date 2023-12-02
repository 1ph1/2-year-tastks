const button = document.querySelectorAll('.gameItem');
const choise = ["rock", "paper", "scissors"]

const pointsPlayerHTML = document.querySelector('.player')
const pointsCompHTML = document.querySelector('.computer')
const round = document.querySelector('.round')
const winner = document.querySelector('.winner')
const nickname = document.querySelector('.nickname')
const player = document.querySelector('.nickname_player')
const gameNumberPlayerChoise = document.querySelector('.game_player_choise')

const roundNumbersPlayerChoise = document.querySelector('.round_player_choise')
const buttonNicknameChange = document.querySelector('.nickname_change')

const restartButton = document.querySelector('.restart')
console.log(restartButton)

let pointsPlayer = 0
let pointsComputer = 0
let roundNumber = 0

let globalPointsPlayer = 0
let globalPointsComputer = 0

// buttonSettingsOpen.onclick = function (event) {
//     settings.style.display = 'block';
//     overlay.style.display = 'block';
// }

// buttonSettingsClose.onclick = function (event) {
//     settings.style.display = 'none';
//     overlay.style.display = 'none';
// }

button.forEach((element) => element.addEventListener("click", function() {
    let playerChoise = element.getAttribute('id')
    gamePlay(playerChoise)
}))

function compChoise(array){
    let compChoise = Math.random()*2
    compChoise = Math.round(compChoise)
    let compResult = array[compChoise]
    return compResult
}

function reset(){
    pointsPlayer = 0
    pointsComputer = 0
    roundNumber = 0
    round.innerHTML = `start`
    winner.innerHTML = ` `
    // pointsPlayerHTML.innerHTML = "0"
    // pointsCompHTML.innerHTML = "0"
}

function globalReset(){
    pointsPlayer = 0
    pointsComputer = 0
    roundNumber = 0
    round.innerHTML = `start`
    winner.innerHTML = ` `
    pointsPlayerHTML.innerHTML = "0"
    pointsCompHTML.innerHTML = "0"
}

function changeNickname(){
    let changedNickname = nickname.value
    player.innerHTML = `${changedNickname} score:`
}

restartButton.addEventListener("click", reset)
buttonNicknameChange.addEventListener("click", changeNickname)

function gamePlay(playerChoise){
    let comp = compChoise(choise)
    if(playerChoise == comp){
        winner.innerHTML=`НИЧЬЯ!`
    }else if(playerChoise != comp){
        if(playerChoise=="rock" && comp=="scissors"){
            pointsPlayer++
            // pointsPlayerHTML.innerHTML = pointsPlayer
            winner.innerHTML=`ПОБЕДИЛ ИГРОК!`
        }else if(playerChoise=="scissors" && comp=="paper"){
            pointsPlayer++
            // pointsPlayerHTML.innerHTML = pointsPlayer
            winner.innerHTML=`ПОБЕДИЛ ИГРОК!`
        }else if(playerChoise=="paper" && comp=="rock"){
            pointsPlayer++
            // pointsPlayerHTML.innerHTML = pointsPlayer
            winner.innerHTML=`ПОБЕДИЛ ИГРОК!`
        }else{
            pointsComputer++
            // pointsCompHTML.innerHTML = pointsComputer
            winner.innerHTML=`ПОБЕДИЛ КОМПЬЮТЕР!`
        }
    }
    roundNumber++
    round.innerHTML = `Round ${roundNumber}`
    if(roundNumber==roundNumbersPlayerChoise.value){
        if(pointsPlayer>pointsComputer){
            globalPointsPlayer++
            pointsPlayerHTML.innerHTML = globalPointsPlayer
            reset()
        }else if(pointsComputer>pointsPlayer){
            globalPointsComputer++
            pointsCompHTML.innerHTML = globalPointsComputer
            reset()
        }else{
            reset()
        }
        if(globalPointsPlayer==gameNumberPlayerChoise.value){
            alert(`ПОБЕДА ЗА ${changedNickname}`)
            globalReset()
        }else if(globalPointsComputer==gameNumberPlayerChoise.value){
            alert(`ПОБЕДА ЗА КОМПЬЮТЕРОМ`)
            globalReset()
        }
    }
}