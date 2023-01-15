import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Banner } from "./components/Banner";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";

const getFromLocalStorage = (key, defaultValue) => {
  const dataFromLS = localStorage.getItem(key);

  if (!dataFromLS) {
    return defaultValue;
  }

  return JSON.parse(dataFromLS);
};

export const App = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    if (!items) {
      const itemsFromLS = getFromLocalStorage("shoppingItems", []);
      setItems(itemsFromLS);
    }
  }, [items]);

  const handleAddItem = (shoppingItem) => {
    const itemsFromLS = getFromLocalStorage("shoppingItems", []);
    const newItems = [...itemsFromLS, { label: shoppingItem, id: uuidv4() }];

    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    setItems(newItems);
  };

  return (
    <main className="container">
      <Banner />
      <ShoppingListForm handleAddItem={handleAddItem} />
      {items && <ShoppingList items={items} />}
    </main>
  );
};
