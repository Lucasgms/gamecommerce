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
              <GameCard :game="item" @click.native="addCartItem(item)" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col class="pa-9" cols="12" sm="4">
        <v-card outlined>
          <v-card-title class="font-weight-bold pb-2 pr-1 d-inline-block">
            Carrinho
          </v-card-title>
          <v-card-subtitle
            v-show="cartItems.length > 0"
            class="d-inline-block pa-0 pl-1 py-4"
          >
            ({{ cartItems.length }}
            {{ cartItems.length === 1 ? "item" : "itens" }})
          </v-card-subtitle>
          <div v-show="cartItems.length === 0" class="cart-content--empty my-8">
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
          <v-list two-line v-show="cartItems.length > 0" class="cart-items">
            <v-hover v-for="(item, index) in cartItems" :key="item.id">
              <template v-slot="{ hover }">
                <v-list-item @click="removeCardItem(index)">
                  <v-list-item-avatar tile>
                    <v-img :src="require(`@/assets/${item.image}`)" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-bold black--text">
                      {{ item.price | number("$ 0.0,") }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action v-show="hover">
                    <v-icon color="blue" small>mdi-close-circle</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-hover>
          </v-list>
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
      "removeCardItem"
    ])
  }
};
</script>
