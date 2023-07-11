const colors = ['#c72020', '#33c720', '#20c7a3', '#2970c0', '#7b30df', '#d130df', '#24815a', '#246b81'];

const container = document.getElementById('container');
const SQUARES_NR = 300;

for (let i = 0; i < SQUARES_NR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        setcolorEl(square)
    });

    square.addEventListener('mouseout', () => {
        removecolorEl(square);
    });

    container.appendChild(square);
}

function setcolorEl(el) {
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}

function removecolorEl(el) {
    el.style.background = `#111111`;
    el.style.boxShadow = `0 0 2px #fff`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}