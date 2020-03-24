<template>
  <v-container>
    <v-row class="mb-8">
      <v-col cols="12" sm="6">
        <h1>Games</h1>
      </v-col>
      <v-col cols="12" sm="3" offset-sm="3">
        <v-select
          :items="ordenationOptions"
          :full-width="false"
          v-model="listOrder"
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in list" :key="item.id" cols="12" sm="4">
        <GameCard :game="item" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import GameCard from "../components/GameCard.vue";

export default {
  name: "GamesIndex",
  components: {
    GameCard
  },
  mounted() {
    this.getList();
  },
  beforeDestroy() {
    this.clearList();
  },
  computed: {
    ...mapState("games", ["ordenationOptions", "orderBy"]),
    ...mapGetters("games", { list: "getOrdenatedList" }),
    listOrder: {
      get() {
        return this.orderBy;
      },
      set(order) {
        this.setOrderBy(order);
      }
    }
  },
  methods: {
    ...mapActions("games", ["getList", "deleteItem"]),
    ...mapMutations("games", ["clearList", "setOrderBy"])
  }
};
</script>
