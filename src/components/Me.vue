<template>
    <v-main>
        <v-card>
            <v-list>
                <v-list-group
                        v-for="service in tree"
                        :key="service.sid"
                        v-model="service.active"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="service.name"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                            v-for="terminal in service.terminals"
                            :key="terminal.tid"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="terminal.name"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-card>
    </v-main>
</template>


<script>
    export default {
        name: "Me",
        components: {},
        data() {
            return {
                tree: [],
            }
        },
        methods: {},
        created() {
            if (localStorage.isLogin === "false") {
                this.$router.replace("/login");
            } else {
                let jeremy = this;
                let userKey = localStorage.userKey;
                let searchServicesConfig = {
                    method: "get",
                    url: "https://tsapi.amap.com/v1/track/service/list?key=" + userKey,
                };
                this.axios(searchServicesConfig).then(function (res) {
                    if (res) {
                        let services = res.data.data.results;
                        for (let i = 0; i < services.length; i++) {
                            jeremy.tree[i] = services[i];
                            jeremy.tree[i].icon = "mdi-cloud-search";
                            jeremy.tree[i].terminals = [];
                            if (i === 0) {
                                jeremy.tree[i].active = true;
                            }
                            let searchTerminalConfig = {
                                method: "get",
                                url: "https://tsapi.amap.com/v1/track/terminal/list?key=" + userKey + "&sid=" + services[i].sid,
                            };
                            jeremy.axios(searchTerminalConfig).then(function (res) {
                                let terminals = res.data.data.results;
                                for (let j = 0; j < terminals.length; j++) {
                                    jeremy.tree[i].terminals[j] = terminals[j];
                                }
                            })
                        }
                    }
                    console.log(jeremy.tree)
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        computed: {}
    };
</script>

