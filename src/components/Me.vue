<template>
    <v-main>

    </v-main>
</template>

<script>
    export default {
        name: "Me",
        components: {},
        methods: {

        },
        mounted() {
            if (this.$store.state.isLogin===false){
                this.$router.replace("/login");
            }
        },
        computed:{
        }
    };
</script>

