import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage() {
    try {
        //throw 'error';

        await loadProductsFetch();

        await new Promise((resolve, reject) => {
            //throw 'error';
            loadCart(() => {
                //reject(error);
                resolve();
            });
        });
    } catch (error) {
        console.log('Unexpected error, please try again later.');
    }    
    renderOrderSummary();
    renderPaymentSummary();    
}

loadPage();