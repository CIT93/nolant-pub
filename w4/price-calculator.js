const shirtPrice = 15;
const wrapPrice = 2;

export const calculateTotal = function(orderData){
    let totalPrice = 0;
    totalPrice = orderData.quantity * 15;
    if(orderData.isWrapped == 'true'){
        totalPrice += 2;
    }
    return{
        wrapPrice: totalPrice
    }
}