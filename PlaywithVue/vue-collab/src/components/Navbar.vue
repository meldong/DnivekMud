<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
        <span class="text-lowercase font-weight-light">dr</span>
        <span class="text-uppercase">dnivek</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="success">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  Name: "Navbar",

  data: () => ({
    drawer: false,
  }),
};
</script>
