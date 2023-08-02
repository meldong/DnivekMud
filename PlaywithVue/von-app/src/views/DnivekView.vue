<template>
  <div class="dnivek grey lighten-4">
    <Appbar />
    <!-- <Navbar /> -->
    <hello-world />
    <Foobar />
  </div>
</template>

<script>
import Appbar from "../components/Appbar";
import Navbar from "../components/Navbar";
import Foobar from "../components/Footer";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Dnivek",

  components: {
    Appbar,
    Navbar,
    Foobar,
    HelloWorld,
  },
};
</script>
