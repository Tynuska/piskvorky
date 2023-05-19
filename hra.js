import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";
const playerElm = document.querySelector("#player");

//add class according to the player
const addClass = (event) => {
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    event.target.disabled = true;
    playerElm.classList.add("board__field--cross");
    playerElm.classList.remove("board__field--circle");
    currentPlayer = "cross";
  } else if (currentPlayer === "cross") {
    event.target.classList.add("board__field--cross");
    event.target.disabled = true;
    playerElm.classList.remove("board__field--cross");
    playerElm.classList.add("board__field--circle");
    currentPlayer = "circle";
  }

  //Playing field
  const buttonsArray = Array.from(buttons);

  const playingField = buttonsArray.map((button) => {
    if (button.classList.contains("board__field--cross")) {
      return "x";
    } else if (button.classList.contains("board__field--circle")) {
      return "o";
    } else return "_";
  });

  //Fetch
  // const fields = document.querySelectorAll("button");
  fetch("https://piskvorky.czechitas-podklady.cz/api/suggest-next-move", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      board: playingField,
      player: "x",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (currentPlayer === "cross") {
        const { x, y } = data.position;
        const field = buttons[x + y * 10];
        field.click();
      }
    });

  //Who wins
  const winner = findWinner(playingField);
  if (winner === "o") {
    setTimeout(() => {
      alert("Vyhrálo kolečko!"), location.reload();
    }, 500);
  } else if (winner === "x") {
    setTimeout(() => {
      alert("Vyhrál křížek!"), location.reload();
    }, 500);
  } else if (winner === "tie") {
    alert("Hra skončila remízou.");
  }
};

//call addClass function  while clicking
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", addClass);
});

// restart
const restart = document.querySelector("#restart");
restart.addEventListener("click", (event) => {
  if (confirm("Opravdu chceš začít znovu?") === false) {
    event.preventDefault();
  }
});
