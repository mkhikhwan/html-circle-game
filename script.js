// WAIT FOR CONTENT TO LOAD BEFORE INITIATING SCRIPT
document.addEventListener('DOMContentLoaded', function () {
// START
const wrapper = document.getElementById("wrapper");
const score_display = document.getElementById("score");
const timer_display = document.getElementById("time");
const startMenu = document.getElementById("startMenu");
const highscore_display = document.getElementById("highscore");

let score = 0;
let timer = 20;
let highscore = 0;

// Start game when press button
const startButton = document.getElementById("start");
startButton.addEventListener('click', startGame);

function createCircle(){
    const circle = document.createElement("div");
    circle.className = 'circle';

    // Add limit where circle can appear.
    // const maxX = wrapper.clientWidth - 50;
    // const maxY = wrapper.clientHeight - 50;

    const maxX = wrapper.clientWidth - 50;
    const maxY = wrapper.clientHeight - 50;

    // Add random position to the circle
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Set the position the the circle
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Add eventListener to the circle
    circle.addEventListener('click', handleClick);

    // Add circle to the wrapper
    wrapper.appendChild(circle);
};

function handleClick(){
    score++;
    updateScore();

    //Removes the circle. since this function is referenced inside createCircle()
    //'this' references the circle that is created
    this.remove(); 

    // Create new circle
    createCircle();
}

function updateScore(){
    // Update HTML to update score
    score_display.textContent = score;
}

function updateTimer(){
    timer_display.textContent = timer;
}

function updateGame(){
    // Updates the game/timer display
    updateTimer();

    // If timer not 0, keep playing
    if(timer == 0){
        endGame();
    }else{
        // Minus the timer
        timer--;

        // Set a timer that after 1000ms passes, call the this function again.
        // An alternative for forloop
        setTimeout(updateGame, 1000);
    }
}

function startGame(){
    // Switch screens
    startMenu.style.display = 'none';
    wrapper.style.display = 'block';

    // Start Game
    createCircle();
    updateGame();
}

function endGame(){
    alert("GAME OVER");
    updateHighscore();

    // Switch screens
    wrapper.style.display = 'none';
    startMenu.style.display = 'block';
}

function updateHighscore(){
    if(score > highscore){
        highscore = score;
    }

    highscore_display.textContent = highscore;
}

// END
});