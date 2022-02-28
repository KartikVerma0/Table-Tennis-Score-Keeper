//player details
const players = [
    {
        name: document.querySelector("#playerOneName"),
        score: document.querySelector("#playerOneScore"),
        scoreBtn: document.querySelector("#playerOneScoreBtn"),
    },
    {
        name: document.querySelector("#playerTwoName"),
        score: document.querySelector("#playerTwoScore"),
        scoreBtn: document.querySelector("#playerTwoScoreBtn"),
    },
];

const totalPlayers = players.length; //total number of players
const resetBtn = document.querySelector("#resetBtn"); //reset button
const maxScore = document.querySelector("#maxScore"); //maximum score
const confetti = document.querySelector("#confetti"); //confetti overlay

//score updating function

function updateScore(players, playingOrder) {
    let playerIndex = playingOrder - 1; //playing index is one less than playing order.
    let maxScoreValue = maxScore.value;
    players[playerIndex].score.textContent =
        parseInt(players[playerIndex].score.textContent) + 1;
    if (players[playerIndex].score.textContent == maxScoreValue) {
        for (let i = 0; i < totalPlayers; i++) {
            players[i].scoreBtn.setAttribute("disabled", "true");
            if (i === playerIndex) {
                players[i].score.classList.add("has-text-success");
            } else {
                players[i].score.classList.add("has-text-danger");
            }
        }
        confetti.classList.add("display-block");
    }
}

//reset score function

function reset(players) {
    for (let i = 0; i < totalPlayers; i++) {
        players[i].score.textContent = 0;
        players[i].score.classList.remove("has-text-success");
        players[i].score.classList.remove("has-text-danger");
        players[i].scoreBtn.removeAttribute("disabled");
    }
    confetti.classList.remove("display-block");
}

for (let i = 0; i < totalPlayers; i++) {
    players[i].scoreBtn.addEventListener("click", () => {
        //clicking increment score button increases score
        updateScore(players, i + 1);
    });
}

resetBtn.addEventListener("click", () => {
    // clicking reset score button resets score.
    maxScoreValue = maxScore.value;
    reset(players);
});

// Modal Functionality

const modal = document.querySelector(".modal");
const modalSaveBtn = document.querySelector("#modalSaveBtn");

modal.classList.add("display-block"); //By default Modal is visible on page load

modalSaveBtn.addEventListener("click", () => {
    //naming button functionality
    for (let i = 0; i < totalPlayers; i++) {
        players[i].scoreBtn.textContent = `+1 [${
            players[i].name.value || `Player ${i + 1}`
        }]`;
    }
    //After 3s modal hides after save button click.
    setTimeout(() => {
        modal.classList.remove("display-block");
    }, 3000);
});

// tt animation

//DOM elements
const ttAnimCont = document.querySelector(".tt-animation-container");
const ttLottie = document.querySelector("#tt-animation");

const tl = gsap.timeline(); //FadeOut Timeline

tl.pause(); //By default timline is paused
tl.to(".fadeOutAnimation", { y: 40, opacity: 0, stagger: 0.1 });

modalSaveBtn.addEventListener("click", () => {
    tl.play(); //On clicking save button timeline plays.
    setTimeout(() => {
        //Fade elments and form are hidden with display none, so they woun`t take space.
        document.querySelector(".Players-name").style.display = "none";
        document.querySelectorAll(".fadeOutAnimation").forEach((element) => {
            element.style.display = "none";
        });
    }, 1000);

    setTimeout(() => {
        //First tt bat animation is displayed with display block but with 0 opacity,
        // later opacity increases gradually
        ttAnimCont.classList.add("display-block");
        gsap.from(ttAnimCont, { opacity: 0 });
        ttLottie.play();
    }, 1000);
});
