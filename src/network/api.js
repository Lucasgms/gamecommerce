import axios from "axios";

const api = axios.create({
  // Servidor de mock local.
  // Rode `yarn mock` para subir o servidor
  baseURL: process.env.SERVER_URL
});

export default api;
