<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs3>
        <v-stepper v-model="e6" vertical non-linear>
          <v-stepper-step step="1" editable>Motor Type</v-stepper-step>
          <v-stepper-step step="2" editable>Motion Profile</v-stepper-step>
          <v-stepper-step step="3" editable>Motor PN</v-stepper-step>
          <v-stepper-step step="4" editable>Calculation</v-stepper-step>
          <v-stepper-step step="5" editable>Store Result</v-stepper-step>
          <v-stepper-step step="6" editable>Store Progress</v-stepper-step>
        </v-stepper>
      </v-flex>
      <v-flex xs9>
        <v-card>
          <div id="guideline">
            <v-container>
              <div v-if="e6 == 1">
                <p class="subheading">
                  Modify the value and click the button in help page will not
                  change the the actual value of the motor sizing tools!!
                </p>
                <p>
                  Select type of motor first in Home page. If you not sure about
                  the type of motor,please contact athk motor team
                </p>
                <v-radio-group v-model="directionType" column>
                  <v-radio label="Linear" color="blue" value="Linear"></v-radio>
                  <v-radio label="Rotary" color="blue" value="Rotary"></v-radio>
                </v-radio-group>

                <v-radio-group v-model="connectionType" column>
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
                <p>Click the select button to enter the tools</p>
                <v-btn color="primary" block>Select</v-btn>
              </div>
              <div v-if="e6 == 2">
                <h4 class="title blue--text">Select type of motion profile</h4>
                <v-tabs light>
                  <v-tab>Manual</v-tab>
                  <v-tab>Upload</v-tab>
                </v-tabs>
                <br />
                <p>
                  The Manual profile is for Sine profile motion only!! For S
                  profile and other non-Sine profile, please use Upload Profile
                </p>
                <h4 class="title blue--text">Upload</h4>
                <p>
                  The Profile should be generate with System Group TIMING CHART
                </p>
                <a
                  class="v-btn"
                  href="http://wp.atsex.asmpt.com/dnt/tools-software/timing-chart/"
                  target="_blank"
                  >TIMING CHART PAGE</a
                >
                <p>
                  Or, you can use our template. The template provides a list
                  that contains the motion’s displacement, velocity,
                  acceleration, and required force versus time.motion
                </p>
                <a
                  class="v-btn"
                  href="../../public/motor_sizing_template.txt"
                  download
                  >Click to download the template</a
                >
                <p>
                  In Motion Profile(PVAM), we only use the value of PVA, you can
                  ignore the M in current version
                </p>
                <p>After modify, click the input box to upload the file.</p>
                <v-file-input label="File input" accept=".txt"></v-file-input>
                <h4 class="title blue--text">Manual</h4>
                <p>
                  Specifies the desired distance of motion as well as the time
                  it takes to complete the motion
                </p>
                <span>Both time and distance are relative</span>
                <p>
                  You can try on the upper table. The table support direct copy
                  and paste from MS Excel
                </p>
                <v-subheader>New Row</v-subheader>
                <img src="../../public/newRow.gif" />
                <v-subheader>Moving</v-subheader>
                <img src="../../public/moving.gif" />
              </div>
              <div v-if="e6 == 3">
                <p class="subheading">
                  The function only support AC 3Phase and DC motor only
                </p>
                <p>
                  If you have a ASM motor part number and the motor is in
                  NuMotion SCF database, please select STANDARD
                </p>
                <p>
                  If is is a new motor or not in database, please select
                  CUSTOMIZE
                </p>
                <v-tabs mobile-break-point="2000">
                  <v-tab>Standard</v-tab>
                  <v-tab>customize</v-tab>
                </v-tabs>
                <br />
                <p>
                  In Standard mode, you can select the motor part number. If the
                  motor parameter is exist in database, the motor parameter will
                  auto update.
                </p>
                <v-autocomplete
                  :items="motorlist"
                  label="Motor P/N"
                ></v-autocomplete>
              </div>
              <div v-if="e6 == 4">
                <p class="headline">Very simple :)</p>
                <p>
                  Just Click the calculate button and I will do all the job for
                  you
                </p>
                <v-btn color="secondary" block>calculate</v-btn>
              </div>
              <div v-if="e6 == 5">
                <p>
                  A floating Button will show in the right bottom corner after
                  calculation
                </p>
                <div>
                  <v-btn slot="activator" fab dark color="indigo">
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                  <span>Save result</span>
                  <br />
                  <p>The result will download as a zip with image and json</p>
                </div>
              </div>
              <div v-if="e6 == 6">
                <p>
                  We can help you to save the progress. Each type of motor will
                  have a copy of save in your brower
                </p>
                <p>
                  To Save the progress, to go the top bar and hover on the
                  <b>save</b> button and the menu will pop up.
                </p>
                <v-toolbar height="62" color="grey lighten-3">
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
                  <v-toolbar-title>Motor Sizing</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn text>Home</v-btn>
                    <v-btn text>Help</v-btn>
                    <v-menu offset-y open-on-hover>
                      <template v-slot:activator="{ on }">
                        <v-btn color="grey" dark v-on="on">Save</v-btn>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-title
                            >Download Progress</v-list-item-title
                          >
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Load Progress</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Save Progress</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Delete Save</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-toolbar-items>
                </v-toolbar>
                <br />
                <br />
                <p>Click the Download Progress to Download current progress.</p>
                <p>Click the Load Progress to Load previous progress.</p>
                <p>Click the Save Progress to save current progress.</p>
                <p>
                  Click the Delete Progress to delete the save for that motor
                  type.
                </p>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      directionType: "Linear",
      connectionType: "AC3phase",
      fab: false,
      motorlist: ["07-L0XXXX", "07-L0XXXX-XX", "07-L00XXX", "07-L000XX"],
    };
  },
};
</script>

<style scoped>
#guideline {
  display: block;
  height: 494px;
  overflow-y: auto;
}
</style>
