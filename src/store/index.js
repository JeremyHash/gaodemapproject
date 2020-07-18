import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userKey: "",
        isLogin:false
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
    },
    actions: {},
    modules: {}
})
