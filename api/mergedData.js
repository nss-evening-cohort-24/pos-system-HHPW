import { getSingleMenuItem } from './menuData';
import { deleteOrder, getSingleOrder } from './orderData';
import { getOrderItems, deleteOrderItem } from './orderItemsData';

const getOrderDetails = async (orderId) => {
  const order = await getSingleOrder(orderId);
  const allOrderItems = await getOrderItems(orderId);
  const getSingleItems = await allOrderItems.map((item) => getSingleMenuItem(item.itemId));
  const orderItems = await Promise.all(getSingleItems);
  return { ...order, orderItems };
};

const deleteOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderArray) => {
    const deleteOrderItemsFromOrder = orderArray.map((item) => deleteOrderItem(item.firebaseKey));

    Promise.all(deleteOrderItemsFromOrder).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, deleteOrderRelationship };
