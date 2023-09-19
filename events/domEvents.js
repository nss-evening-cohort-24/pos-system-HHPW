import getOrderDetails from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewOrderDetails(data);
      });
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-btn')) {
      console.warn('clicked');
      getOrders().then(viewAllOrders);
    }
  });
};

export default domEvents;
