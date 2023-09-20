import renderToDom from '../utils/renderToDom';

const viewRevenue = () => {
  let domString = '';
  domString += `
  <div id="view-revenue-info">
    <h1>Revenue</h1>
    <h1>Total Revenue: $$$ </h1>
    <div id="revenue-details">
      <h3>Revenue Details</h3>
      <p>Total Tips: ___</p>
      <p>Total Call-In Orders: ___</p>
      <p>Total Walk-In Orders: ___</p>
    </div>
      <h3>Payment Types</h3>
      <p>Cash: ___</p>
      <p>Credit: ___</p>
      <p>Mobile: ___</p>
    <div>
    </div>
  </div>
  `;
  renderToDom('#view-container', domString);
};

export default viewRevenue;
