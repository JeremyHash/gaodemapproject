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
                            @click="handleTerminalClick(terminal.tid)"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="tericon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{'id: '+terminal.tid}}
                                <br>
                                {{'name: '+terminal.name}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{terminal.desc}}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-alert type="error" v-else>
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
                tericon: 'mdi-chip',
                tree: [],
            }
        },
        methods: {
            handleTerminalClick: function (tid) {
                let requestLineAddr = 'https://tsapi.amap.com/v1/track/terminal/trsearch?key=aebd43e54a7517f9dfce0467d6a84807&sid=165050&tid=' + tid + '&trid=20&pagesize=999';
                this.$store.commit("changeRequestLineAddr", requestLineAddr);
                this.$router.replace("/");
            }
        },
        mounted() {
            if (this.isLogin === false) {
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
        computed: {
            isLogin: function () {
                let isLogin = this.$store.state.isLogin;
                return isLogin === 'true' || isLogin === true;
            }
        }
    };
</script>

