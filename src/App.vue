<template>
  <v-app>
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
