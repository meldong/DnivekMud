<template>
  <div class="bomcompare">
    <v-toolbar app fixed clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        Motor BOM Comparison Tool
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn plain @click="diffMode = 'Chars'">Chars</v-btn>
        <v-btn plain @click="diffMode = 'Words'">Words</v-btn>
        <v-btn plain @click="diffMode = 'Lines'">Lines</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      disable-resize-watcher
    >
      <v-container>
        <v-switch v-model="showDes" label="show parts description"></v-switch>
      </v-container>
    </v-navigation-drawer>

    <v-container fluid grid-list-lg class="grey lighten-2">
      <v-layout row wrap>
        <v-flex xs6>
          <v-card>
            <v-card-text>
              <v-layout>
                <v-autocomplete
                  v-model="leftPN"
                  :items="pnList"
                  label="Part Number"
                  @input="FindPN('left')"
                ></v-autocomplete>
                <!-- <v-btn @click="FindPN('left')">FIND</v-btn> -->
              </v-layout>
            </v-card-text>
            <v-tabs v-model="tab" dark background-color="primary">
              <v-tab>Input</v-tab>
              <v-tab>BOM</v-tab>
              <v-tab>different</v-tab>
              <v-tab-item>
                <v-textarea
                  hide-details
                  flat
                  v-model="leftBomInText"
                ></v-textarea>
              </v-tab-item>
              <v-tab-item>
                <div v-for="node in leftTree" :key="node.id">
                  <v-container grid-list-lg pl-0>
                    <BOMnode :data="node" :level="0"></BOMnode>
                  </v-container>
                </div>
              </v-tab-item>
              <v-tab-item>
                <pre style="overflow: hidden !important"><span
    :class="(item.added ? 'add_L' :item.removed ? 'delete_L' :'')"
    v-for="item in BOMdiff"
    :key="item.id"
  >{{ item.value }}</span></pre>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-text>
              <v-layout>
                <v-autocomplete
                  v-model="rightPN"
                  :items="pnList"
                  label="Part Number"
                  @input="FindPN('right')"
                ></v-autocomplete>
                <!-- <v-btn @click="FindPN('right')">FIND</v-btn> -->
              </v-layout>
            </v-card-text>
            <v-tabs v-model="tab" dark background-color="primary">
              <v-tab>Input</v-tab>
              <v-tab>BOM</v-tab>
              <v-tab>different</v-tab>
              <v-tab-item>
                <v-textarea
                  hide-details
                  flat
                  v-model="rightBomInText"
                ></v-textarea>
              </v-tab-item>
              <v-tab-item>
                <div v-for="node in rightTree" :key="node.id">
                  <v-container grid-list-lg>
                    <BOMnode :data="node" :level="0"></BOMnode>
                  </v-container>
                </div>
              </v-tab-item>
              <v-tab-item>
                <pre style="overflow: hidden !important"><span
    :class="(item.added ? 'add_R' :item.removed ? 'delete_R' :'')"
    v-for="item in BOMdiff"
    :key="item.id"
  >{{ item.value }}</span></pre>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-footer app></v-footer>
  </div>
</template>

<script>
import axios from "axios";
import BOMnode from "@/components/BomCompareNode";
var Diff = require("diff");

export default {
  data() {
    return {
      drawer: false,
      leftPN: "",
      rightPN: "",
      leftTree: [],
      rightTree: [],
      leftBomInText: "",
      rightBomInText: "",
      tab: 2,
      diffMode: "Lines",
      pnList: [],
      showDes: true,
    };
  },
  computed: {
    BOMdiff() {
      if (this.diffMode === "Lines")
        return Diff.diffLines(this.leftBomInText, this.rightBomInText);
      else if (this.diffMode === "Chars")
        return Diff.diffChars(this.leftBomInText, this.rightBomInText);
      else
        return Diff.diffWordsWithSpace(this.leftBomInText, this.rightBomInText);
    },
  },
  methods: {
    itemNode(data, level, temp) {
      for (let index = 0; index < level; index++) {
        temp.text += "\t";
      }
      temp.text += data.pn;
      temp.text += "\t" + data.qty;
      if (this.showDes) {
        temp.text += "\t" + data.des;
      }
      temp.text += "\n";

      if (data.child) {
        for (var node in data.child) {
          this.itemNode(data.child[node], level + 1, temp);
        }
      }
    },
    FindPN(side) {
      var pn = "";
      var temp = {
        text: "",
      };
      if (side === "left") {
        pn = this.leftPN;
      } else {
        pn = this.rightPN;
      }
      axios
        .get("http://athkmotor.ahkex.asmpt.com:8088/ms/api/getBom?pn=" + pn)
        .then((response) => {
          if (side === "left") {
            this.leftTree = [response.data];
            if (this.leftTree.length != 0) {
              this.itemNode(this.leftTree[0], 0, temp);
            }
            this.leftBomInText = temp.text;
          } else {
            this.rightTree = [response.data];
            if (this.rightTree.length != 0) {
              this.itemNode(this.rightTree[0], 0, temp);
            }
            this.rightBomInText = temp.text;
          }
        });
    },
  },
  components: {
    BOMnode,
  },
  mounted() {
    axios
      .get("http://athkmotor.ahkex.asmpt.com:8088/ms/api/getPnList")
      .then((response) => {
        this.pnList = response.data;
      });
  },
};
</script>

<style>
.add_L {
  display: none;
}

.add_R {
  text-decoration: none;
  color: #b30000;
  background: #fadad7;
}

.delete_L {
  background: #eaf2c2;
  color: #406619;
  text-decoration: none;
}

.delete_R {
  display: none;
}
</style>
