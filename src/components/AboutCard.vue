<template>
  <v-card>
    <v-container grid-list-md>
      <v-layout row>
        <!-- avatar + social buttons -->
        <v-flex xs3>
          <v-layout column justify-center text-xs-center>
            <v-flex>
              <!-- size 64 looks good on iphone, 128 for desktop -->
              <v-avatar size="128" align-center>
                <v-img src="https://avatars1.githubusercontent.com/u/8227297"></v-img>
              </v-avatar>
            </v-flex>
            <v-flex mt-4>
              <v-btn flat icon @click="openLink('github')">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn flat icon @click="openLink('linkedin')">
                <v-icon>fab fa-linkedin-in</v-icon>
              </v-btn>
              <v-btn flat icon>
                <v-icon>far fa-envelope</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- bio + link to github -->
        <v-flex xs9>
          <v-layout column mt-4>
            <v-flex xs9 text-xs-center>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum unde itaque laudantium iste iure, natus ea dolor corrupti excepturi. Neque impedit illum tempora eius similique earum corporis sequi, reiciendis maxime.</p>
            </v-flex>

            <v-flex text-xs-center xs3>
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      github: "https://github.com/Arunscape",
      linkedin: "https://www.linkedin.com/in/arun-woosaree/"
    };
  },
  methods: {
    openLink(website) {
      window.open(this[website], "_blank");
    }
  }
};
</script>
