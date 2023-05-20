<template>
  <div class="webapi pa-6">
    <h1>jQuery API People - Ajax Tutorial</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="firstName"
        :counter="10"
        :rules="firstNameRules"
        label="First Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :counter="10"
        :rules="lastNameRules"
        label="Last Name"
        required
      ></v-text-field>
      <v-btn color="primary" class="mr-4" @click="submit" :disabled="!valid">
        Submit
      </v-btn>
      <v-btn color="success" class="mr-4" @click="validate" :disabled="!valid">
        Validate
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>

    <ul id="orders" style="user-select: none"></ul>
    <v-list flat dense>
      <v-subheader>PEOPLE</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <div v-for="(item, i) in items" :key="i">
          <v-list-item>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <!-- <v-btn @click.stop="deleteTask(item.id)" icon> -->
              <v-icon
                disabled
                color="primary lighten-1"
                @click.stop="deletePerson(item.id)"
                >mdi-delete</v-icon
              >
              <!-- </v-btn> -->
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import axios from "axios";
import query from "query-string";
export default {
  name: "Webapi",
  data: () => ({
    valid: false,
    firstName: "",
    firstNameRules: [
      (v) => !!v || "First Name is required",
      (v) =>
        (v && v.length <= 10) || "First Name must be less than 10 characters",
    ],
    lastName: "",
    lastNameRules: [
      (v) => !!v || "Last Name is required",
      (v) =>
        (v && v.length <= 10) || "Last Name must be less than 10 characters",
    ],
    PersonModel: {
      FirstName: "",
      LastName: "",
    },
    selectedItem: 1,
    items: [
      { text: "George Washington", icon: "mdi-account" },
      { text: "Benjamin Franklin", icon: "mdi-account" },
      { text: "Abraham Lincoln", icon: "mdi-account" },
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let url = "http://dell.local/mm/api/people";
        let config = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        };
        const _self = this;
        this.PersonModel.FirstName = _self.firstName;
        this.PersonModel.LastName = _self.lastName;
        var data = query.stringify(_self.PersonModel);
        alert(data);
        const _api = axios.post(url, data, config);
        _api
          .then((response) => {
            alert("Success");
          })
          .catch((err) => {
            alert("Error: " + err);
          });
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
