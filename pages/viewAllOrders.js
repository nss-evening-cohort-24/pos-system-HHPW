import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyOrders = () => {
  const domString = '<h1> There are no orders! </h1>';
  renderToDom('#view-container', domString);
};

const viewAllOrders = (array) => {
  clearDom();
  let domString = '';
  if (array.length < 1) {
    domString += '<p>No Open Orders Found</p>';
  } else {
    array.forEach((obj) => {
      domString += `
        <div class="card" id="order-card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${obj.customerName}</h5>
            <ul>Order Status: ${obj.orderStatus}</ul>
            <ul>${obj.phoneNumber}</ul>
            <ul>${obj.email}</ul>
            <ul>${obj.orderType}</ul>
            <button type="button" id="view-details-btn--${obj.firebaseKey}" class="btn btn-outline-dark">View</button>
            <button type="button" id="edit-details-btn--${obj.firebaseKey}" class="btn btn-outline-dark">Edit</button>
            <button type="button" id="delete-order-btn--${obj.firebaseKey}" class="btn btn-outline-dark">Delete</button>
          </div>
        </div>
      `;
    });
  }
  renderToDom('#card-container', domString);
};

export { emptyOrders, viewAllOrders };
