const table = document.getElementById('order-table-body')
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