import logoutButton from '../components/logoutButton';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';
import getOrderDetails from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

const startApp = () => {
  domBuilder();
  logoutButton();
  welcome();
  getOrderDetails('010207055-5').then((obj) => viewOrderDetails(obj));
};

export default startApp;
