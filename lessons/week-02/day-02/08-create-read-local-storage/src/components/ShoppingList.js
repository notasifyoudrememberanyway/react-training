export const ShoppingList = ({ items }) => {
  return (
    <section className="my-4">
      {items.length === 0 && (
        <div className="alert alert-primary" role="alert">
          You have no items in your shopping list. Please use the form above to
          add items to your shopping list.
        </div>
      )}

      {items.length !== 0 && (
        <div className="bg-light">
          <h2 className="text-center p-4">Shopping List</h2>
          <ul className="list-group p-4">
            {items.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
