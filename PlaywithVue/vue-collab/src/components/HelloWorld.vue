<template>
  <div class="helloworld pa-6">
    <h1 class="subheading grey--text">Home</h1>
    <!-- text & color -->
    <p class="indigo lighten-4 blue--text text--darken-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod possimus
      optio laudantium incidunt eum ad minima praesentium neque iusto illo,
      corporis pariatur assumenda nemo recusandae velit atque perspiciatis
      provident beatae esse quibusdam in consequuntur eius? Sint eius, ipsa
      dolore quod sed ut ea dolorum sapiente nihil blanditiis quasi, velit a.
    </p>
    <!-- button & icon -->
    <h4 class="mt-6">Button</h4>
    <v-divider class="mb-2"></v-divider>
    <v-btn>click me</v-btn>
    <v-btn class="pink white--text ml-2">click me</v-btn>
    <v-btn depressed color="pink" class="ml-2">click me</v-btn>
    <v-btn plain outlined color="pink" class="ml-2">click me</v-btn>
    <v-btn depressed class="pink white--text ml-2">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab depressed small dark color="purple" class="ml-2">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <!-- breakpoint & visibility -->
    <!-- https://v2.vuetifyjs.com/en/features/breakpoints/ -->
    <!-- https://v2.vuetifyjs.com/en/styles/display/#visibility -->
    <div class="my-2">
      <v-btn class="d-md-none">hide md & up (960px)</v-btn>
    </div>
    <div class="my-2">
      <v-btn class="d-none d-sm-flex d-md-none">show sm only</v-btn>
    </div>
    <div class="my-2">
      <v-btn class="d-none d-sm-inline">show sm & up (600px)</v-btn>
    </div>
    <!-- https://v2.vuetifyjs.com/en/components/grids/ -->
    <h4 class="mt-6">Grid System</h4>
    <v-divider class="mb-2"></v-divider>
    <v-container class="grey lighten-4">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> One of three columns </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2" outlined tile>
            .col-12 .col-sm-6 .col-md-8
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile> .col-6 .col-md-4 </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> One of three columns </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="grey lighten-4">
      <v-row no-gutters class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="project in projects" :key="project.id">
        <v-row no-gutters :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="text-right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <!-- https://v2.vuetifyjs.com/en/components/cards/ -->
    <h4 class="mt-6">Cards</h4>
    <v-divider class="mb-2"></v-divider>
    <v-container class="grey lighten-4">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn plain color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- https://v2.vuetifyjs.com/en/components/expansion-panels/ -->
    <h4 class="mt-6">Expansion Panels</h4>
    <v-divider class="mb-2"></v-divider>
    <v-container class="grey lighten-4">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text px-4">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default {
  name: "HelloWorld",

  data: () => ({
    projects: [
      {
        id: "6UJnzYnb2VAxydXgGnSS",
        title: "Code up the homepage",
        person: "Chun",
        due: "10th Jan 2023",
        status: "complete",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit fugiat, dolore molestias, incidunt recusandae tempora unde sint esse, non repudiandae labore illo repellendus modi mollitia aspernatur temporibus neque! Culpa!",
      },
    ],
    team: [
      { name: "Dnivek", role: "Web developer", avatar: "/avatar-1.png" },
      { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
      { name: "Chun", role: "Web developer", avatar: "/avatar-3.png" },
      {
        name: "Gouken",
        role: "Social media maverick",
        avatar: "/avatar-4.png",
      },
      { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" },
    ],
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => project.person === "Dnivek");
    },
  },
  // https://firebase.google.com/docs/firestore/query-data/listen
  created() {
    const unsubscribe = onSnapshot(collection(db, "projects"), (res) => {
      res.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New project: ", change.doc.data());
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === "modified") {
          console.log("Modified project: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed project: ", change.doc.data());
        }
      });
    });
    // Stop listening to changes
    // unsubscribe();
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.theme--dark.v-chip.complete,
.theme--light.v-chip.complete {
  background-color: #3cd1c2;
}
.theme--dark.v-chip.ongoing,
.theme--light.v-chip.ongoing {
  background: #ffaa2c;
}
.theme--dark.v-chip.overdue,
.theme--light.v-chip.overdue {
  background: #f83e70;
}
</style>
