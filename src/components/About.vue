<template>
    <v-main>
        <div style="text-align: center;margin-top: 200px">
            <v-btn
                    @click="handleNameClick"
                    outlined
                    color="primary"
                    dark
            >联系我(HashJeremy)
            </v-btn>
        </div>
    </v-main>
</template>

<script>
    export default {
        name: "About",
        components: {},
        methods: {
            handleNameClick: function () {
                console.log("click");
                window.location.href = "https://gitee.com/HashJeremy";
            }
        }
    };
</script>

<style scoped>
</style>
