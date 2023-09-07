import { useEffect, useState } from "react";

import PageItem from "./PageItem";
import Panier from "./Panier";
import TC_Wrapper from "react-tag-commander";

const Shop = () => {
  useEffect(() => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcReloadOnly: [
        { ids: '4056', idc: '12' },
        { ids: '4056', idc: '11', options: ["datastorage", "deduplication"] }
      ]})
  }, []);

  const [items, setItems] = useState([{ id: 0, name: "TagCommander", price: 20, quantity: 1 }]);
  const defaultStoreCurrency = "€";
  const [isMsgDisplayed, setIsMsgDisplayed] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  function addToItems(item) {

    item.id = 'item_' + currentId;
    setCurrentId(currentId + 1);

    const itemsName = items.map((item) => {
      return item.name;
    });

    if (!itemsName.includes(item.name) && item.quantity) {
      setItems([...items, item]);
    } else {
      // update quantity
      const updatedItems = items.map((elem) => {
        if (item.name === elem.name) {
          elem.quantity += item.quantity;
        }
        return elem;
      });
      setItems(updatedItems);
    }

  }

  function checkOut() {
    setItems([]);
    setIsMsgDisplayed(true);
  }

  function addQuantityItem(index) {
    const newItems = [...items];
    if (newItems[index].quantity) {
      newItems[index].quantity++;
      setItems(newItems);
    }
  }

  function removeQuantityItem(index) {
    let newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems.filter(e => e.quantity > 0));
  }

  return (
    <main>
      <div className={ isMsgDisplayed ? "msg-card-displayed" : "msg-card-not-displayed" }>thanks you for your
        purchase
      </div>
      <div>
        <h1 className="main-eshop-title">E-commerce page</h1>
        <div className="article-container">
          <PageItem
            addToItems={ addToItems }
            defaultStoreCurrency={ defaultStoreCurrency }
          />
          <Panier
            items={ items }
            addQuantityItem={ addQuantityItem }
            removeQuantityItem={ removeQuantityItem }
            defaultStoreCurrency={ defaultStoreCurrency }
            checkOut={ checkOut }
          />
        </div>
      </div>
    </main>
  );
};

export default Shop;
