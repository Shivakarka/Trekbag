const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => console.log("clicked")}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}

export default ItemList;
