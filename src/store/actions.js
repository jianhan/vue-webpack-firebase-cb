import * as types from './mutation-types'
import firebase from 'firebase'
import * as Cookies from 'js-cookie'

export const setAuthenticatedUser = ({commit}) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            commit(types.SET_AUTHENTICATED_USER, {
                authenticatedUser: user
            })
            Cookies.set('authenticatedUser', user)
        }
        else
        {
            Cookies.remove('authenticatedUser')
        }
    })
}
