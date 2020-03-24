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
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @click="removeCartItem(item)"
      />
    </v-list>
    <v-container v-show="cartItems.length > 0" class="cart-resume">
      <CartResumeItem label="subtotal" :value="cartSubtotal" />
      <CartResumeItem label="frete" :value="cartShipping" />
      <CartResumeItem label="total" :value="cartTotal" />
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
import CartResumeItem from "../components/CartResumeItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartResumeItem
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
    ...mapMutations("games", ["addCartItem", "removeCartItem"])
  }
};
</script>
