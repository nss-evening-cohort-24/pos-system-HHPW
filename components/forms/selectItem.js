import { getMenuItems } from '../../api/menuData';
import renderToDOM from '../../utils/renderToDom';

const selectItem = () => {
  let domString = `<label for="item">Select a Menu Item</label>
    <select class="form-control" id="itemId" required>
    <option value="">Select an Item</option>`;

  getMenuItems().then((itemsArray) => {
    itemsArray.forEach((item) => {
      domString += `
          <option 
            value="${item.firebaseKey}">
              ${item.item_name} ${item.item_price.toFixed(2)}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-item', domString);
  });
};

export default selectItem;
