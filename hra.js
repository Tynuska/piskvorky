import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

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

const buttons = document.querySelectorAll('button');
console.log(buttons)



const buttonsArray = Array.from(buttons);
console.log(buttonsArray)
const herniPole = buttonsArray.map((button) => {
  if (button.classList.contains('board__field--cross')) {
    return  'x';
  } else if (button.classList.contains('board__field--circle')) {
    return 'o';
  } else return "_";
});

// console.log(herniPole);



const vitez = findWinner(herniPole);
if (vitez === "o") {
  alert("Vyhrálo kolečko!");
} else if (vitez === "x") {
  alert("Vyhrál křížek!");
} 


buttons.forEach((button) => {
  button.addEventListener("click", addClass);
});

// //proč nefunguje?
// const buttons = document.querySelector('.field')
// const buttonsAll = buttons.querySelectorAll('button')
// buttonsAll.forEach((button) => {
//     button.addEventListener('click,', addClass)
// })

// const buttons = document.querySelectorAll("button")
// buttons.forEach((button) => {
//   button.addEventListener("click", addClass);
//   console.log(button);
// });

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
