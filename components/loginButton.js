import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <h1>Hello! Please log in to continue.</h1>
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
