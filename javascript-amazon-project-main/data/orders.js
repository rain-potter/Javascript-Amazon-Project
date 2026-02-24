//get orders from localstorage or use empty array
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

//add order to array
export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();
};

//save orders to localstorage
function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}