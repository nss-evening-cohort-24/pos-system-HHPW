import {
  createOrder,
  getOrders,
  updateOrder,
} from '../api/orderData';
import { viewAllOrders } from '../pages/viewAllOrders';
import { createOrderItem, updateOrderItem } from '../api/orderItemsData';
import viewOrderDetails from '../pages/viewOrderDetails';
import { getOrderDetails } from '../api/mergedData';
import { createRevenue, updateRevenue } from '../api/revenueData';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        customerName: document.querySelector('#customerName').value,
        email: document.querySelector('#customerEmail').value,
        orderStatus: 'open',
        orderType: document.querySelector('#orderType').value,
        phoneNumber: document.querySelector('#customerPhone').value,
        uid: user.uid
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(viewAllOrders);
        });
      });
    }

    if (e.target.id.includes('add-item')) {
      const [, orderId] = e.target.id.split('--');

      const payload = {
        orderId,
        itemId: document.querySelector('#itemId').value,
        uid: user.uid
      };
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrderItem(patchPayload).then(() => {
          getOrderDetails(orderId).then((obj) => viewOrderDetails(obj));
        });
      });
    }

    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        customerName: document.querySelector('#customerName').value,
        phoneNumber: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        uid: user.uid,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders(user.uid).then(viewAllOrders);
      });
    }

    if (e.target.id.includes('payment-form')) {
      const [, orderId, total, orderType] = e.target.id.split('--');
      const dateSubmitted = new Date();
      const date = dateSubmitted.toLocaleString();
      const payload = {
        orderId,
        paymentType: document.querySelector('#payment-type').value,
        tipAmount: document.querySelector('#tip-amount').value,
        orderTotal: Number(total),
        orderDate: date,
        orderType
      };

      createRevenue(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateRevenue(patchPayload);
      });

      const orderPatch = {
        orderStatus: 'closed',
        firebaseKey: orderId
      };
      updateOrder(orderPatch).then(() => {
        getOrders(user.uid).then(viewAllOrders);
      });
    }
  });
};

export default formEvents;
