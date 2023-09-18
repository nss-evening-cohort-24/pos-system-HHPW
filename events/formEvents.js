import { createOrder, updateOrder } from '../api/orderData';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order-btn')) {
      const payload = {
        customerName: document.querySelector('#customerName').value,
        email: document.querySelector('#customerEmail').value,
        orderStatus: false,
        orderType: document.querySelector('#orderType').value,
        phoneNumber: document.querySelector('#customerPhone').value,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload);
      });
    }
  });
};

export default formEvents;
