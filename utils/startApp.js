import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from './domBuilder';
import welcome from '../pages/welcome';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  welcome(user);
  navEvents();
  logoutButton();
};

export default startApp;
