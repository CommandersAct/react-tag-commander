import React, { Component } from "react";
import PropTypes from 'prop-types';

class PageItem extends Component {
  state = {
    name: "Month Subscription",
    price: 99,
    quantity: 1
  };

  addQuantityPageItem = e => {
    e.preventDefault();
    this.setState({ quantity: this.state.quantity + 1 });
  };

  removeQuantityPageItem = e => {
    e.preventDefault();
    if(this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  handleSubmitItem = e => {
    e.preventDefault();
    this.props.addToItems(this.state);
    this.setState({ quantity: 0 });
  };

  render() {
    const { name, price, quantity } = this.state;
    const { defaultStoreCurrency } = this.props;

    return (
      <div className="left-container">
        <div className="item-name">
          <h2>{name} </h2>
        </div>
        <div className="image-container">
          <img src="Tag-Commander.png" alt="" />
        </div>
        <div className="product-information">
          <h5>Product Information</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint ochandleSubmitItemcaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h5>Quantity</h5>
          <form onSubmit={this.handleSubmitItem}>
            <div className="quantity-handler-container">
            <div className="grouped">
              <button 
                className="sm-button red-500" 
                onClick={this.removeQuantityPageItem}
              > - </button>
              <span>{quantity}</span>
              <button 
                className="sm-button green-500" 
                onClick={this.addQuantityPageItem}
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
  };
};

PageItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  addQuantityPageItem: PropTypes.func,
  removeQuantityPageItem: PropTypes.func,
  handleSubmitItem: PropTypes.func
};

export default PageItem;
