import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from './domBuilder';
import welcome from '../pages/welcome';

const startApp = () => {
  domBuilder();
  navBar();
  welcome();
  logoutButton();
};

export default startApp;
