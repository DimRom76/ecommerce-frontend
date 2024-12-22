import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "@/types";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
};

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItem = get().items;
      const existingItem = currentItem.find((item) => item.id === data.id);

      if (existingItem) {
        return toast('Item already in cart.');
      }

      set({ items: [...get().items, data] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from the cart.');
    },
    removeAll: () => {
      set({ items: [] });
      toast.success('All items removed from the cart.');
    }
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;