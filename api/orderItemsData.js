import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items.json?orderBy="orderId"&equalTo"${orderId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export { getOrderItems, getSingleOrderItem };
