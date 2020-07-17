<template>
    <v-main>
        <v-card
                class="mx-auto my-16"
                width="200px"
                height="200px"
                style="border-radius: 50%;overflow: hidden;"
                flat
        >
            <v-img src="http://www.openluat.com/img/favicon.png"></v-img>
        </v-card>
        <v-text-field
                ref="inputKey"
                v-model="inputKey"
                class="ma-12"
                label="Your key"
                prepend-inner-icon="mdi-key-variant"
                clearable
                outlined
        ></v-text-field>
        <div style="text-align: center">
            <v-btn
                    width="200px"
                    outlined
                    color="primary"
                    v-on:click="handleLogin"
            >登入
            </v-btn>
        </div>
    </v-main>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                inputKey: ""
            }
        },
        methods: {
            handleLogin: function () {
                this.$store.commit("changeTridKey", this.inputKey);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$refs.inputKey.focus()
            });
        }
    }
</script>