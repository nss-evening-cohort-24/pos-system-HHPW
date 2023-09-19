import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectItem from './selectItem';

const addItemForm = (orderId) => {
  clearDom();
  const domString = `
    <form id="add-item" class="mb-4">
      
      <div class="form-group" id="select-item">
      </div>
    
      <button type="submit" id="submit-add-item--${orderId}" class="btn btn-primary">Add to Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectItem();
};

export default addItemForm;
