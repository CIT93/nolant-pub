const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

export const saveOrders = function(orders){
    try{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
        console.error(`Error saving data to local storage ${error}`);
    }
    
}

export const loadOrders = function(){
    const datastring = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (datastring){
        return JSON.parse(datastring);
    } else {
        return [];
    }
}
