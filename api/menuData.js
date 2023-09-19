import client from '../utils/client';

const endpoint = client.databaseURL;

const getMenuItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu_items.json`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
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

const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/menu_items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getMenuItems, getSingleMenuItem };
