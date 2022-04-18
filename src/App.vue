<template>
  <v-app>
    <v-container fluid>
      <v-row align="center">
        <v-spacer />
        <v-col cols="6" class="d-flex justify-center">
          <v-btn
            class="px-4"
            text
            plain
            v-for="item in navItems"
            :key="item"
            :to="item.to"
          >
            {{ item.text }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          text: "Info",
          to: "/info",
        },
        {
          text: "About",
          to: "/about",
        },
        {
          text: "Contact",
          to: "/contect",
        },
        {
          text: "Projects",
          to: "/projects",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

v-app {
  font-family: $body-font-family !important;
}
</style>
