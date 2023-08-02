<template>
  <div class="api grey lighten-4">
    <Appbar />
    <!-- <Navbar /> -->

    <h4 class="pt-6 px-4 text-uppercase">Channel</h4>
    <v-divider class="mb-2"></v-divider>
    <v-container class="grey lighten-4">
      <v-row no-gutters class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              color="grey"
              @click="sortBy('ChannelName')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By channel name</span>
            </v-btn>
          </template>
          <span>Sort channels by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              color="grey"
              @click="sortBy('MotionType')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-axis</v-icon>
              <span class="caption text-lowercase">By motion type</span>
            </v-btn>
          </template>
          <span>Sort channels by motion type</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              color="grey"
              @click="sortBy('BadgeNo')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By badge</span>
            </v-btn>
          </template>
          <span>Sort channels by badge</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="channel in channels" :key="channel.ChannelId">
        <v-row no-gutters :class="`pa-3 project ${channel.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Channel Name</div>
            <div>{{ channel.ChannelName }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Motion Type</div>
            <div>{{ channel.MotionType }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Motor PN</div>
            <div>{{ channel.MotorPN }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Badge</div>
            <div>{{ channel.BadgeNo }}</div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>

    <h4 class="pt-6 px-4 text-uppercase">Raw Data</h4>
    <v-divider class="mb-2"></v-divider>
    <v-container class="grey lighten-4">{{ channels }}</v-container>

    <Foobar />
  </div>
</template>

<script>
import Appbar from "../components/Appbar";
import Navbar from "../components/Navbar";
import Foobar from "../components/Footer";
import axios from "axios";

export default {
  name: "Api",

  components: {
    Appbar,
    Navbar,
    Foobar,
  },

  data: () => ({
    newTaskTitle: "",
    tasks: [
      //   { id: 1, title: "Wake up", done: false },
      //   { id: 2, title: "Do cleaning", done: false },
      //   { id: 3, title: "Have breakfast", done: false },
    ],
    channels: [],
  }),

  methods: {
    sortBy(prop) {
      this.channels.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },

  mounted() {
    axios
      .get("http://ahknts324.ahkex.asmpt.com/dm/api/channel/getchanneldata")
      .then((response) => {
        this.channels = response.data;
      });
  },
};
</script>
