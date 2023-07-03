<template>
  <div class="popup">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed rounded text v-bind="attrs" v-on="on">
          Add New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add New Project
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="title"
              :counter="20"
              label="Title"
              prepend-icon="mdi-folder"
              required
            ></v-text-field>

            <v-textarea
              v-model="content"
              label="Information"
              prepend-icon="mdi-pencil"
              required
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="submit"> Add Project </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",

  data: () => ({
    dialog: false,
    title: "",
    content: "",
  }),
  methods: {
    submit() {
      console.log(this.title, this.content);
      this.dialog = false;
    },
  },
};
</script>
