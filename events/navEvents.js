import { getOrders } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import welcome from '../pages/welcome';
import clearDom from '../utils/clearDom';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-orders-nav')) {
      getOrders(user.uid).then(viewAllOrders);
    }
    if (e.target.id.includes('home-btn')) {
      clearDom();
      welcome();
    }
  });
};

export default navEvents;
