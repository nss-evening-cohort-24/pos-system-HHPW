import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const createOrderForm = (obj = {}) => {
  clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'submit-order'}">
  <div class="mb-3">
    <label class="form-label">Customer Name</label>
    <input type="text" class="form-control" id="customerName" value="${obj.customerName || ''}" required>
  </div>
  <div class="mb-3">
    <label class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customerPhone" value="${obj.phoneNumber || ''}" required>
  </div>
  <div class="mb-3">
    <label class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="customerEmail" value="${obj.email || ''}" required>
  </div>
  <div class="input-group mb-3">
  <label class="form-label">Order Type</label>
  <select class="form-select" id="orderType" ${obj.orderType || ''}>
    <option value="phone">Phone</option>
    <option value="in-person">In-Person</option>
  </select>
  </div>
  <button type="submit" class="btn btn-dark">${obj.firebaseKey ? 'Update' : 'Start Order'}</button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default createOrderForm;
