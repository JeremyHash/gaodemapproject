<template>
  <v-btn
    bottom
    color="pink"
    fab
    dark
    fixed
    right
    @click="$vuetify.goTo(target, options)"
    class="mb-8"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "BackToTop",
  data: function() {
    return {
      target: 0,
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic"
    };
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>

<style scoped>
</style>
