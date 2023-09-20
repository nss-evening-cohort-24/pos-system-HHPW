import { createOrder, getOrders, updateOrder } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';
import { createOrderItem, updateOrderItem } from '../api/orderItemsData';
import getOrderDetails from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        customerName: document.querySelector('#customerName').value,
        email: document.querySelector('#customerEmail').value,
        orderStatus: false,
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

    if (e.target.id.includes('submit-add-item')) {
      const [, orderId] = e.target.id.split('--');

      const payload = {
        orderId,
        itemId: document.querySelector('#itemId').value,
        uid: user.uid
      };

      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrderItem(patchPayload).then(() => {
          getOrderDetails(orderId).then((res) => viewOrderDetails(res));
        });
      });
    }
  });
};

export default formEvents;
