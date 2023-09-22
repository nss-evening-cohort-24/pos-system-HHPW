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
      domString += `<div class="card" id="order-card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.customerName}</h5>
        <ul>Order Status: ${obj.orderStatus}</ul>
        <ul>${obj.phoneNumber}</ul>
        <ul>${obj.email}</ul>
        <ul>${obj.orderType}</ul>
      </div>
    </div>
      `;
    });
  }
  renderToDom('#card-container', domString);
};

export default viewClosedOrders;
