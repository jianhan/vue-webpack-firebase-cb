import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import AdminLayout from '@/components/AdminLayout'
import AdminAddCourse from '@/components/AdminAddCourse'
import AdminDashboard from '@/components/AdminDashboard'
import AdminListCourses from '@/components/AdminListCourses'
import store from '@/store'
import * as types from '@/store/mutation-types'
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
                    path: 'list-course',
                    component: AdminListCourses,
                    name: 'admin.list-courses'
                },
                {
                    path: 'add-course',
                    component: AdminAddCourse,
                    name: 'admin.add-course'
                },
                {
                    path: 'add-course',
                    component: AdminAddCourse,
                    name: 'admin.add-course'
                },
                {
                    path: 'dashboard',
                    component: AdminDashboard,
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
                store.commit(types.SET_FLASH_MESSAGE, { flashMessage: new FlashMessage('success', 'Welcome back ') })
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
                store.commit(types.SET_FLASH_MESSAGE, { flashMessage: new FlashMessage('info', 'Please enter your username and password to login.') })
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
