import Total from "./Total";
import TcVars from "../TcVars";
import TC_Wrapper from 'react-tag-commander';

function Panier({ items, addQuantityItem, removeQuantityItem, checkOut, defaultStoreCurrency }) {

  const wrapper = TC_Wrapper.getInstance();

  const handleAddQuantityItem = (index, event, data) => {
    wrapper.captureEvent('add_to_cart', event.currentTarget, data);
    addQuantityItem(index);
  };

  const handleRemoveQuantityItem = (index, event, data) => {
    wrapper.captureEvent('remove_from_cart', event.currentTarget, data);
    removeQuantityItem(index);
  };

  const onClicCheckOut = (event, data) => {
    event.preventDefault();
    wrapper.captureEvent('cart_checkout', event.currentTarget, data);
    checkOut();
  };

  const renderItems = items.map((item, index) => (
    item ?
      <li key={item.id}>
        <h5>{item.name}</h5>
        <div className="cart-quantity">
          <div className="grouped">
            <button
              className="sm-button red-500"
              value={item.quantity}
              name="quantity"
              key={item.id}
              onClick={(event) => handleRemoveQuantityItem(index, event, item.name)}
            > - </button>
            <span>{item.quantity}</span>
            <button
              className="sm-button green-500"
              onClick={(event) => handleAddQuantityItem(index, event, item.name)}
            > + </button>
          </div>
          <div className="cart-item-price">
            {item.price * item.quantity} {defaultStoreCurrency}
          </div>
        </div>
      </li> : ''
  ));

  return (
    <div className="right-container">
      <TcVars env_language="fr" env_template="super_shop" />
      <div className="cart tag-50">
        <h3>Cart</h3>
        <ul>
          {renderItems}
        </ul>
        <div className="total-price">
          <span>Total:</span>
          <Total items={items} defaultStoreCurrency={defaultStoreCurrency}/>
          <button
            className="button green-500 buy-button"
            type="submit"
            onClick={(event) => onClicCheckOut(event, items)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Panier;
