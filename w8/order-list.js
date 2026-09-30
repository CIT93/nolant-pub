const table = document.getElementById('order-table-body')
table.addEventListener('click', function(event) {
    const target = event.target;
    
    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    // 3. Temporary Test: Log the ID to prove it works!
    console.log("Clicked button with ID:", id); 
});
export const renderOrders = function (orders) {
    table.innerHTML = '';
    if (orders.length === 0) {
        return;
    }
    for (const order of orders) {
        const row = document.createElement('tr');
        row.dataset.id = order.id;
        row.innerHTML = `
        <td>${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
        <td>${order.quantity}</td>
        <td>${order.size}</td>
        <td>${order.total.price}</td>
        <td class="action-cell">
            <button class="edit-btn" data-id="${order.id}">Edit</button>
            <button class="delete-btn" data-id="${order.id}">Delete</button>
    `
        table.appendChild(row);
    }
}