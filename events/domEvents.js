import getOrderDetails from '../api/mergedData';
import createOrderForm from '../components/forms/createOrderForm';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrderDetails);
    }

    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
  });
};

export default domEvents;
