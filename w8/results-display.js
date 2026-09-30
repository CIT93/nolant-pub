const orderSummary = document.getElementById('order-summary');

const displayTotal = document.getElementById('display-total');
const displayQty = document.getElementById('display-qty');
const displaySize = document.getElementById('display-size');
const displayGift = document.getElementById('display-gift');

export const displaySummary = function(order, total){
    displayTotal.textContent = total.price;
    displayQty.textContent = order.quantity;
    displaySize.textContent = order.size;
    if(order.isWrapped){
        displayGift.textContent = 'Included!';
    } else {
        displayGift.textContent = 'None';
    }

    orderSummary.style.display = 'block';
    
}
//Wrote this on autopilot. We don't have a clear button!
/*export const hideSummary = function(){
    orderSummary.style.display = 'none';
}*/
