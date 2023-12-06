// FOOTER - Add updating year

const getYear = new Date();
let year = getYear.getFullYear();

document.getElementById("yearID").innerHTML = year;


// Alert Button , display an alert message when button is pressed

function buttonAlert() {
    alert('Hello world!');
}
document.getElementById('btn-alert').onclick = buttonAlert;


// Hover Button

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'I dare you';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Click me';
};


// Incrementing Button , blue text for odd , red text for even

let count = 0;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = `Number:  ${count}`
     if ((count % 2) === 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
}
