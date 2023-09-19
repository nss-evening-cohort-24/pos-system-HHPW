import viewOrderDetails from '../pages/viewOrderDetails';
import { createOrderItem, updateOrderItem } from '../api/orderItemsData';
import { getOrderDetails } from '../api/mergedData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
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
