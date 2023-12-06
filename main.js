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