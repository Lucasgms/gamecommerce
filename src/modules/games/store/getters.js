export default {
  getOrdenatedList(state) {
    return state.list.sort((a, b) => {
      const [orderAttribute, type] = state.orderBy.split(":");
      let sortOrder = a[orderAttribute] > b[orderAttribute] ? -1 : 1;

      if (type && type === "ascendent") sortOrder *= -1;

      return sortOrder;
    });
  }
};
