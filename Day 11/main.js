const jokeContainer = document.getElementById('joke_container');
const jokeBtn = document.getElementById('joke_btn');


const API_URL = 'https://icanhazdadjoke.com/';

getJoke();

async function getJoke() {
    const res = await fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await res.json();
    jokeContainer.innerHTML = data.joke;
};
jokeBtn.addEventListener('click', getJoke);