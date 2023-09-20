import { getOrders } from '../api/orderData';
import { emptyOrders, viewAllOrders } from '../pages/orders';
import welcome from '../pages/welcome';
import clearDom from '../utils/clearDom';

const navEvents = (user) => {
const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-orders-nav')) {
      getOrders(user.uid).then((array) => {
        if (array.length) {
          viewAllOrders(array);
        } else {
          emptyOrders();
        }
      });
    }
    if (e.target.id.includes('home-btn')) {
      clearDom();
      welcome();
    }
  });
};

export default navEvents;
