import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" id="home-btn" href="#">HipHop Pizza N Wings</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="view-all-orders-nav">
                View Open Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a id="view-closed-orders" class="nav-link" href="#">View Closed Orders</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search-order-bar"
              placeholder="Search Orders"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div><button id="logout-button"></button></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
