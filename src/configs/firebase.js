import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import { firebaseConfigs } from '@/.env'
Vue.use(VueFire)
export default Firebase.initializeApp(firebaseConfigs).database()
