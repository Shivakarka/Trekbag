import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm.tsx";
import ButtonGroup from "./ButtonGroup.tsx";

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
