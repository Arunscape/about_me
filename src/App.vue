<template>
  <v-app>
    <NavBar/>
    <!-- mx-4 is left and right margin -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar
  },
  data() {
    return {
      //
    };
  }
};
</script>
