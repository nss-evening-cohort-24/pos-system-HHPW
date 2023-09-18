import getOrderDetails from '../api/mergedData';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then((data) => {
        viewOrderDetails(data);
      });
    }
  });
};

export default domEvents;
