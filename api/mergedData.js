import { getSingleOrder } from './orderData';
import { getOrderItems } from './orderItemsData';
import { getSingleMenuItem } from './menuData';

const getOrderDetails = async (orderId) => {
  const order = await getSingleOrder(orderId);
  const allOrderItems = await getOrderItems(orderId);
  const getSingleItems = await allOrderItems.map((item) => getSingleMenuItem(item.itemId));
  const orderItems = await Promise.all(getSingleItems);
  return { ...order, orderItems };
};

export default getOrderDetails;
