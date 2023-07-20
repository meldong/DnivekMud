<template>
  <div>
    <v-layout row>
      <v-flex xs1>
        <v-scroll-y-transition mode="out-in">
          <v-btn
            icon
            flat
            @click="showChild = !showChild"
            v-if="Object.keys(data.child).length != 0"
          >
            <v-icon v-if="!showChild">mdi-plus</v-icon>
            <v-icon v-else>mdi-minus</v-icon>
          </v-btn>
        </v-scroll-y-transition>
      </v-flex>
      <v-flex
        v-for="(item, index) in level"
        :key="item.id"
        xs1
        shrink
        style="text-align: end"
      >
        <v-icon
          align-self-center
          v-if="index + 1 == level"
          x-large
          :color="arrowColor"
          >mdi-subdirectory-arrow-right</v-icon
        >
      </v-flex>
      <v-flex xs2 class="bomPN">
        <v-text-field
          :rules="pnRules"
          v-model="data.pn"
          flat
          label="PN"
          solo-inverted
          hide-details
          :disabled="
            data.des === 'Other (s)' || data.des.includes('Mechanical Part')
          "
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-text-field
          :disabled="
            data.des === 'Other (s)' || data.des.includes('Mechanical Part')
          "
          :rules="qtyRules"
          type="number"
          label="QTY"
          v-model="data.qty"
          hide-details
        ></v-text-field>
      </v-flex>
      <v-flex
        v-bind="{ [`xs${8 - level}`]: true }"
        class="text-truncate"
        align-self-center
        >{{ data.des }}</v-flex
      >
    </v-layout>

    <div v-if="showChild">
      <BOMnode
        v-for="node in data.child"
        :key="node.id"
        :data="node"
        :level="level + 1"
      ></BOMnode>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChild: true,
      pnRules: [
        (v) => !!v || "Name is required",
        // v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      qtyRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v >= 0) || "Cannot be negative",
      ],
    };
  },
  name: "BOMnode",
  props: {
    data: Object,
    level: Number,
  },
  computed: {
    arrowColor() {
      if (Object.keys(this.data.child).length != 0) {
        return "indigo";
      } else "";
    },
  },
};
</script>

<style>
.bomPN input {
  text-align: center;
}
</style>
