import { getSingleOrder } from './orderData';
import getOrderItems from './orderItemsData';

const getOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const orderItems = await getOrderItems(order.firebaseKey);
  return { ...order, orderItems };
};

export default getOrderDetails;
