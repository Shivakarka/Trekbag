import Select from "react-select";
import EmptyView from "./EmptyView.tsx";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore.ts";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return +b.packed - +a.packed;
        }

        if (sortBy === "unpacked") {
          return +a.packed - +b.packed;
        }

        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option!.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
};

type ItemProps = {
  item: {
    id: number;
    name: string;
    packed: boolean;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ItemList;
