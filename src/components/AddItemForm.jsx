import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText.trim()) {
      alert("Please enter an item name.");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemText.trim(),
      packed: false,
    };
    setItems((items) => [newItem, ...items]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item" className="item-label">
        <strong>Add an item</strong>
      </label>
      <input
        value={itemText}
        ref={inputRef}
        onChange={(e) => setItemText(e.target.value)}
        type="text"
        id="item"
        name="item"
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
