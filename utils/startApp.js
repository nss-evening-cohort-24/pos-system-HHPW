import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from './domBuilder';
import welcome from '../pages/welcome';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  welcome();
  logoutButton();
};

export default startApp;
