import api from "@/network/api";

class GameService {
  getAll(...rest) {
    return api.get("games", ...rest);
  }

  getById(id, ...rest) {
    return api.get(`games/${id}`, ...rest);
  }

  deleteById(id, ...rest) {
    return api.delete(`games/${id}`, ...rest);
  }

  create(game, ...rest) {
    return api.post("games", game, ...rest);
  }

  update(id, game, ...rest) {
    // ".patch()" pq o json-server é semântico.
    // Na vida real isso pode ser ".put()" sem problemas.
    return api.patch(`games/${id}`, game, ...rest);
  }
}

export default new GameService();
