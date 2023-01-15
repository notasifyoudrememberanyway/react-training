import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Banner } from "./components/Banner";
import { EditModal } from "./components/EditModal";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [items, setItems] = useState();
  const [itemToEdit, setItemToEdit] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!items) {
      const itemsFromLS = getFromLocalStorage("shoppingItems", []);
      setItems(itemsFromLS);
    }
  }, [items]);

  const addItem = (label) => {
    const itemsFromLS = getFromLocalStorage("shoppingItems", []);
    const newItems = [...itemsFromLS, { label, id: uuidv4() }];

    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    setItems(newItems);
  };

  const clearList = () => {
    localStorage.removeItem("shoppingItems");
    setItems([]);
  };

  const removeItem = (item) => {
    const itemsFromLS = getFromLocalStorage("shoppingItems", []);

    const newItems = itemsFromLS.filter(
      (itemFromLS) => itemFromLS.id !== item.id
    );

    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    setItems(newItems);
  };

  const editItem = (editedItem) => {
    const newItems = items.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      }

      return item;
    });

    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    setItems(newItems);
  };

  const handleOpen = (item) => {
    setItemToEdit(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setItemToEdit();
    setShowModal(false);
  };

  return (
    <main className="container">
      <Banner />
      <ShoppingListForm addItem={addItem} />
      {items && (
        <ShoppingList
          items={items}
          clearList={clearList}
          removeItem={removeItem}
          handleOpen={handleOpen}
        />
      )}
      {itemToEdit && (
        <EditModal
          show={showModal}
          item={itemToEdit}
          editItem={editItem}
          handleClose={handleClose}
        />
      )}
    </main>
  );
};
