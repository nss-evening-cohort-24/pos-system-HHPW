import createOrderForm from '../components/forms/createOrderForm';
import { getOrderDetails, deleteOrderRelationship } from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { viewAllOrders, emptyOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';

/* eslint-disable no-alert */
const domEvents = (useruser) => {
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

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderRelationship(firebaseKey).then(() => {
          getOrders(user.uid).then((array) => {
            if (array.length) {
              viewAllOrders(array);
            } else {
              emptyOrders();
            }
          });
        });
      }
    }

    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
  });
};

export default domEvents;
