<template>
  <div class="home grey lighten-4">
    <Appbar />
    <!-- <Navbar /> -->
    <p>Welcome!</p>
    <Foobar />
  </div>
</template>

<script>
import Appbar from "../components/Appbar";
import Navbar from "../components/Navbar";
import Foobar from "../components/Footer";

export default {
  name: "Home",

  components: {
    Appbar,
    Navbar,
    Foobar,
  },
};
</script>
