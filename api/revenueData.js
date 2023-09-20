import client from '../utils/client';

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
        const revenueArray = Object.values(data);
        const revenue = revenueArray.map((item) => Number(item.orderTotal)).reduce((a, b) => a + b, 0);
        resolve(revenue);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getRevenue;
