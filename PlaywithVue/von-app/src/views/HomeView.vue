<template>
  <div class="home grey lighten-4">
    <Appbar />
    <!-- <Navbar /> -->
    <hello-world />
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appbar from "../components/Appbar";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Navbar,
    Footer,
    Appbar,
  },
};
</script>
