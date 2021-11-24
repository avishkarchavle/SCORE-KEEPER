const p1b = document.querySelector('#p1b');
const p2b = document.querySelector('#p2b');
const p1d = document.querySelector('#p1d');
const p2d = document.querySelector('#p2d');
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');

// alert("ljdljf");
let p1s = 0;
let p2s = 0;

let winningscore = 4;

let isgameover = false;



p1b.addEventListener('click', function() {
    if (!isgameover) {
        p1s += 1;
        if (p1s === winningscore) {
            isgameover = true;
            p1d.classList.add('winner');
            p2d.classList.add('looser');
            p1b.textContent = 'winner';
            p2b.textContent = 'looser';
            p1b.disabled = true;
            p2b.disabled = true;

        }
        p1d.textContent = p1s;
    }

})

p2b.addEventListener('click', function() {
    if (!isgameover) {
        p2s += 1;
        if (p2s === winningscore) {
            isgameover = true;
            p2d.classList.add('winner');
            p1d.classList.add('looser');
            p2b.textContent = 'winner';
            p1b.textContent = 'looser';
            p2b.disabled = true;
            p1b.disabled = true;
        }
        p2d.textContent = p2s;
    }

})

playto.addEventListener('change', function() {
    winningscore = parseInt(this.value);
    res();
})
reset.addEventListener('click', res)

function res() {
    isgameover = false;
    p1s = 0;
    p2s = 0;
    p1d.textContent = 0;
    p2d.textContent = 0;
    p1d.classList.remove('winner', 'looser');
    p2d.classList.remove('winner', 'looser');
    p1b.disabled = false;
    p2b.disabled = false;
    p1b.textContent = '+1 player one';
    p2b.textContent = '+1 player two';

}