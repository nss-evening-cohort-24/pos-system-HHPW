import getOrderDetails from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewOrderDetails(data);
      });
    }

    if (e.target.id.includes('view-orders-btn')) {
      getOrders().then(viewAllOrders);
    }

    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }
  });
};

export default domEvents;
