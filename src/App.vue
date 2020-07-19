<template>
    <v-app app>
        <v-app-bar
                color="indigo accent-2"
                app
                :clipped-left="true"
                tile
                class="white--text"
        >
            <v-app-bar-nav-icon @click="switchBar" class="white--text"></v-app-bar-nav-icon>

            <v-toolbar-title>{{AppTitle}}</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn v-if="isLogin" icon class="white--text mr-2" @click="handleAccountSignOut">
                <v-icon>mdi-account</v-icon>
                退出
            </v-btn>
            <v-btn v-else icon class="white--text mr-2" @click="handleAccountClick">
                <v-icon>mdi-account</v-icon>
                登陆
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :clipped="this.jeremy2" app>
            <v-card
                    class="mx-auto my-10"
                    width="200px"
                    height="200px"
                    style="border-radius: 50%;overflow: hidden;z-index: 999999999999"
                    @click="handleImgClick"
                    flat
            >
                <v-img src="http://www.openluat.com/img/favicon.png"></v-img>
            </v-card>
            <v-list-item-group mandatory>
                <v-list shaped>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            @click="handleNavListItemClick(item.link)"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="ml-6">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-list-item-group>
        </v-navigation-drawer>

        <router-view></router-view>
    </v-app>
</template>

<script>
    export default {
        name: "App",

        data: () => {
            return {
                AppTitle: "LuatMap",
                drawer: null,
                jeremy2: true,
                items: [
                    {
                        title: "Map",
                        icon: "mdi-map-search",
                        link: "/"
                    },
                    {
                        title: "Me",
                        icon: "mdi-account-search",
                        link: "/me"
                    },
                    {
                        title: "About",
                        icon: "mdi-information",
                        link: "/about"
                    }
                ]
            };
        },
        methods: {
            switchBar: function () {
                this.drawer = !this.drawer;
            },
            handleImgClick: function () {
            },
            handleAccountClick: function () {
                this.$router.replace("/login");
            },
            handleAccountSignOut: function () {
                this.$store.commit("changeUserKey", "undefined");
                this.$store.commit("changeIsLogin", false);
                this.$router.replace("/");
            },
            handleNavListItemClick: function (link) {
                this.$router.replace(link);
            }
        },
        computed: {
            isLogin: function () {
                return this.$store.state.isLogin;
            }
        },
    };
</script>
<style>
</style>
