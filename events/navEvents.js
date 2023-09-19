import { getOrders } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import welcome from '../pages/welcome';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-orders-nav')) {
      console.warn('clicked');
      getOrders().then(viewAllOrders);
    }
    if (e.target.id.includes('home-btn')) {
      welcome();
    }
  });
};

export default navEvents;
