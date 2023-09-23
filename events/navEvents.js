import { getOrders, searchOrders } from '../api/orderData';
import { emptyOrders, viewAllOrders } from '../pages/orders';
import welcome from '../pages/welcome';
import clearDom from '../utils/clearDom';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view-all-orders-nav')) {
      getOrders(user.uid).then((array) => {
        if (array.length) {
          viewAllOrders(array);
        } else {
          emptyOrders();
        }
      });
    }
    if (e.target.id.includes('home-btn')) {
      clearDom();
      welcome(user);
    }
  });

  document.querySelector('#search-bar').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-bar').value.toLowerCase();
    if (e.keyCode === 13) {
      searchOrders(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            viewAllOrders(search);
          } else {
            emptyOrders();
          }
        });
      document.querySelector('#search-bar').value = '';
    }
  });
};
export default navEvents;
