import router from "@/router";
import GameService from "../services/GameService";

export default {
  async getList({ commit }) {
    const response = await GameService.getAll();
    commit("setList", response.data);
  },
  async getItem({ commit }, id) {
    const response = await GameService.getById(id);
    commit("setItem", response.data);
  },
  async getRouteItem({ dispatch }) {
    const { id } = router.currentRoute.params;
    if (!id) return;
    await dispatch("getItem", id);
  },
  async deleteItem({ commit }, { id, name }) {
    // eslint-disable-next-line
    if (!window.confirm(`Deseja deletar "${name}"?`)) return;

    await GameService.deleteById(id);
    commit("deleteItem", id);
  },
  async postItem(_params, item) {
    const response = await GameService.create(item);
    router.push(`/users/${response.data.id}`);
  },
  async putItem(_params, { id, values }) {
    await GameService.update(id, values);
    router.push("/users");
  }
};
