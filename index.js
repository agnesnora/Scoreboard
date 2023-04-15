let startScore = 0;
let liveScoreHome = 0;
let liveScoreGuest = 0;

renderNewGame();

document.addEventListener("click", function (e) {
  if (e.target.dataset.oneHome) {
    liveScoreHome++;
    renderHomeScore();
  } else if (e.target.dataset.twoHome) {
    liveScoreHome += 2;
    renderHomeScore();
  } else if (e.target.dataset.threeHome) {
    liveScoreHome += 3;
    renderHomeScore();
  } else if (e.target.dataset.oneGuest) {
    liveScoreGuest++;
    renderGuestScore();
  } else if (e.target.dataset.twoGuest) {
    liveScoreGuest += 2;
    renderGuestScore();
  } else if (e.target.dataset.threeGuest) {
    liveScoreGuest += 3;
    renderGuestScore();
  }
});

document.getElementById("newGame").addEventListener("click", function () {
  renderNewGame();
});
function renderNewGame() {
  startScore = 0;
  liveScoreHome = 0;
  liveScoreGuest = 0;
  document.getElementById("homeScore").innerHTML = `<p>${startScore}</p>`;
  document.getElementById("guestScore").innerHTML = `<p>${startScore}</p>`;
}
function renderHomeScore() {
  document.getElementById("homeScore").innerHTML = `<p>${liveScoreHome}</p>`;
}

function renderGuestScore() {
  document.getElementById("guestScore").innerHTML = `<p>${liveScoreGuest}</p>`;
}
