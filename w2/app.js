console.log('Hello from app.js! Your JavaScript is connected and running!');
const messageDisplayElement = document.getElementById("total-display");
const updateButton = document.getElementById("add-item-btn");

let totalCost = 0;
const itemPrice = 15


const handleButtonClick = function(num) {

    totalCost += itemPrice

    let message = `Your total cost is ${totalCost}`;

    if(totalCost >= 60) {
        message += ' (Over Budget!)';
        messageDisplayElement.style.color = 'red';
    } else {
       messageDisplayElement.style.color = 'green';
    }

    messageDisplayElement.textContent = message;

};


document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parsed, App is ready for interaction');
    updateButton.addEventListener('click', handleButtonClick);
    messageDisplayElement.textContent = `Welcome, ${userName}! Click the button below to start counting.`
});