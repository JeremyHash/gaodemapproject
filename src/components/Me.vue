<template>
    <v-main>
        <v-card>
            <v-list v-if="isRightKey">
                <v-list-group
                        v-for="service in tree"
                        :key="service.sid"
                        v-model="service.active"
                        :prepend-icon="service.icon"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="service.name"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                            v-for="terminal in service.terminals"
                            :key="terminal.tid"
                            @click=""
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="terminal.name"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-alert type="error" v-else v-model="userKey">
                Your key {{userKey}} is Wrong!
                <br>
                Please input a right key.
            </v-alert>
        </v-card>
    </v-main>
</template>


<script>
    export default {
        name: "Me",
        components: {},
        data() {
            return {
                userKey: localStorage.userKey,
                isRightKey: false,
                tree: [],
            }
        },
        methods: {},
        mounted() {
            if (this.$store.state.isLogin === false) {
                this.$router.replace("/login");
            } else {
                let jeremy = this;
                let userKey = localStorage.userKey;
                let searchServicesConfig = {
                    method: "get",
                    url: "https://tsapi.amap.com/v1/track/service/list?key=" + userKey,
                };

                this.axios(searchServicesConfig).then(function (res) {
                    if (res.data.data) {
                        jeremy.isRightKey = true;
                        let services = res.data.data.results;
                        for (let i = 0; i < services.length; i++) {
                            if (i === 0) {
                                jeremy.tree.push({
                                    sid: services[i].sid,
                                    name: services[i].name,
                                    desc: services[i].desc,
                                    icon: "mdi-cloud-search",
                                    active: true,
                                    terminals: [],
                                });
                            } else {
                                jeremy.tree.push({
                                    sid: services[i].sid,
                                    name: services[i].name,
                                    desc: services[i].desc,
                                    icon: "mdi-cloud-search",
                                    terminals: [],
                                });
                            }
                            let searchTerminalConfig = {
                                method: "get",
                                url: "https://tsapi.amap.com/v1/track/terminal/list?key=" + userKey + "&sid=" + services[i].sid,
                            };
                            jeremy.axios(searchTerminalConfig).then(function (res) {
                                let terminals = res.data.data.results;
                                for (let j = 0; j < terminals.length; j++) {
                                    jeremy.tree[i].terminals.push(terminals[j]);
                                }
                            })
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        computed: {}
    };
</script>

