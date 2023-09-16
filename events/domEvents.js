import getOrderDetails from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrderDetails);
    }
  });
};

export default domEvents;
