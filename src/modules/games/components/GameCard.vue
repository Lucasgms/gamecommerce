<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card id="game-card" outlined>
        <div class="card-header pa-4 mb-2 grey lighten-2">
          <v-img
            class="align-self-center mx-auto my-6"
            :src="require(`@/assets/${game.image}`)"
            height="180px"
            aspect-ratio="1.7"
            contain
          />
        </div>
        <div class="card-description" v-show="!hover">
          <v-card-subtitle class="subtitle-1 text-center pa-2">
            {{ game.name }}
          </v-card-subtitle>
          <v-card-subtitle
            class="subtitle-2 text-center pa-0 mb-3 blue--text text--lighten-1"
          >
            {{ game.price | number("$ 0.0,") }}
          </v-card-subtitle>
        </div>
        <v-card-actions class="actions pa-3 justify-center" v-show="hover">
          <v-btn color="blue" elevation="0" text large>
            Adicionar ao carrinho
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
export default {
  name: "GameCard",
  props: {
    game: Object
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
