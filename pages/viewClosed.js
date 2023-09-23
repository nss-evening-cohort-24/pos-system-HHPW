import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewClosedOrders = (array) => {
  clearDom();
  const closedOrders = array.filter((item) => item.orderStatus === 'closed');
  let domString = '';
  if (closedOrders.length < 1) {
    domString += '<p>No Closed Orders Found</p>';
  } else {
    closedOrders.forEach((obj) => {
      domString += `<div class="card closed" id="order-card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.customerName}</h5>
        <ul>Order Status: ${obj.orderStatus}</ul>
        <ul>${obj.phoneNumber}</ul>
        <ul>${obj.email}</ul>
        <ul>${obj.orderType}</ul>
        <button type="button" id="view-closed-details--${obj.firebaseKey}" class="btn btn-outline-light">View</button>
      </div>
    </div>
      `;
    });
  }
  renderToDom('#card-container', domString);
};

const viewClosedDetails = (obj) => {
  clearDom();
  let domString = '';

  obj.orderItems.forEach((item) => {
    domString += `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${item.item_name}</h5>
        <p class="card-text bold">${item.item_price.toFixed(2)}</p>
    </div>
  </div>`;
  });

  renderToDom('#view-container', domString);
};

export { viewClosedOrders, viewClosedDetails };
