<template>
    <v-app app>
        <v-app-bar
                color="purple lighten-1"
                app
                :clipped-left="true"
                :collapse-on-scroll="true"
                tile
                class="white--text"
        >
            <v-app-bar-nav-icon @click="switchBar" class="white--text"></v-app-bar-nav-icon>

            <v-toolbar-title>{{AppTitle}}</v-toolbar-title>

            <v-spacer></v-spacer>
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
                <v-img src="./assets/img/3333.jpg"></v-img>
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
            handleSearchClick: function () {
                if (this.isSearch) {
                    this.$store.commit("changeSearch", false);
                    this.$router.replace("/");
                } else {
                    this.$router.replace("/search");
                    this.$store.commit("changeSearch", true);
                }
            },
            handleNavListItemClick: function (link) {
                this.$store.commit("changeSearch", false);
                this.$router.replace(link);
            }
        },
        computed: {
            isSearch: function () {
                return this.$store.state.searchState;
            }
        },
        mounted() {
        }
    };
</script>
<style>
</style>
