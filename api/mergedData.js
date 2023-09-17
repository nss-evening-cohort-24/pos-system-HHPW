import { getSingleOrder } from './orderData';
import { getOrderItems, getSingleOrderItem } from './orderItemsData';

const getOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const allOrderItems = await getOrderItems(firebaseKey);
  const getSingleItems = await allOrderItems.map((item) => getSingleOrderItem(item.itemId));
  const orderItems = await Promise.all(getSingleItems);
  return { ...order, orderItems };
};

export default getOrderDetails;
