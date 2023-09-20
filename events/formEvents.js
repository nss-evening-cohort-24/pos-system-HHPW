import { createOrder, getOrders, updateOrder } from '../api/orderData';
import { viewAllOrders } from '../pages/orders';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      console.warn('click check');
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
  });
};

export default formEvents;
