// FOOTER - Add updating year

const getYear = new Date();
let year = getYear.getFullYear();

document.getElementById("yearID").innerHTML = year;


// Alert Button , display an alert message when button is pressed

function buttonAlert() {
    alert('Hello world!');
}
document.getElementById('btn-alert').onclick = buttonAlert;