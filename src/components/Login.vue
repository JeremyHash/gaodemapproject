<template>
    <v-main>
        <div v-if="isLogin">
            <v-text-field
                    v-model="userKey"
                    class="ma-12"
                    label="Your key"
                    prepend-inner-icon="mdi-key-variant"
                    readonly
                    outlined
            >
            </v-text-field>
            <div style="text-align: center">
                <v-btn
                        width="200px"
                        outlined
                        color="primary"
                        v-on:click="handleSignOut"
                >退出
                </v-btn>
            </div>
        </div>
        <div v-else>
            <v-text-field
                    ref="inputKey"
                    v-model="inputKey"
                    class="ma-12"
                    label="Your key"
                    prepend-inner-icon="mdi-key-variant"
                    :rules="rules"
                    clearable
                    outlined
            ></v-text-field>
            <div style="text-align: center">
                <v-btn
                        width="200px"
                        outlined
                        color="primary"
                        v-on:click="handleLogin"
                >登陆
                </v-btn>
            </div>
        </div>
    </v-main>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                inputKey: "",
                rules: [
                    value => !!value || 'UserKey is Required.',
                ],
            }
        },
        methods: {
            handleLogin: function () {
                if (this.inputKey === '') {
                    return
                }
                this.$store.commit("changeUserKey", this.inputKey);
                this.$router.replace("/");
                this.$store.commit("changeIsLogin", true);
            },
            handleSignOut: function () {
                this.$store.commit("changeUserKey", "undefined");
                this.$store.commit("changeIsLogin", false);
            }
        },
        mounted() {

            // 自动吸附光标到输入框
            /*this.$nextTick(() => {
                this.$refs.inputKey.focus()
            });*/

        },
        computed: {
            userKey: function () {
                console.log("userKey refresh = " + this.$store.state.userKey);
                return this.$store.state.userKey;
            },
            isLogin: function () {
                let loginStatus = typeof this.userKey == "string" && this.userKey !== "undefined";
                this.$store.commit("changeIsLogin", loginStatus);
                return loginStatus;
            }
        }
    }
</script>