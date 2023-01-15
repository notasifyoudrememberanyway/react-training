import { useState } from "react";

export const ShoppingListForm = ({ addItem }) => {
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!label) {
      setError(true);
    } else {
      setError(false);
      addItem(label);
      setLabel("");
    }
  };

  return (
    <section className="bg-light text-dark p-4 my-4">
      <h2 className="text-center">Shopping List Form</h2>
      <hr />
      <form className="py-2" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">
            Shopping Item
          </label>
          <input
            className="form-control"
            id="item"
            placeholder="Enter a shopping item..."
            value={label}
            onChange={({ target }) => setLabel(target.value)}
          />
          {error && (
            <div className="form-text text-danger">
              Please enter a valid shopping item.
            </div>
          )}
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-success" type="submit">
            Add to list
          </button>
        </div>
      </form>
    </section>
  );
};
