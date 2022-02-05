const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const playerOneScoreBtn = document.querySelector("#playerOneScoreBtn");
const playerTwoScoreBtn = document.querySelector("#playerTwoScoreBtn");
const resetBtn = document.querySelector("#resetBtn");
const maxScore = document.querySelector("#maxScore");
let maxScoreValue = maxScore.value;

maxScore.addEventListener("click", function () {
    maxScoreValue = maxScore.value;
});

playerOneScoreBtn.addEventListener("click", () => {
    playerOneScore.textContent = parseInt(playerOneScore.textContent) + 1;
    if (playerOneScore.textContent == maxScoreValue) {
        playerOneScore.classList.add("has-text-success");
        playerTwoScore.classList.add("has-text-danger");
        playerOneScoreBtn.setAttribute("disabled", "true");
        playerTwoScoreBtn.setAttribute("disabled", "true");
    }
});

playerTwoScoreBtn.addEventListener("click", () => {
    playerTwoScore.textContent = parseInt(playerTwoScore.textContent) + 1;
    if (playerTwoScore.textContent == maxScoreValue) {
        playerTwoScore.classList.add("has-text-success");
        playerOneScore.classList.add("has-text-danger");
        playerOneScoreBtn.setAttribute("disabled", "true");
        playerTwoScoreBtn.setAttribute("disabled", "true");
    }
});

resetBtn.addEventListener("click", () => {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneScore.classList.remove("has-text-success");
    playerTwoScore.classList.remove("has-text-danger");
    playerTwoScore.classList.remove("has-text-success");
    playerOneScore.classList.remove("has-text-danger");
    playerOneScoreBtn.removeAttribute("disabled");
    playerTwoScoreBtn.removeAttribute("disabled");
});
