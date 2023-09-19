import getOrderDetails from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { emptyOrders, viewAllOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewOrderDetails(data);
      });
    }
  });

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-btn')) {
      getOrders(user.uid).then((array) => {
        if (array.length) {
          viewAllOrders(array);
        } else {
          emptyOrders();
        }
      });
    }
  });
};

export default domEvents;
