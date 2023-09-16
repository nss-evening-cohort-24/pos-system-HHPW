import renderToDom from '../utils/renderToDom';

const welcome = () => {
  const domstring = `
  <h1 id="greeting">Welcome, User!</h1>
  <button></button>
  `;

  renderToDom('#app', domstring);
};

export default welcome;
