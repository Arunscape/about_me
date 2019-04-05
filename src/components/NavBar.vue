<template>
  <nav>
    <v-toolbar flat app>
      <router-link to="/" tag="hideunderline">
        <v-toolbar-title>
          <span class="font-weight-light grey--text">About Me</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer/>

      <a
        v-if="$route.name==='resume'"
        download="Arun Woosaree Resume.pdf"
        href="https://raw.githubusercontent.com/Arunscape/resume/master/Arun_Woosaree_Resume.pdf"
      >
        <v-btn round outline color="indigo" class="indigo--text">
          <v-icon class="mr-2">fas fa-file-download</v-icon>
          <span>Download PDF</span>
        </v-btn>
      </a>

      <v-btn flat class="grey--text">
        <v-icon class="mr-2">fab fa-github</v-icon>
        <span>GitHub</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
hideunderline a {
  text-decoration: none;
}
</style>
