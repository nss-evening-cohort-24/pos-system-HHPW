import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrderDetails = (obj) => {
  clearDom();
  let domstring = '';
  domstring += `
  <h1 id="runningTotal">Running Total$$</h1>
  `;

  obj.orderItems.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
          <p class="card-text bold">${item.price}</p>
          <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
  });

  domstring += `
    <button type="button" class="btn btn-primary">Add Item</button>
    <button type="button" class="btn btn-secondary">Go to Payment</button>
    `;
  renderToDom('#view', domstring);
};

export default viewOrderDetails;
