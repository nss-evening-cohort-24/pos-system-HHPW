import createOrderForm from '../components/forms/createOrderForm';
import { getOrderDetails, deleteOrderRelationship } from '../api/mergedData';
import { getOrders, getSingleOrder } from '../api/orderData';
import { viewAllOrders, emptyOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';
import paymentForm from '../components/forms/paymentForm';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewOrderDetails(data);
      });
    }

    if (e.target.id.includes('view-orders-btn')) {
      getOrders(user.uid).then((array) => {
        if (array.length) {
          viewAllOrders(array);
        } else {
          emptyOrders();
        }
      });
    }

    if (e.target.id.includes('add-item-btn')) {
      const [, orderId] = e.target.id.split('--');
      addItemForm(orderId);
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

  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((obj) => createOrderForm(obj));
    }
  });

  document.querySelector('#view-container').addEventListener('click', (e) => {
    if (e.target.id.includes('go-to-payment-btn')) {
      paymentForm();
    }
  });
};

export default domEvents;
