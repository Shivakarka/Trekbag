import { useRef, useState } from "react";
import Button from "./Button.tsx";

type AddItemFormProps = {
  onAddItem: (itemText: string) => void;
};

const AddItemForm = ({ onAddItem }: AddItemFormProps) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemText.trim()) {
      alert("Please enter an item name.");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    onAddItem(itemText);
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
