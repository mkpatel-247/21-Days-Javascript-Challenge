const counter = document.getElementById('counter');
const reset = document.querySelector('.btn-reset');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');

let count = 0;
increase.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
})
decrease.addEventListener('click', () => {
    if (count > 0)
        count--;
    counter.innerHTML = count;
})

reset.addEventListener('click', () => {
    counter.innerHTML = 0;
})