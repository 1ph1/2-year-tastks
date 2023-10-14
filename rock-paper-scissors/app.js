const button = document.querySelectorAll('.gameItem');
const choise = ["rock", "paper", "scissors"]

const pointsPlayerHTML = document.querySelector('.player')
const pointsCompHTML = document.querySelector('.computer')
const round = document.querySelector('.round')

const settings = document.querySelector('.settings')
const buttonSettingsOpen = document.querySelector('.button_settings_open')
const buttonSettingsClose = document.querySelector('.button_settings_close')

let pointsPlayer = 0
let pointsComputer = 0
let roundNumber = 0

buttonSettingsOpen.onclick = function (event) {
    settings.style.display = 'block';
}

buttonSettingsClose.onclick = function (event) {
    settings.style.display = 'none';
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

function gamePlay(playerChoise){
    let comp = compChoise(choise)
    roundNumber++
    round.innerHTML = `Round ${roundNumber}`
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
}