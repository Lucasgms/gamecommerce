<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8">
        <v-container>
          <v-row class="mb-8">
            <v-col cols="12" sm="6">
              <h1>Games</h1>
            </v-col>
            <v-col cols="12" sm="4" offset-sm="2">
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
      </v-col>
      <v-col class="pa-9" cols="12" sm="4">
        <v-card outlined>
          <v-card-title class="font-weight-bold">
            Carrinho
          </v-card-title>
          <div class="card-content--empty my-8">
            <v-img
              class="align-self-center mx-auto"
              src="@/assets/cart-icon.svg"
              width="80px"
            />
            <v-card-subtitle class="text-center">
              Até o momento,<br />
              o seu carrinho está vazio
            </v-card-subtitle>
          </div>
        </v-card>
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
