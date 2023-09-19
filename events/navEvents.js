import { getOrders } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import welcome from '../pages/welcome';
import clearDom from '../utils/clearDom';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-orders-nav')) {
      getOrders().then(viewAllOrders);
    }
    if (e.target.id.includes('home-btn')) {
      clearDom();
      welcome();
    }
  });
};

export default navEvents;
