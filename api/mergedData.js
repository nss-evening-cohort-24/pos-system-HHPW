import { getSingleOrder, deleteOrder } from './orderData';
import { getOrderItems, deleteOrderItem } from './orderItemsData';

const getOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const orderItems = await getOrderItems(order.firebaseKey);
  return { ...order, orderItems };
};

const deleteOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderDetails(firebaseKey).then((orderArray) => {
    const deleteOrderItemsFromOrder = orderArray.map((item) => deleteOrderItem(item.firebaseKey));

    Promise.all(deleteOrderItemsFromOrder).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, deleteOrderRelationship };
