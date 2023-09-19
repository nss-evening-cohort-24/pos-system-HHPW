import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items.json?orderBy="orderId"&equalTo"${firebaseKey}"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json)
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    }).catch(reject);
});

const deleteOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getOrderItems, deleteOrderItem };
