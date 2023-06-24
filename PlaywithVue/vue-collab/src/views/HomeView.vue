<template>
  <div class="home grey lighten-4">
    <Navbar />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Navbar from "../components/Navbar";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
