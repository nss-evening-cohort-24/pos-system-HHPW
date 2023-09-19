import { getOrderDetails, deleteOrderRelationship } from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { viewAllOrders, emptyOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';

/* eslint-disable no-alert */
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
      const [, orderId] = e.target.id.split('--');
      addItemForm(orderId);
    }
  });

  document.querySelector('#view-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderRelationship(firebaseKey).then(() => {
          getOrders().then((array) => {
            if (array.length) {
              viewAllOrders(array);
            } else {
              emptyOrders();
            }
          });
        });
      }
    }
  });
};

export default domEvents;
