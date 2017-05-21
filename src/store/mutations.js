import * as types from './mutation-types'

export default {
    [types.SET_AUTHENTICATED_USER] (state, { authenticatedUser }) {
        state.authenticatedUser = authenticatedUser
    },
    [types.UNSET_AUTHENTICATED_USER] (state) {
        state.authenticatedUser = null
    }
}
