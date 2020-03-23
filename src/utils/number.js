import numeral from "numeral";

numeral.register("locale", "pt-BR", {
  delimiters: {
    thousands: ".",
    decimal: ","
  },
  currency: {
    symbol: "R$"
  }
});

numeral.locale("pt-BR");

const number = (value, format = "0,0") => numeral(value).format(format);

export default number;
