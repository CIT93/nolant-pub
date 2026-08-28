//Get form
const orderForm = document.getElementById('order-form');

//Get inputs from form
const quantityInput = orderForm.querySelector('#qty');
const isWrapped = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');

// Function to get selected radio button
const getSelectedRadioValue = function(sizeRadios){
    for(const radio of sizeRadios){
        if(radio.checked){
            console.log(`${radio.value} has the attribute of ${radio.checked}`);
            return radio.value;
        }
    }
}

export const getOrderInputs = function (){
    console.log('Getting Form Inputs...');
    return{
        quantity: parseInt(quantityInput.value) || 0,
        isWrapped: isWrapped.checked,
        size: getSelectedRadioValue(sizeRadios)
    }
}
// TEMP TEST:
console.log(getOrderInputs());