const button = document.querySelectorAll('.gameItem');
const choise = ["rock", "paper", "scissors"]

const pointsPlayerHTML = document.querySelector('.player')
const pointsCompHTML = document.querySelector('.computer')
const round = document.querySelector('.round')

const settings = document.querySelector('.settings')
const overlay = document.querySelector('overlay')
const buttonSettingsOpen = document.querySelector('.button_settings_open')
const buttonSettingsClose = document.querySelector('.button_settings_close')
const roundNumbersPlayerChoise = document.querySelector('.round_player_choise')

const restartButton = document.querySelector('.restart')
console.log(restartButton)

let pointsPlayer = 0
let pointsComputer = 0
let roundNumber = 0

buttonSettingsOpen.onclick = function (event) {
    settings.style.display = 'block';
    overlay.style.display = 'block';
}

buttonSettingsClose.onclick = function (event) {
    settings.style.display = 'none';
    overlay.style.display = 'none';
}

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
    pointsPlayerHTML.innerHTML = "0"
    pointsCompHTML.innerHTML = "0"
}

restartButton.addEventListener("click", reset)

function gamePlay(playerChoise){
    let comp = compChoise(choise)
    if(playerChoise == comp){
        alert(`НИЧЬЯ! Компьютер выбрал ${comp}, а пользователь выбрал ${playerChoise}`)
    }else if(playerChoise != comp){
        if(playerChoise=="rock" && comp=="scissors"){
            pointsPlayer++
            pointsPlayerHTML.innerHTML = pointsPlayer
            alert(`ПОБЕДИЛ ИГРОК! Компьютер выбрал ${comp}, а пользователь выбрал ${playerChoise}`)
        }else if(playerChoise=="scissors" && comp=="paper"){
            pointsPlayer++
            pointsPlayerHTML.innerHTML = pointsPlayer
            alert(`ПОБЕДИЛ ИГРОК! Компьютер выбрал ${comp}, а пользователь выбрал ${playerChoise}`)
        }else if(playerChoise=="paper" && comp=="rock"){
            pointsPlayer++
            pointsPlayerHTML.innerHTML = pointsPlayer
            alert(`ПОБЕДИЛ ИГРОК! Компьютер выбрал ${comp}, а пользователь выбрал ${playerChoise}`)
        }else{
            pointsComputer++
            pointsCompHTML.innerHTML = pointsComputer
            alert(`ПОБЕДИЛ КОМПЬЮТЕР! Компьютер выбрал ${comp}, а пользователь выбрал ${playerChoise}`)
        }
    }
    roundNumber++
    round.innerHTML = `Round ${roundNumber}`
    if(roundNumber==roundNumbersPlayerChoise.value){
        if(pointsPlayer>pointsComputer){
            alert("ПОБЕДА ИГРОКА!")
            reset()
        }else if(pointsComputer>pointsPlayer){
            alert("ПОБЕДА КОМПЬЮТЕРА!")
            reset()
        }else{
            alert("НИЧЬЯ!")
            reset()
        }
    }
}