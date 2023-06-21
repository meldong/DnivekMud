<template>
  <div class="helloworld pa-6">
    <h1>Hello World</h1>
    <p class="indigo lighten-4 blue--text text--darken-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci
      fugiat officia rerum ratione facilis cupiditate error blanditiis ipsum
      nisi totam, ipsa voluptates odio quidem reprehenderit alias? Vero quo fuga
      aliquid est expedita? Quod perspiciatis, non aut laboriosam ad minima
      labore libero rerum dicta possimus impedit in tempora doloremque
      recusandae deleniti commodi! Quasi dicta repellat earum dolorum nihil
      optio alias illum neque architecto nostrum accusantium rem, molestias
      veritatis facere harum modi labore porro et commodi? Autem, culpa in.
      Expedita, obcaecati. Dignissimos et nemo repudiandae accusamus nulla vero,
      reprehenderit perspiciatis temporibus asperiores esse corrupti, totam enim
      id. Eum voluptatibus voluptates facilis!
    </p>
    <v-btn class="mr-4">click me</v-btn>
    <v-btn class="pink white--text mr-4">click me</v-btn>
    <v-btn depressed color="pink" class="mr-4">click me</v-btn>
    <v-btn plain color="pink" class="mr-4">click me</v-btn>
    <v-btn depressed class="pink white--text mr-4">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
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
