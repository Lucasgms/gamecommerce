<template>
  <v-card outlined>
    <v-card-title class="font-weight-bold pb-2 pr-1 d-inline-block">
      Carrinho
    </v-card-title>
    <v-card-subtitle
      v-if="cartItems.length > 0"
      class="d-inline-block pa-0 pl-1 py-4"
    >
      ({{ cartItems.length }} {{ cartItems.length === 1 ? "item" : "itens" }})
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
      <CartItem
        v-for="(item, index) in cartItems"
        :key="item.id"
        :item="item"
        @click="removeCardItem(index)"
      />
    </v-list>
    <v-container v-show="cartItems.length > 0" class="cart-resume">
      <v-row class="align-center">
        <v-col cols="12" sm="6">
          <v-card-text class="text-left py-0 px-2 font-weight-light subtitle-1">
            subtotal
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-text class="text-right py-0 px-2 font-weight-bold subtitle-1">
            {{ cartSubtotal | number("$ 0.0,") }}
          </v-card-text>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" sm="6">
          <v-card-text class="text-left py-0 px-2 font-weight-light subtitle-1">
            frete
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-text class="text-right py-0 px-2 font-weight-bold subtitle-1">
            {{ cartShipping | number("$ 0.0,") }}
          </v-card-text>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" sm="6">
          <v-card-text class="text-left py-0 px-2 font-weight-light subtitle-1">
            total
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-text class="text-right py-0 px-2 font-weight-bold title">
            {{ cartTotal | number("$ 0.0,") }}
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions class="justify-strech">
        <v-btn class="white--text" color="blue" block large>
          Finalizar compra
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  computed: {
    ...mapState("games", ["cartItems"]),
    ...mapGetters("games", {
      cartSubtotal: "getCartSubtotal",
      cartShipping: "getCartShipping",
      cartTotal: "getCartTotal"
    })
  },
  methods: {
    ...mapMutations("games", ["addCartItem", "removeCardItem"])
  }
};
</script>
