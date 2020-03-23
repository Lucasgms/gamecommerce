<template>
  <v-container>
    <v-row class="mb-8">
      <v-col cols="12" sm="6">
        <h1>Games</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in list" :key="item.id" cols="12" sm="4">
        <v-card outlined>
          <div class="card-header pa-4 mb-2 grey lighten-2">
            <v-img
              class="align-self-center mx-auto my-6"
              :src="require(`@/assets/${item.image}`)"
              height="180px"
              aspect-ratio="1.7"
              contain
            />
          </div>
          <v-card-subtitle class="subtitle-1 text-center pa-1">
            {{ item.name }}
          </v-card-subtitle>
          <v-card-subtitle
            class="subtitle-2 text-center pa-0 mb-4 blue--text text--lighten-1"
          >
            {{ item.price }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "GamesIndex",
  mounted() {
    this.getList();
  },
  beforeDestroy() {
    this.clearList();
  },
  computed: {
    ...mapState("games", ["list"])
  },
  methods: {
    ...mapActions("games", ["getList", "deleteItem"]),
    ...mapMutations("games", ["clearList"])
  }
};
</script>
