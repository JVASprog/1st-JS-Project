let count = 0;

var CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
    if (count < 10) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
        if (count >= 0) {
            CURRENT_NUMBER.style.color = 'black';
        }
    }
}

function decrement() {
    if (count > (-5)) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
        if (count < 0) {
            CURRENT_NUMBER.style.color = 'red';
        }
    }
}