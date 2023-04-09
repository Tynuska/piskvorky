let currentPlayer = 'circle'

const addClassCircle = (event) =>  {
    event.target.classList.add('board__field--circle')
}

document.querySelector('button:nth-child(1)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(2)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(3)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(4)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(5)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(6)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(7)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(8)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(9)').addEventListener('click', addClassCircle);
document.querySelector('button:nth-child(10)').addEventListener('click', addClassCircle);

