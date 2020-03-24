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
      text: "Preço (Maior - Menor)",
      value: "price"
    },
    {
      text: "Preço (Menor - Maior)",
      value: "price:ascendent"
    },
    {
      text: "Ordem Alfabética (A - Z)",
      value: "name:ascendent"
    },
    {
      text: "Ordem Alfabética (Z - A)",
      value: "name"
    }
  ]
});
