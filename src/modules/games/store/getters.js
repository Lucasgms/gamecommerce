export default {
  getOrdenatedList(state) {
    return state.list.sort((a, b) => {
      const [orderAttribute, type] = state.orderBy.split(":");
      let sortOrder = a[orderAttribute] > b[orderAttribute] ? -1 : 1;

      if (type && type === "ascendent") sortOrder *= -1;

      return sortOrder;
    });
  },
  getCartSubtotal(state) {
    if (state.cartItems.length) {
      return state.cartItems
        .map(item => item.price)
        .reduce((total, current) => {
          return total + current;
        });
    }

    return 0;
  },
  getCartShipping(state, getters) {
    return getters.getCartSubtotal >= 250.0 ? 0 : state.cartItems.length * 10;
  }
};
