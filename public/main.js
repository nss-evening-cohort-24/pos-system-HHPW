import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Hello, please sign in</h1>
  `;
  ViewDirectorBasedOnUserAuthStatus();
};

init();
