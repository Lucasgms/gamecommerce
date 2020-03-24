<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-container>
          <v-row>
            <v-col class="pb-0" cols="12" md="6">
              <h1>Games</h1>
            </v-col>
            <v-col cols="12" md="4" offset-md="2">
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
              <GameCard
                :game="item"
                :in-cart="gameIsInCart(item)"
                @click.native="toggleInCart(item, gameIsInCart(item))"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col class="pa-9" cols="12" md="4">
        <Cart />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import GameCard from "../components/GameCard.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "GamesIndex",
  components: {
    GameCard,
    Cart
  },
  mounted() {
    this.getList();
  },
  beforeDestroy() {
    this.clearList();
  },
  computed: {
    ...mapState("games", ["ordenationOptions", "orderBy", "cartItems"]),
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
    ...mapMutations("games", [
      "clearList",
      "setOrderBy",
      "addCartItem",
      "removeCartItem"
    ]),
    gameIsInCart(game) {
      return this.cartItems.indexOf(game) !== -1;
    },
    toggleInCart(game, isInCart) {
      if (isInCart) {
        this.removeCartItem(game);
      } else {
        this.addCartItem(game);
      }
    }
  }
};
</script>
