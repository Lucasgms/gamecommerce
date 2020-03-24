export default {
  setList(state, list) {
    state.list = list;
  },
  deleteItem(state, id) {
    state.list = state.list.filter(game => game.id !== id);
  },
  setItem(state, item) {
    state.item = item;
  },
  clearList(state) {
    state.list = [];
  },
  clearItem(state) {
    state.item = {};
  },
  setOrderBy(state, order) {
    state.orderBy = order;
  },
  addCartItem(state, item) {
    if (state.cartItems.indexOf(item) === -1) state.cartItems.push(item);
  },
  removeCardItem(state, index) {
    if (state.cartItems[index]) state.cartItems.splice(index, 1);
  }
};
