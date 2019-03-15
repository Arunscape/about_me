<template>
  <!-- <div class="AboutCard"> -->
  <!-- <v-flex xs12 sm6 offset-sm3> -->
  <v-card>
    <v-container fill-height align-center grid-list-md>
      <v-layout align-center justify-center fill-height>
        <v-avatar size="128">
          <v-img src="https://avatars1.githubusercontent.com/u/8227297"></v-img>
        </v-avatar>
        <v-layout row wrap>
          <v-btn flat icon>
            <v-icon>fab fa-github</v-icon>
          </v-btn>
          <v-btn flat icon>
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn flat icon>
            <v-icon>far fa-envelope</v-icon>
          </v-btn>
        </v-layout>
        <v-card-title primary-title>
          <div>Developer</div>
          <div>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas facilis fuga harum nobis odio ad culpa aperiam ex molestiae ducimus repellendus adipisci laborum, necessitatibus quisquam obcaecati ratione. Eius, mollitia!</div>
        </v-card-title>

        <v-card-actions>
          <!-- TODO make buttons wrap on smaller screens -->
          <!-- TODO properly format -->
          <!-- <v-spacer></v-spacer> -->
          <v-layout row wrap>
            <v-btn flat>
              <v-icon class="mr-2">far fa-file-alt</v-icon>
              <span>Résumé</span>
            </v-btn>
            <v-btn flat>
              <v-icon class="mr-2">far fa-folder-open</v-icon>
              <span>Projects</span>
            </v-btn>
          </v-layout>
        </v-card-actions>
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
