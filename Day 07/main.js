function shuffle() {
    const img = document.getElementById('img');
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    img.setAttribute("src", `assets/${random}.png`);
}

function animateDice() {
    setTimeout(shuffle, 500);
    const img = document.getElementById('img');
    img.setAttribute("src", `assets/dice-rol.gif`);
}