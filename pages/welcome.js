import renderToDom from '../utils/renderToDom';

const welcome = () => {
  const domstring = `
  <h1 id="greeting">Welcome, User!</h1>
  <button type="button" class="btn btn-success" id="view-orders">View Orders</button>
  <button type="button" class="btn btn-info" id="create-order">Create Order</button>
  <button type="button" class="btn btn-warning" id="view-revenue">View Revenue</button>
  `;

  renderToDom('#view-container', domstring);
};

export default welcome;
