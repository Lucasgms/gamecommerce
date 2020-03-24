<template>
  <v-row class="align-center">
    <v-col cols="12" sm="6">
      <v-card-text class="text-left py-0 px-2 font-weight-light subtitle-1">
        {{ label }}
      </v-card-text>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card-text class="text-right py-0 px-2 font-weight-bold subtitle-1">
        {{ value | number("$ 0.0,") }}
      </v-card-text>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "CartResumeItem",
  props: {
    label: String,
    value: Number
  }
};
</script>
