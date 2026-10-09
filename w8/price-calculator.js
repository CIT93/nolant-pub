const shirtPrice = 15;
const wrapPrice = 2;

export const calculateTotal = function(orderData){
    let totalPrice = 0;
    totalPrice = orderData.quantity * shirtPrice;
    if(orderData.isWrapped == true){
        totalPrice += wrapPrice;
    }
    return{
        price: totalPrice
    }
}