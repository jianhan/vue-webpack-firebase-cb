import Vue from 'vue'
import firebase from 'firebase'
import VueFire from 'vuefire'
import { firebaseConfigs } from '@/.env'
Vue.use(VueFire)
let firebaseDb = firebase.initializeApp(firebaseConfigs).database()
export default firebaseDb
