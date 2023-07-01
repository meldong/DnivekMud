<template>
  <div class="home grey lighten-4">
    <!-- <Navbar /> -->
    <hello-world />
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Navbar,
    Footer,
  },
};
</script>
