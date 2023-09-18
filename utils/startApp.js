import getOrderDetails from '../api/mergedData';
import logoutButton from '../components/logoutButton';
import viewOrderDetails from '../pages/viewOrderDetails';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  logoutButton();
  welcome();

  getOrderDetails('594132184-8').then((obj) => viewOrderDetails(obj));
};

export default startApp;
