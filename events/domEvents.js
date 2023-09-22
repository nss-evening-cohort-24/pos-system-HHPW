import createOrderForm from '../components/forms/createOrderForm';
import { getOrderDetails, deleteOrderRelationship } from '../api/mergedData';
import { getOrders, getSingleOrder } from '../api/orderData';
import { viewAllOrders, emptyOrders } from '../pages/orders';
import viewOrderDetails from '../pages/viewOrderDetails';
import addItemForm from '../components/forms/addItemForm';
import viewRevenue from '../pages/viewRevenue';
import { getRevenue } from '../api/revenueData';
import { deleteOrderItem, getSingleItem } from '../api/orderItemsData';
import paymentForm from '../components/forms/paymentForm';
import { viewClosedOrders, viewClosedDetails } from '../pages/viewClosed';

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

    if (e.target.id.includes('create-order-btn')) {
      createOrderForm();
    }

    if (e.target.id.includes('view-revenue-btn')) {
      getRevenue().then(viewRevenue);
    }

    if (e.target.id.includes('delete-order-item-btn')) {
      const [, itemId, orderId] = e.target.id.split('--');

      getSingleItem(itemId, orderId).then((obj) => deleteOrderItem(obj.firebaseKey)).then(() => {
        getOrderDetails(orderId).then((res) => viewOrderDetails(res));
      });
    }

    if (e.target.id.includes('edit-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((obj) => createOrderForm(obj));
    }

    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((obj) => paymentForm(obj));
    }

    if (e.target.id.includes('view-closed-orders')) {
      getOrders(user.uid).then((array) => viewClosedOrders(array));
    }

    if (e.target.id.includes('view-closed-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewClosedDetails(data);
      });
    }
  });
};

export default domEvents;
