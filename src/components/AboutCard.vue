<template>
  <div class="AboutCard">
    <!-- <v-flex xs12 sm6 offset-sm3> -->
    <v-card>
      <v-avatar>
        <v-img src="https://avatars1.githubusercontent.com/u/8227297"></v-img>
      </v-avatar>

      <v-card-title primary-title>
        <div>Developer</div>
        <div>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas facilis fuga harum nobis odio ad culpa aperiam ex molestiae ducimus repellendus adipisci laborum, necessitatibus quisquam obcaecati ratione. Eius, mollitia!</div>
      </v-card-title>

      <v-card-actions>
        <!-- TODO make buttons wrap on smaller screens -->
        <v-btn flat>
          <v-icon class="mr-2">far fa-address-card</v-icon>
          <span>Résumé</span>
        </v-btn>
        <v-btn flat>
          <v-icon class="mr-2">fas fa-code</v-icon>
          <span>Projects</span>
        </v-btn>
        <v-btn flat icon>
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-btn flat icon>
          <v-icon>fab fa-linkedin-in</v-icon>
        </v-btn>
        <v-btn flat icon>
          <v-icon>far fa-envelope</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-flex> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
