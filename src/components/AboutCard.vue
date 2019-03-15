<template>
  <!-- <div class="AboutCard"> -->
  <!-- <v-flex xs12 sm6 offset-sm3> -->
  <v-card>
    <v-container grid-list-md>
      <v-layout row>
        <v-flex xs3 text-xs-center>
          <v-layout column>
            <v-flex>
              <v-avatar size="128" align-center justify-center>
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
        </v-flex>
        <v-flex xs9 text-xs-center text-xs-bottom>
          <v-layout column justify-space-between fill-height>
            <v-flex>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reprehenderit nostrum modi officiis minus aliquid inventore voluptatem quis? Cum velit sed dignissimos ipsa adipisci reprehenderit accusamus! Obcaecati mollitia esse cumque.</v-flex>
            <v-spacer/>
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
