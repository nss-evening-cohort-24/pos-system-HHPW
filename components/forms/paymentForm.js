import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const paymentForm = (orderId) => {
  clearDom();

  let domString = '';
  domString += `
  <form id='payment-form--${orderId}'>
    <select class="form-select" id="payment-close-order" aria-label="Payment Type" required>
      <option selected>Select A Payment Type</option>
      <option value="cash">Cash</option>
      <option value="credit">Credit</option>
      <option value="mobile">Mobile</option>
    </select>
    <div class="mb-3">
      <label for="close-order-tip-input" class="form-label">Tip Amount</label>
      <input type="number" name="currency" class="form-control" id="close-order-tip-input" aria-describedby="emailHelp" required>
    </div>
    <button type="submit" class="btn btn-primary" id="close-order-form--${orderId}">Close Order</button>
  </form>
  `;

  renderToDom('#view-container', domString);
};

export default paymentForm;
