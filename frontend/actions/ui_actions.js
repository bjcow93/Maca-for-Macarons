export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';


export const openCart = () => {
  return {
    type: OPEN_CART,
    open: true
  };
};

export const closeCart = () => {
  return {
    type: CLOSE_CART,
    open: false
  };
};