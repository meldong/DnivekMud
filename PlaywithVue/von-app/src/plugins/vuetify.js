import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#f83e70", // #FF5252
        info: "#ffaa2c", // #2196F3
        success: "#3cd1c2", // #4CAF50
        warning: "#FFC107",
      },
    },
  },
});
