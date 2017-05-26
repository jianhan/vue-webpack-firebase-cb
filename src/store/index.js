import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import * as types from './mutation-types'
import * as Cookies from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
