import * as types from './mutation-types'
import firebase from 'firebase'

export const setAuthenticatedUser = ({commit}) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            commit(types.SET_AUTHENTICATED_USER, {
                authenticatedUser: user
            })
        }
    })
}
