let currentPlayer = "circle";
const playerElm = document.querySelector("#player");

const addClass = (event) => {
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    event.target.disabled = true;
    playerElm.classList.add("board__field--cross");
    playerElm.classList.remove("board__field--circle");
    return (currentPlayer = "cross");
  }

  if (currentPlayer === "cross") {
    event.target.classList.add("board__field--cross");
    event.target.disabled = true;
    playerElm.classList.remove("board__field--cross");
    playerElm.classList.add("board__field--circle");
    return (currentPlayer = "circle");
  }
};

// //proč nefunguje?
// const buttons = document.querySelector('.field')
// const buttonsAll = buttons.querySelectorAll('button')
// buttonsAll.forEach((button) => {
//     button.addEventListener('click,', addClass)
// })

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", addClass);
  console.log(button);
});

// document.querySelector('button:nth-child(1)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(1)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(1)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(2)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(3)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(4)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(5)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(6)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(7)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(8)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(9)').addEventListener('click', addClass);
// document.querySelector('button:nth-child(10)').addEventListener('click', addClass);
