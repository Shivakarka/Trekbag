import { useItemsStore } from "../stores/itemsStore.ts";
import Counter from "./Counter.tsx";
import Logo from "./Logo.tsx";

const Header = () => {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;
