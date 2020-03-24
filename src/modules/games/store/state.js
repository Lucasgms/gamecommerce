export default () => ({
  list: [],
  item: {},
  orderBy: "score",
  ordenationOptions: [
    {
      text: "Popularidade",
      value: "score"
    },
    {
      text: "Preço",
      value: "price"
    },
    {
      text: "Ordem Alfabética",
      value: "name"
    }
  ]
});
