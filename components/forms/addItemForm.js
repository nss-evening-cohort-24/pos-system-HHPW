import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectItem from './selectItem';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="add-item--${obj.firebaseKey}" class="mb-4">
      
      <div class="form-group" id="select-item">
      </div>
    
      <button type="submit" class="btn btn-primary">Add to Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectItem();
};

export default addItemForm;
