import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items.json?orderBy="orderId"&equalTo="${orderId}"`, {
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

const deleteOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
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

const createOrderItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrderItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order_items/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getOrderItems,
  getSingleOrderItem,
  deleteOrderItem,
  updateOrderItem,
  createOrderItem
};
