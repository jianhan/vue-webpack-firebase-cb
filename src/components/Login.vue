<template>
    <div>
        <div class="content overflow-hidden">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <!-- Login Block -->
                    <div v-bind:class="{ 'block-opt-refresh': isLoading }" class="block block-themed animated fadeIn">
                        <div class="block-header bg-primary">
                            <ul class="block-options">
                                <li>
                                    <a href="base_pages_reminder.html">Forgot Password?</a>
                                </li>
                                <li>
                                    <a href="base_pages_register.html" data-toggle="tooltip" data-placement="left" title="New Account"><i class="si si-plus"></i></a>
                                </li>
                            </ul>
                            <h3 class="block-title">Login</h3>
                        </div>
                        <div class="block-content block-content-full block-content-narrow">
                            <!-- Login Title -->
                            <flash-message />
                            <h1 class="h2 font-w600 push-30-t push-5">OneUI</h1>
                            <p>Welcome, please login.</p>
                            <div class="alert alert-warning alert-dismissable" v-if="hasError">
                                <button @click="clearError" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                <p><i class="fa fa-warning"></i> {{ error.message }}</p>
                            </div>

                            <!-- END Login Title -->
                            <!-- Login Form -->
                            <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
                            <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                            <form v-on:submit.prevent class="js-validation-login form-horizontal push-30-t push-50" ref="loginForm">
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-primary">
                                            <input class="form-control" type="email" v-model="email" name="email" required>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="form-material form-material-primary floating">
                                            <input class="form-control required" type="password" v-model="password" name="password">
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <button class="btn btn-block btn-primary" @click="login">
                                            <i class="si si-login pull-right"></i> Log in
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <!-- END Login Form -->
                        </div>
                    </div>
                    <!-- END Login Block -->
                </div>
            </div>
        </div>
        <!-- END Login Content -->

        <!-- Login Footer -->
        <div class="push-10-t text-center animated fadeInUp">
            <small class="text-muted font-w600"><span class="js-year-copy"></span> &copy; OneUI 3.1</small>
        </div>
        <!-- END Login Footer -->
    </div>
</template>

<script>

    import { fbApp  } from '@/configs/firebase'
    import firebase from 'firebase'
    import * as types from '@/store/mutation-types'
    import basePagesLogin from '@/assets/js/pages/base_pages_login.js'
    import _ from 'lodash'
    import { mapActions } from 'vuex'
    require('jquery-validation')

    export default {
        data: function(){
            return {
                email: '',
                password: '',
                error: {},
                isLoading: false
            }
        },
        computed: {
            hasError: function() {
                return !_.isEmpty(this.error)
            }
        },
        mounted(){
            
        },
        methods: {
             clearError() {
                this.error = {}
             },
            login(){
                let vm = this
                vm.clearError()
                let loginForm = this.$refs.loginForm
                $(loginForm).validate()
                if($(loginForm).valid())
                {
                    vm.isLoading = true
                    firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(result => {
                        vm.isLoading = false
                        vm.$router.push({ name: 'admin.dashboard' })
                    })
                    .catch(function(error) {
                        vm.error = error
                        vm.isLoading = false
                    })
                }

                /*let provider = new firebase.auth.GoogleAuthProvider()
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
                })*/
            }
        }
    }
</script>
