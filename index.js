let game = ['rock', 'paper', 'scissors']
let playerPoint = 0
let cpuPoint = 0

function select (userPick) {
    let randomNumber = Math.floor(Math.random()*3)
    let cpuPick = game[randomNumber];
    if(userPick === cpuPick) {
        document.getElementById("snackbar").textContent = "Match Draw"
        var x = document.getElementById("snackbar")
    x.className = "show"
    setTimeout(function(){ x.className = x.className.replace("show", "") }, 2000)
    } else {
        switch (true) {
            case (userPick === 'rock' && cpuPick === 'scissors'):
                playerWin(cpuPick, userPick)
                break
            case (userPick === 'rock' && cpuPick === 'paper'):
                cpuWin(cpuPick, userPick)
                break
            case (userPick === 'paper' && cpuPick === 'rock'):
                playerWin(cpuPick, userPick)
                break
            case (userPick === 'paper' && cpuPick === 'scissors'):
                cpuWin(cpuPick, userPick)
                break
            case (userPick === 'scissors' && cpuPick === 'paper'):
                playerWin(cpuPick, userPick)
                break
            case (userPick === 'scissors' && cpuPick === 'rock'):
                cpuWin(cpuPick, userPick)
                break
            }
        } 
}
           
function playerWin(cpuPick, userPick) {
    playerPoint += 1
    document.getElementById("snackbar").textContent = "CPU Picked "+ cpuPick +". You Won!"
    document.getElementById("player-score").textContent = playerPoint
    var x = document.getElementById("snackbar")
    x.className = "show"
    setTimeout(function(){ x.className = x.className.replace("show", "") }, 3000)
}

function cpuWin(cpuPick, userPick) {
    cpuPoint += 1;
    document.getElementById("snackbar").textContent = "CPU Picked "+ cpuPick +".CPU Won!"
    document.getElementById("cpu-score").textContent = cpuPoint
    var x = document.getElementById("snackbar")
    var y = document.getElementById("playground")
    x.className = "show"
    setTimeout(function(){ 
        x.className = x.className.replace("show", "")
        y.className = x.className.replace("show", "")
     }, 2000)
}