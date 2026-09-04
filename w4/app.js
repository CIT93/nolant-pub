import * as orderHandler from "./order-handler.js";

//reference form
const orderForm = document.getElementById('order-form');
//reference order summary
const orderSummary = document.getElementById('order-summary');

//handle submit
const handleOrderSubmit = function(event){
    event.preventDefault();
    const formData = orderHandler.getOrderInputs();
    orderSummary.textContent = `Ordered ${formData.quantity} ${formData.size} T-Shirts!`;
    if (formData.isWrapped){
        orderSummary.textContent += ` They will be gift wrapped. :)`;
    }
}

const init = function(){
    console.log('DOM initialized, ready to go!');
    orderForm.addEventListener('submit', handleOrderSubmit);
}

document.addEventListener('DOMContentLoaded', init);