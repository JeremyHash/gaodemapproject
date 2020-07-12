<template>
  <v-content style="overflow: hidden;height: 100px">
    <v-img src="../assets/img/backpic.jpg">
      <v-card flat height="100%" style="background-color: rgba(0,0,0,0.3)">
        <v-row style="width: 100%;padding-top: 200px;">
          <v-btn
            @click="handleNameClick"
            style="margin: 0 auto"
            rounded
            color="primary"
            dark
          >联系我(HashJeremy)</v-btn>
        </v-row>
      </v-card>
    </v-img>
  </v-content>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    handleNameClick: function() {
      console.log("click");
      window.location.href = "https://gitee.com/HashJeremy";
    }
  }
};
</script>

<style scoped>
</style>
