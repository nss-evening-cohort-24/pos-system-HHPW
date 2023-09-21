import client from '../utils/client';
import revenueTotalsObject from '../utils/revenueTotalsObject';

const endpoint = client.databaseURL;

// need to add orderTotal and tipTotal to resolving the data

const getRevenue = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        const getRevenueObj = Object.values(data);
        const revenue = revenueTotalsObject(getRevenueObj);
        resolve(revenue);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getRevenue;
