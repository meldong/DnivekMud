<template>
  <div class="home">
    <hello-world />
    <Navbar />
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
