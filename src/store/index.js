import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tridKey: ""
    },
    mutations: {
        changeTridKey: function (state, tridKey) {
            state.tridKey = tridKey;
            localStorage.tridKey = tridKey
        },
    },
    actions: {},
    modules: {}
})
