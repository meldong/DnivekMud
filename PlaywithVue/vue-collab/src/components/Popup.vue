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

        <v-card-text class="mt-4">
          <v-form ref="form">
            <v-text-field
              v-model="title"
              :counter="30"
              :rules="titleRules"
              label="Title"
              prepend-icon="mdi-folder"
              required
            ></v-text-field>

            <v-textarea
              v-model="content"
              :counter="140"
              :rules="contentRules"
              label="Information"
              prepend-icon="mdi-pencil"
              required
            ></v-textarea>

            <v-menu
              v-model="due"
              :close-on-content-click="false"
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="formattedDate"
                  clearable
                  :rules="dateRules"
                  label="Due date"
                  prepend-icon="mdi-calendar-today"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="date = null"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @change="due = false"
              ></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            text
            @click="submit"
            :loading="loading"
            :disabled="loading"
          >
            Add Project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Popup",

  data: () => ({
    dialog: false,
    title: "",
    titleRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 30) || "Title must be less than 30 characters",
    ],
    content: "",
    contentRules: [
      (v) => !!v || "Information is required",
      (v) =>
        (v && v.length <= 140) ||
        "Information must be less than 140 characters",
    ],
    date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
    dateRules: [(v) => !!v || "Due date is required"],
    due: false,
    loading: false,
  }),
  // https://firebase.google.com/docs/firestore/manage-data/add-data
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.date), "do MMMM yyyy"),
          person: "Dnivek",
          status: "ongoing",
        };

        try {
          const docRef = await addDoc(collection(db, "projects"), project);
          console.log("Document written with ID: ", docRef.id);
          this.loading = false;
          this.dialog = false;
          this.$emit("projectAdded");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
  },
  computed: {
    formattedDate() {
      return this.date ? format(parseISO(this.date), "do MMMM yyyy") : "";
    },
  },
};
</script>
