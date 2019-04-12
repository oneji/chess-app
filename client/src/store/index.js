import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Getters, Mutations and Actions
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// Modules
import authModule from './modules/auth'
import competitionsModule from './modules/competitions'

export default new Vuex.Store({
    modules: {
        auth: authModule,
        competitions: competitionsModule
    },
    state: {
        snackbar: {
            color: '',
            active: false,
            text: ''
        },
        lastVisitedPage: null,
        contentLoading: false,
        mobileNav: false
    },
    getters,
    mutations,
    actions
})