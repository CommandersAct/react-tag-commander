import { useState } from 'react';
import logo from '../../assets/Tag-Commander.png'; // Tell webpack this JS file uses this image

function PageItem({ addToItems, defaultStoreCurrency }) {
  const [item, setItem] = useState({
    name: "Month Subscription",
    price: 99,
    quantity: 1
  });


  const addQuantityPageItem = (e) => {
    e.preventDefault();
    setItem((prevItem) => ({ ...prevItem, quantity: prevItem.quantity + 1 }));
  };

  const removeQuantityPageItem = (e) => {
    e.preventDefault();
    if(item.quantity > 0) {
      setItem((prevItem) => ({ ...prevItem, quantity: prevItem.quantity - 1 }));
    }
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    addToItems(item);
    setItem((prevItem) => ({ ...prevItem, quantity: 0 }));
  };

  const { name, price, quantity } = item;

  return (
    <div className="left-container">
      <div className="item-name">
        <h2>{name} </h2>
      </div>
      <div className="image-container">
        <img src={logo} alt="" />
      </div>
      <div className="product-information">
        <h5>Product Information</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h5>Quantity</h5>
        <form onSubmit={handleSubmitItem}>
          <div className="quantity-handler-container">
            <div className="grouped">
              <button
                className="sm-button red-500"
                onClick={removeQuantityPageItem}
              > - </button>
              <span>{quantity}</span>
              <button
                className="sm-button green-500"
                onClick={addQuantityPageItem}
              > + </button>
            </div>
            <span className="price">
              {price * quantity}{" "}
              {defaultStoreCurrency}{" "}
            </span>
            <button
              type="submit"
              className="button blue-500 cart-button"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PageItem;
