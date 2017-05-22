import * as types from './mutation-types'

export default {
    [types.SET_AUTHENTICATED_USER] (state, { authenticatedUser }) {
        state.authenticatedUser = authenticatedUser
    },
    [types.UNSET_AUTHENTICATED_USER] (state) {
        state.authenticatedUser = null
    },
    [types.SET_FLASH_MESSAGE] (state, { flashMessage }) {
        state.flashMessage = flashMessage
    },
    [types.UNSET_FLASH_MESSAGE] (state) {
        state.flashMessage = null
    }
}
