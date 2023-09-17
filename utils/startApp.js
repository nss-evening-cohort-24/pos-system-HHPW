import { getOrderItems } from '../api/orderItemsData';
import logoutButton from '../components/logoutButton';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  logoutButton();
  welcome();
  console.warn(getOrderItems('010207055-5'));
};

export default startApp;
