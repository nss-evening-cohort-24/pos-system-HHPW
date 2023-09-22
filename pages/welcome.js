import renderToDom from '../utils/renderToDom';
import logo from '../assets/logo.png';

const welcome = (user) => {
  let domstring = '';
  domstring = `
  <h1 id="greeting">Welcome, ${user.displayName}!</h1>
  <img id="logo" src=${logo} alt="Hip Hop Pizza n Wangs logo"/>
  <div id="welcome-btns">
    <button type="button" class="btn btn-success" id="view-orders-btn">View Open Orders</button>
    <button type="button" class="btn btn-info" id="create-order-btn">Create Order</button>
    <button type="button" class="btn btn-warning" id="view-revenue-btn">View Revenue</button>
  </div>
  `;

  renderToDom('#view-container', domstring);
};

export default welcome;
