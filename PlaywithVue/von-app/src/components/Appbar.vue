<template>
  <div class="appbar">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> VON </v-list-item-title>
          <v-list-item-subtitle> Since Jun 13, 2023 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DESIGN COLLABORATION IT TOOLS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn href="https://example.com" target="_blank" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Appbar",

  data: () => ({
    drawer: null,
    // https://v2.vuetifyjs.com/en/components/icons/
    // https://pictogrammers.com/library/mdi/
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/dashboard" },
      { title: "BOM Comparison Tool", icon: "mdi-compare", to: "/bom" },
      { title: "Tasks", icon: "mdi-list-box", to: "/task" },
      { title: "Users", icon: "mdi-account-group", to: "/user" },
      { title: "Dnivek", icon: "mdi-omega", to: "/dnivek" },
      { title: "Data Manager", icon: "mdi-api", to: "/api" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
};
</script>
