let game = ['rock', 'paper', 'scissors']
let playerPoint = 0
let cpuPoint = 0

function select (userPick) {
    if(playerPoint===10) {
        var x = document.getElementById("snackbar")
        x.textContent = "You won this game! Reset to continue..."
        x.style.backgroundColor = "#386641"
        x.className = "show"
        var y = document.getElementById("playground")
        y.classList.remove("show")
        setTimeout(function(){ 
            x.className = x.className.replace("show", "")
            y.classList.add("show")         
        }, 2000)
    } else if (cpuPoint===10) {
        var x = document.getElementById("snackbar")
        x.textContent = "You lost this game! Reset to continue..."
        x.style.backgroundColor = "#9b2226"
        x.className = "show"
        var y = document.getElementById("playground")
        y.classList.remove("show")
        setTimeout(function(){ 
            x.className = x.className.replace("show", "")
            y.classList.add("show")         
        }, 2000)
    } else {
        let randomNumber = Math.floor(Math.random()*3)
        let cpuPick = game[randomNumber];
        if(userPick === cpuPick) {
            var x = document.getElementById("snackbar")
            x.textContent = "You both chose "+ userPick + ". Try again!"
            x.style.backgroundColor = "#f48c06"
            x.className = "show"
            var y = document.getElementById("playground")
            y.classList.remove("show")
            setTimeout(function(){ 
                x.className = x.className.replace("show", "")
                y.classList.add("show")         
            }, 2000)
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
}
           
function playerWin(cpuPick, userPick) {
    playerPoint += 1
    document.getElementById("player-score").textContent = playerPoint
    var x = document.getElementById("snackbar")
    x.textContent = "CPU Picked "+ cpuPick +". You Won!"
    x.style.backgroundColor = "#386641"
    x.className = "show"
    var y = document.getElementById("playground")
    y.classList.remove("show")
    setTimeout(function(){ 
        x.className = x.className.replace("show", "")
        y.classList.add("show")
    }, 2000)
}

function cpuWin(cpuPick, userPick) {
    cpuPoint += 1;
    document.getElementById("cpu-score").textContent = cpuPoint
    var x = document.getElementById("snackbar")
    x.textContent = "CPU Picked "+ cpuPick +".CPU Won!"
    x.style.backgroundColor = "#9b2226"
    x.className = "show"
    var y = document.getElementById("playground")
    y.classList.remove("show")
    setTimeout(function(){ 
        x.className = x.className.replace("show", "")
        y.classList.add("show")
    }, 2000)
}

function resetGame() {
    cpuPoint = 0;
    playerPoint = 0;
    document.getElementById("cpu-score").textContent = cpuPoint
    document.getElementById("player-score").textContent = playerPoint
    var x = document.getElementById("snackbar")
    x.textContent = "Game reset! Start again..."
    x.style.backgroundColor = "#1e6091"
    x.className = "show"
    var y = document.getElementById("playground")
    y.classList.remove("show")
    setTimeout(function(){ 
        x.className = x.className.replace("show", "")
        y.classList.add("show")
    }, 2000)

}