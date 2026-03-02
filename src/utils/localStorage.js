export const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  } catch (error) {
    console.error("Could not load cart", error);
    return undefined;
  }
};

export const saveCartToStorage = (cartState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartState));
  } catch (error) {
    console.error("Could not save cart", error);
  }
};