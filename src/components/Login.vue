<template>
    <div>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
        <button @click="getUser">GetUser</button>
    </div>
</template>

<script>

    import { fbApp  } from '@/configs/firebase'
    import firebase from 'firebase'
    import * as types from '@/store/mutation-types'

    export default {
        mounted(){
        },
        methods: {
             getUser(){
                var user = firebase.auth().currentUser;
                console.log(user)   
             },
            logout(){
                let vm = this
                firebase.auth().signOut().then(function() {
                    vm.$store.commit(types.UNSET_AUTHENTICATED_USER)
                }).catch(function(error) {
                })
             },
            login(){
                    let provider = new firebase.auth.GoogleAuthProvider()
                    firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log('auth success ', user)
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    console.log('auth fail')
                })
            }
        }
    }
</script>

<style>
</style>
