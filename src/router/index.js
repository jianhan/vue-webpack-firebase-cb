import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import AdminLayout from '@/components/AdminLayout'
import AddCourse from '@/components/AddCourse'
import Dashboard from '@/components/AdminDashboard'
import store from '@/store'
import firebase from 'firebase'
import FlashMessage from '@/classes/FlashMessage'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminLayout,
            children: [
                {
                    path: 'add-course',
                    component: AddCourse,
                    name: 'admin.add-course'
                },
                {
                    path: 'dashboard',
                    component: Dashboard,
                    name: 'admin.dashboard'
                }
            ]
        }
    ]
})
// protect authenicated content
router.beforeEach((to, from, next) => {
    if(to.name == 'login')
    {
        firebase.auth().onAuthStateChanged(function(user) {
            // user has logged in
            if (user) {
                store.commit('SET_FLASH_MESSAGE', { flashMessage: new FlashMessage('success', 'Welcome back ') })
                next({ path: '/admin/dashboard' })

            }
        })
    }

    // the idea situation is get from store, but it is very difficult to do so
    if(to.fullPath.startsWith('/admin'))
    {
        firebase.auth().onAuthStateChanged(function(user) {
            // user has logged in
            if (user) {
                next()
            }
            else{
                store.commit('SET_FLASH_MESSAGE', { flashMessage: new FlashMessage('info', 'Please enter your username and password to login.') })
                next({ path: '/login' })
            }
        })
    }
    else
    {
        next()
    }

})
export default router;
