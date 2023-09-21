import renderToDom from '../utils/renderToDom';

const welcome = (user) => {
  let domstring = '';
  domstring = `
  <h1 id="greeting">Welcome, ${user.displayName}!</h1>
  <button type="button" class="btn btn-success" id="view-orders-btn">View Orders</button>
  <button type="button" class="btn btn-info" id="create-order-btn">Create Order</button>
  <button type="button" class="btn btn-warning" id="view-revenue-btn">View Revenue</button>
  `;

  renderToDom('#view-container', domstring);
};

export default welcome;
