const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

export const saveOrders = function(orders){
    try{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
    } catch {
        console.error(`Error saving data to local storage ${error}`);
    }
    
}

export const loadOrders = function(){
    localStorage.getItem(LOCAL_STORAGE_KEY);
    if (LOCAL_STORAGE_KEY){
        return JSON.parse(LOCAL_STORAGE_KEY)
    } else {
        return [];
    }
}
