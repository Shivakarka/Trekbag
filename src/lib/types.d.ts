export interface Item {
  id: number;
  name: string;
  packed: boolean;
}

export interface ItemState {
  items: Item[];
  addItem: (newItemText: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
}
