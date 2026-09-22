import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderList from './order-list.js';
import * as orderStorage from "./order-storage.js";

//reference form
const orderForm = document.getElementById('order-form');
//reference order summary
const orderSummary = document.getElementById('order-summary');

const orders = [];

//handle submit
const handleOrderSubmit = function(event){
    event.preventDefault();
    const formData = orderHandler.getOrderInputs();
    const total = priceCalculator.calculateTotal(formData);
    //orderSummary.textContent = `Ordered ${formData.quantity} ${formData.size} T-Shirts!`;
    /*if (formData.isWrapped){
        orderSummary.textContent += ` They will be gift wrapped. :)`;
    }*/
   priceSummary.displaySummary(formData, total);
    const newOrder = {
    ...formData,
    total,
    time: new Date().toISOString()
    }
    orders.push(newOrder);
    orderStorage.saveOrders(newOrder);
    orderList.renderOrders(orders);
    console.log(orders);
}



const init = function(){
    console.log('DOM initialized, ready to go!');
    const loadedOrders = orderStorage.loadOrders();
    if (loadedOrders.length != 0){
        orders.push(loadedOrders);
        console.log('Orders Loaded');
        orderList.renderOrders(orders);
    }

    orderForm.addEventListener('submit', handleOrderSubmit);
}

document.addEventListener('DOMContentLoaded', init);