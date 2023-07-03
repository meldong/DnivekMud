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
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain color="grey" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="mt-8">
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar size="120">
              <img src="https://cdn.vuetifyjs.com/images/john.png" alt="John" />
            </v-avatar>
            <h3 class="mt-2">John Doe</h3>
            <p class="text-caption mt-1">john.doe@dnivek.com</p>
            <Popup />
          </div>
        </v-list-item-content>
      </v-list-item>

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
import Popup from "../components/Popup";

export default {
  Name: "Navbar",

  components: {
    Popup,
  },

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
