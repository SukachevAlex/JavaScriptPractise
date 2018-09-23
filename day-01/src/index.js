const keys = document.querySelectorAll('.key');

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('keydown', playSound);
    keys.forEach(el => el.addEventListener('transitionend', removeClass));
});

function playSound(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const audio = new Audio(`sounds/${e.keyCode}.wav`);
        audio.play();
        const key = document.querySelector(`.key[data-key="${e.keyCode}`);
        key.classList.add('key_pressed');
    }
}

function removeClass(e) {
    this.classList.remove('key_pressed');
}