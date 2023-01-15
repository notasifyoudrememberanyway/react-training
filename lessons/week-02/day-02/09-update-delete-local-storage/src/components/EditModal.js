import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const EditModal = ({ handleClose, editItem, show, item }) => {
  const [error, setError] = useState(false);
  const [label, setLabel] = useState(item.label);

  const handleOnSave = (event) => {
    event.preventDefault();

    if (!label) {
      setError(true);
    } else {
      setError(false);
      editItem({ ...item, label });
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="py-2">
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOnSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
