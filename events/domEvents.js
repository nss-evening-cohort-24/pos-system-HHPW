import { getOrderDetails, deleteOrderRelationship } from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { viewAllOrders, emptyOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';

/* eslint-disable no-alert */
const domEvents = () => {
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
      console.warn('clicked');
      getOrders().then(viewAllOrders);
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
