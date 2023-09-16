import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const createOrderForm = (obj = {}) => {
  clearDom();

  const domString = `
  <form>
  <div class="mb-3">
    <label class="form-label">Customer Name</label>
    <input type="text" class="form-control" id="customerName" value="${obj.customerName || ''}" required>
  </div>
  <div class="mb-3">
    <label class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customerPhone" value="${obj.customerPhone || ''}" required>
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
  <button type="submit" class="btn btn-primary" id="submit-order-btn">Submit</button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default createOrderForm;
