import React, { Component } from "react";
import PageItem from "./PageItem";
import Panier from "./Panier";

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ id: 0, name: "TagCommander", price: 20, quantity: 1 }],
      defaultStoreCurrency: "€",
      isMsgDisplayed: false,
    };
    this.currentId = 1;
  }

  addToItems = (item) => {
    item.id = "item_" + this.currentId++;

    let itemsName = this.state.items.map((item) => {
      return item.name;
    });

    let items = [];

    if (itemsName.indexOf(item.name) < 0 && item.quantity) {
      items = [...this.state.items, item];
      this.setState({ items: items });
    } else {
      // update quantity
      this.state.items.forEach((elem) => {
        if (item.name === elem.name) {
          elem.quantity += item.quantity;
        }

        items.push(elem);
      });
    }

    this.setState({ items: items });
  };

  checkOut = () => {
    this.setState({
      items: [],
      isMsgDisplayed: true,
    });
  };

  addQuantityItem = (index) => {
    let newItems = this.state.items;
    if (newItems[index].quantity) {
      newItems[index].quantity++;
      this.setState({ items: newItems });
    }
  };

  removeQuantityItem = (index) => {
    let newItems = this.state.items;
    if (newItems[index].quantity > 1) {
      newItems[index].quantity--;
    } else {
      delete newItems[index];
    }
    this.setState({ items: newItems });
  };

  render() {
    const { items, isMsgDisplayed, defaultStoreCurrency } = this.state;

    return (
      <main>
        <div
          className={
            isMsgDisplayed ? "msg-card-displayed" : "msg-card-not-displayed"
          }
        >
          thanks you for your purchase
        </div>
        <div>
          <h1 className="main-eshop-title">E-commerce page</h1>
          <div className="article-container">
            <PageItem
              addToItems={this.addToItems}
              defaultStoreCurrency={defaultStoreCurrency}
            />
            <Panier
              items={items}
              addQuantityItem={this.addQuantityItem}
              removeQuantityItem={this.removeQuantityItem}
              defaultStoreCurrency={defaultStoreCurrency}
              checkOut={this.checkOut}
            />
          </div>
        </div>
      </main>
    );
  }
}
