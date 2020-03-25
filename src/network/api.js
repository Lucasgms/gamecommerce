import axios from "axios";

const api = axios.create({
  // Servidor de mock local.
  // Rode `yarn mock` para subir o servidor
  baseURL: "https://gamecommerce-db.herokuapp.com/"
});

export default api;
