import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';

const startApp = (user) => {
  domBuilder();
  logoutButton();
  welcome();
  domEvents();
  formEvents(user);
};

export default startApp;
