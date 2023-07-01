<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">dr</span>
        <span>nivek</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <div class="mx-auto text-center mt-8">
        <v-avatar size="120">
          <img src="https://cdn.vuetifyjs.com/images/john.png" alt="John" />
        </v-avatar>
        <h3 class="subheading mt-1">John Doe</h3>
        <p class="text-caption mt-1">john.doe@outlook.com</p>
      </div>
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
  </nav>
</template>

<script>
export default {
  Name: "Navbar",

  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Apps", icon: "mdi-view-dashboard", to: "/task" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
};
</script>
