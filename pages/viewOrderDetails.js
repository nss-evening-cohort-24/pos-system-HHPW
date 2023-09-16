import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrderDetails = (obj) => {
  clearDom();
  let domstring = '';
  domstring += `
  <h1 id="runningTotal">Running Total$$</h1>
  <button type="button" class="btn btn-primary">Add Item</button>
  <button type="button" class="btn btn-secondary">Go to Payment</button>
  `
}
