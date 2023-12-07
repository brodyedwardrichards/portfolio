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


// for Loops , using an if...else loop inside. uses same css styling from Incrementing Button classes (even and odd)
for (let i = 1; i <= 100; i = i + 1) {
    const createLi = document.createElement('li');
    const addLi = document.createTextNode(`List Item: ` + i);
    document.getElementById('numbers').appendChild(createLi); 
    createLi.appendChild(addLi);
        if ((i % 2) === 0) {
            createLi.classList.add('even');
            
        } else {
            createLi.classList.add('odd');
        }
}