import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userKey: "undefined",
        isLogin: false,
        requestLineAddr: '',
    },
    mutations: {
        changeUserKey: function (state, userKey) {
            state.userKey = userKey;
            localStorage.userKey = userKey
        },
        changeIsLogin: function (state, isLogin) {
            state.isLogin = isLogin;
            localStorage.isLogin = isLogin
        },
        changeRequestLineAddr: function (state, requestLineAddr) {
            state.requestLineAddr = requestLineAddr;
        },
    },
    actions: {},
    modules: {}
})
