<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <AboutCard/>
    </v-layout>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AboutCard from "@/components/AboutCard"; // @ is an alias to /src

@Component({
  components: {
    AboutCard
  }
})
export default class Home extends Vue {}
</script>
