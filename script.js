const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    timerId = setInterval(logger, 500);
});

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}

// ======= рекурсивный setInterval ======= \\

let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500)




// ===================================== простая анимация при помощи setInterval ========================================= \\
/* function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10); 
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

btn.addEventListener('click', myAnimation); */