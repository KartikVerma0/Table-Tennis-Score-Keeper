const players = [
    {
        score: document.querySelector("#playerOneScore"),
        scoreBtn: document.querySelector("#playerOneScoreBtn"),
    },
    {
        score: document.querySelector("#playerTwoScore"),
        scoreBtn: document.querySelector("#playerTwoScoreBtn"),
    },
];

const totalPlayers = players.length;
const resetBtn = document.querySelector("#resetBtn");
const maxScore = document.querySelector("#maxScore");
const confetti = document.querySelector("#confetti");

function updateScore(players, playingOrder) {
    let playerIndex = playingOrder - 1;
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
        confetti.classList.toggle("display-block");
    }
}

function reset(players) {
    for (let i = 0; i < totalPlayers; i++) {
        players[i].score.textContent = 0;
        players[i].score.classList.remove("has-text-success");
        players[i].score.classList.remove("has-text-danger");
        players[i].scoreBtn.removeAttribute("disabled");
    }
    confetti.classList.toggle("display-block");
}

for (let i = 0; i < totalPlayers; i++) {
    players[i].scoreBtn.addEventListener("click", () => {
        updateScore(players, i + 1);
    });
}

resetBtn.addEventListener("click", () => {
    maxScoreValue = maxScore.value;
    reset(players);
});
