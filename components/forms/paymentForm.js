import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const paymentForm = (obj) => {
  clearDom();
  const total = Number(obj.orderItems.reduce((prev, next) => prev + next.item_price, 0));
  let domString = '';
  domString += `
  <form id='payment-form--${obj.firebaseKey}--${total}--${obj.orderType}'>
    <h1 id="orderTotal">Total: $${total}</h1>
    <select class="form-select" id="payment-type" aria-label="Payment Type" required>
      <option selected>Select A Payment Type</option>
      <option value="cash">Cash</option>
      <option value="credit">Credit</option>
      <option value="debit">Debit</option>
      <option value="check">Check</option>
      <option value="mobile">Mobile</option>
    </select>
    <div class="mb-3">
      <label for="tip-amount" class="form-label">Tip Amount</label>
      <input type="number" name="currency" class="form-control" id="tip-amount" aria-describedby="emailHelp" required>
    </div>
    <button type="submit" class="btn btn-primary" id="payment-form-submit">Close Order</button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default paymentForm;
