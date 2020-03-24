<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-list-item @click="handleClick">
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
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: Object
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
