import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewRevenue = (obj = {}) => {
  clearDom();
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let domString = '';
  domString += `
  <div id="view-revenue-info">
    <h1>Total Revenue: ${USDollar.format(obj.totalRevenue)}</h1>
    <div id="revenue-details">
      <h3>Revenue Details</h3>
      <p>Total Tips: ${USDollar.format(obj.totalTips)}</p>
      <p>Total Phone Orders: ${obj.phoneOrders}</p>
      <p>Total In-Person Orders: ${obj.inPersonOrders}</p>
    </div>
      <h3>Payment Types</h3>
      <p>Cash: ${obj.cashPayment}</p>
      <p>Check: ${obj.checkPayment}</p>
      <p>Credit: ${obj.creditPayment}</p>
      <p>Debit: ${obj.debitPayment}</p>
      <p>Mobile: ${obj.mobilePayment}</p>
    <div>
    </div>
  </div>
  `;
  renderToDom('#view-container', domString);
};

export default viewRevenue;
