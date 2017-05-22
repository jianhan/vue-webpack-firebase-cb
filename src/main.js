// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// Use vuefire
import VueFire from 'vuefire'
Vue.use(VueFire)

Vue.config.productionTip = false

// Setup all javascript needed for oneui to run
import $ from 'jquery'
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.js'
import jquerySlimScroll from './assets/js/core/jquery.slimscroll.min.js'
import jqueryScrollLock from './assets/js/core/jquery.scrollLock.min.js'
import jqueryAppear from './assets/js/core/jquery.appear.min.js'
import jqueryCountTo from './assets/js/core/jquery.countTo.min.js'
import jqueryPlaceholder from './assets/js/core/jquery.placeholder.min.js'
import jqueryCookie from './assets/js/core/js.cookie.min.js'
import appJs from './assets/js/app.js'
// Setup all css for one ui to run
import bootstrapCss from './assets/css/bootstrap.min.css'
import oneuiCss from './assets/css/oneui.css'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App },
})
