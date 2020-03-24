<template>
  <v-container>
    <v-row class="mb-8">
      <v-col cols="12" sm="6">
        <h1>Games</h1>
      </v-col>
      <v-col cols="12" sm="3" offset-sm="3">
        <v-select :items="ordenationOptions" :full-width="false" outlined />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in list" :key="item.id" cols="12" sm="4">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card id="game-card" outlined>
              <div class="card-header pa-4 mb-2 grey lighten-2">
                <v-img
                  class="align-self-center mx-auto my-6"
                  :src="require(`@/assets/${item.image}`)"
                  height="180px"
                  aspect-ratio="1.7"
                  contain
                />
              </div>
              <div class="card-description" v-show="!hover">
                <v-card-subtitle class="subtitle-1 text-center pa-2">
                  {{ item.name }}
                </v-card-subtitle>
                <v-card-subtitle
                  class="subtitle-2 text-center pa-0 mb-3 blue--text text--lighten-1"
                >
                  {{ item.price | number("$ 0.0,") }}
                </v-card-subtitle>
              </div>
              <v-card-actions
                class="actions pa-3 justify-center"
                v-show="hover"
              >
                <v-btn color="blue" elevation="0" text large>
                  Adicionar ao carrinho
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "GamesIndex",
  mounted() {
    this.getList();
  },
  beforeDestroy() {
    this.clearList();
  },
  computed: {
    ...mapState("games", ["ordenationOptions"]),
    ...mapGetters("games", { list: "getOrdenatedList" })
  },
  methods: {
    ...mapActions("games", ["getList", "deleteItem"]),
    ...mapMutations("games", ["clearList"])
  }
};
</script>

<style>
#game-card {
  border: none;
  cursor: pointer;
}

#game-card .card-description,
#game-card .actions {
  height: 75px;
}
</style>
