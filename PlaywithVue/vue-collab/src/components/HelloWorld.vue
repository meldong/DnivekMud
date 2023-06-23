<template>
  <div class="helloworld pa-6">
    <h1>Hello World</h1>
    <!-- text & color -->
    <p class="indigo lighten-4 blue--text text--darken-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod possimus
      optio laudantium incidunt eum ad minima praesentium neque iusto illo,
      corporis pariatur assumenda nemo recusandae velit atque perspiciatis
      provident beatae esse quibusdam in consequuntur eius? Sint eius, ipsa
      dolore quod sed ut ea dolorum sapiente nihil blanditiis quasi, velit a.
    </p>
    <!-- button & icon -->
    <v-btn>click me</v-btn>
    <v-btn class="pink white--text ml-2">click me</v-btn>
    <v-btn depressed color="pink" class="ml-2">click me</v-btn>
    <v-btn plain outlined color="pink" class="ml-2">click me</v-btn>
    <v-btn depressed class="pink white--text ml-2">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab depressed small dark color="purple" class="ml-2">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <!-- breakpoint & visibility -->
    <!-- https://v2.vuetifyjs.com/en/features/breakpoints/ -->
    <!-- https://v2.vuetifyjs.com/en/styles/display/#visibility -->
    <div class="my-2">
      <v-btn class="d-md-none">hide md & up (960px)</v-btn>
    </div>
    <div class="my-2">
      <v-btn class="d-none d-sm-inline">show sm & up (600px)</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    //
  }),
};
</script>
