<template>
  <!-- <div class="AboutCard"> -->
  <!-- <v-flex xs12 sm6 offset-sm3> -->
  <v-card>
    <v-container grid-list-md>
      <v-layout column>
        <v-flex>
          <v-avatar size="128">
            <v-img src="https://avatars1.githubusercontent.com/u/8227297"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-btn flat icon>
            <v-icon>fab fa-github</v-icon>
          </v-btn>
          <v-btn flat icon>
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn flat icon>
            <v-icon>far fa-envelope</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum illum non a aut nulla, incidunt dicta, corrupti blanditiis aspernatur accusantium laborum minima laboriosam, obcaecati dolorum rem sapiente. Dignissimos, voluptate.</v-flex>
        <v-flex>
          <v-btn flat>
            <v-icon class="mr-2">far fa-file-alt</v-icon>
            <span>Résumé</span>
          </v-btn>
          <v-btn flat>
            <v-icon class="mr-2">far fa-folder-open</v-icon>
            <span>Projects</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  <!-- </v-flex> -->
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
