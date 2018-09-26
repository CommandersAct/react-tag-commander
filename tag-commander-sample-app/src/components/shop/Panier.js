import React, { Component } from "react";
import PropTypes from 'prop-types';
import Total from "./Total";
import TcVars from "../TcVars";
import TC_Wrapper from 'react-tag-commander';

class Panier extends Component {
  constructor(props) {
    super(props);
    this.wrapper = TC_Wrapper.getInstance();
  }

  handleAddQuantityItem = (index, event, data) => {
    this.wrapper.captureEvent('add_to_cart', event.currentTarget, data);
    this.props.addQuantityItem(index);
  };

  handleRemoveQuantityItem = (index, event, data) => { 
    this.wrapper.captureEvent('remove_from_cart', event.currentTarget, data);
    this.props.removeQuantityItem(index);
  };

  onClicCheckOut = (event, data) => {
    event.preventDefault();
    this.wrapper.captureEvent('cart_checkout', event.currentTarget, data);
    this.props.checkOut();
  };

  render() {
    const { items, defaultStoreCurrency } = this.props;

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
              onClick={(event) => this.handleRemoveQuantityItem(index, event, item.name)}
            > - </button>
            <span>{item.quantity}</span>
            <button 
              className="sm-button green-500"
              onClick={(event) => this.handleAddQuantityItem(index, event, item.name)}
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
        <TcVars env_template="toto" env_work="titi" />
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
              onClick={(event) =>this.onClicCheckOut(event, items)}
            >
              Buy
            </button>         
          </div>
        </div>
      </div>
    );
  };
};

Panier.propTypes = {
  items: PropTypes.array.isRequired,
  addQuantityItem: PropTypes.func.isRequired,
  removeQuantityItem: PropTypes.func.isRequired,
  checkOut: PropTypes.func.isRequired,
  defaultStoreCurrency: PropTypes.string.isRequired
};


export default Panier;
