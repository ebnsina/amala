import { writable, derived } from 'svelte/store';

export const CART_STORAGE_KEY = 'amala_cart';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

function loadCart(): CartItem[] {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (err) {
        console.error('Failed to parse cart from localStorage', err);
      }
    }
  }
  return [];
}

function createCartStore() {
  const store = writable<CartItem[]>(loadCart());

  store.subscribe((cart) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  });

  return {
    subscribe: store.subscribe,

    addToCart: (item: Omit<CartItem, 'quantity'>) =>
      store.update((cart) => {
        const existing = cart.find((i) => i.id === item.id);
        if (existing) {
          return cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          return [...cart, { ...item, quantity: 1 }];
        }
      }),

    removeFromCart: (id: number) =>
      store.update((cart) => cart.filter((item) => item.id !== id)),

    increment: (id: number) =>
      store.update((cart) =>
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      ),

    decrement: (id: number) =>
      store.update((cart) =>
        cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      ),

    clearCart: () => store.set([])
  };
}

export const cartStore = createCartStore();

export const totalQuantity = derived(cartStore, ($cart) =>
  $cart.reduce((sum, item) => sum + item.quantity, 0)
);

export const totalPrice = derived(cartStore, ($cart) =>
  $cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
);
