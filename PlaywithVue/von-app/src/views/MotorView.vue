<template>
  <div class="motor pa-6">
    <h1>Motor</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quas
      recusandae blanditiis cum ad nemo aspernatur enim distinctio, veritatis
      dolorum consequuntur maxime expedita corporis exercitationem? Perspiciatis
      praesentium cum accusamus modi.
    </p>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-card style="width: 500px" class="elevation-12">
          <v-toolbar flat height="62" color="grey lighten-4">
            <v-toolbar-title>
              <span class="font-weight-medium">ATHK</span>
              <span class="pl-1 font-weight-light">Motor Sizing</span>
              <span class="pl-1 caption">beta</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  dark
                  x-small
                  @click="helpDialog = true"
                  v-on="on"
                  :elevation="infoButtonElevation"
                >
                  <span class="text-lowercase title">i</span>
                </v-btn>
              </template>
              <span>Click to open guideline</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text class="px-12">
            <v-container fluid class="px-6">
              <v-layout
                align-space-around
                justify-space-around
                column
                fill-height
              >
                <!-- <v-spacer /> -->
                <v-flex>
                  <v-autocomplete
                    clearable
                    v-model="selectedMotor"
                    :items="Object.values(fullMotorList)"
                    prepend-inner-icon="mdi-magnify"
                    item-text="pn"
                    label="Search for a motor"
                    @input="selectMotorPN"
                  >
                    <template slot="item" slot-scope="{ item }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.pn"></v-list-item-title>
                        <v-list-item-subtitle
                          v-text="item.des"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-flex>
                <v-flex>
                  <div class="text-center subtitle-1">OR</div>
                </v-flex>
                <v-flex class="pl-3">
                  <v-layout justify-left row>
                    <v-flex xs7>
                      <v-radio-group
                        hide-details
                        v-model="directionType"
                        column
                        :disabled="!!selectedMotor"
                      >
                        <v-radio
                          label="Linear"
                          color="blue"
                          value="Linear"
                        ></v-radio>
                        <v-radio
                          label="Rotary"
                          color="blue"
                          value="Rotary"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex xs5>
                      <v-radio-group
                        hide-details
                        v-model="connectionType"
                        column
                        :disabled="!!selectedMotor"
                      >
                        <v-radio
                          label="AC 3 Phase"
                          color="red"
                          value="AC3phase"
                        ></v-radio>
                        <v-radio
                          label="AC 2 Phase"
                          color="red"
                          value="AC2phase"
                        ></v-radio>
                        <v-radio label="DC" color="red" value="DC"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-layout column>
            <v-btn
              large
              block
              color="primary"
              :to="
                selectedMotor
                  ? {
                      name: 'mainWithMotorPN',
                      params: { motorType: motorType, motorPN: selectedMotor },
                    }
                  : { name: 'main', params: { motorType: motorType } }
              "
              >Select</v-btn
            >
            <div v-if="debugMode">
              <v-btn large block @click="deleteAllSave" color="error"
                >Delete all save</v-btn
              >
              <v-btn large block to="/summary">Summary</v-btn>
            </div>
          </v-layout>
          <v-alert :value="true" class="ieversion subheading" type="warning"
            >We recommend using latest version chrome or firefox</v-alert
          >
        </v-card>
      </v-layout>
    </v-container>
    <v-dialog v-model="helpDialog" max-width="1000px" hide-overlay>
      <v-card>
        <Guideline />
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar">
      "If you are first Time to Use the Tool, Click"
      <v-icon large dark>mdi-information</v-icon>
    </v-snackbar>
    <v-snackbar v-model="snackbarError" color="error">
      {{ snackbarErrorText }}
      <br />Please refresh the page!
    </v-snackbar>
  </div>
</template>

<script>
import Guideline from "@/components/Guideline.vue";
import axios from "axios";

var server = "http://athkmotor.ahkex.asmpt.com:8088/ms/api";

export default {
  data: () => ({
    directionType: "Linear",
    connectionType: "AC3phase",
    helpDialog: false,
    snackbar: true,
    snackbarErrorText: "",
    snackbarError: false,
    debugMode: false,
    fullMotorList: {},
    selectedMotor: "",
    infoButtonElevation: 0,
    infoButtonDark: false,
  }),

  computed: {
    motorType: function () {
      return this.connectionType + this.directionType;
    },
  },

  components: {
    guideline,
  },

  mounted() {
    var here = this;
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == 17) {
        here.debugMode = true;
      }
    });
    axios
      .get(server + "/getDataBase", {
        timeout: 10000,
      })
      .then((response) => {
        console.log("getMotorDataBase success");
        this.fullMotorList = response.data.fullMotorList;
      })
      .catch((error) => {
        console.log(error);
        this.snackbarErrorText = error.message + " Cannot get Motor database.";
        this.snackbarError = true;
      });
    this.infoButtonElevation = 0;
    setTimeout(function () {
      here.infoButtonElevation = 24;
    }, 100);
    setTimeout(function () {
      here.infoButtonElevation = 0;
    }, 6000);
  },

  methods: {
    deleteAllSave() {
      localStorage.clear();
      console.log("all save is deleted");
    },
    selectMotorPN() {
      if (this.selectedMotor != undefined) {
        var Motor = this.fullMotorList[this.selectedMotor];
        this.directionType = Motor.category;
        this.connectionType = Motor.type;
      }
    },
  },
};
</script>

<style>
.ieversion {
  display: none !important;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ieversion {
    display: flex !important;
  }
}
</style>
