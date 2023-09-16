import logoutButton from '../components/logoutButton';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  logoutButton();
  welcome();
};

export default startApp;
