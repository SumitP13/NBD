const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let x = highScores.map((y) => {
  return `<li class="high-score>${y.name} - ${y.score}</li>`;
});
console.log(x);

// highScoresList.innerHTML = highScores
//   .map((score) => {
//     console.log(score.name);
//     return `<li class="high-score>${score.name} - ${score.score}</li>`;
//   })
//   .join("");

highScoresList.innerHTML = x.join("");
