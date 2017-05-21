export default {
    isAuthenticated: state => {
        return state.authenticatedUser ? true : false
    }
}
