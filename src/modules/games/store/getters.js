export default {
  getOrdenatedList(state) {
    return state.list.sort((a, b) =>
      a[state.orderBy] > b[state.orderBy] ? -1 : 1
    );
  }
};
