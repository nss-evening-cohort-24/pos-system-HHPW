import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import welcome from '../pages/welcome';
import domBuilder from './domBuilder';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  logoutButton();
  welcome();
  domEvents();
  formEvents();
};

export default startApp;
