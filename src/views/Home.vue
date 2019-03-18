<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <AboutCard/>
    </v-layout>
  </v-container>
</template>

<script>
import AboutCard from "@/components/AboutCard"; // @ is an alias to /src

export default {
  components: {
    AboutCard
  }
};
</script>

