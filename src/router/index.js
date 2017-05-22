import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import AdminLayout from '@/components/AdminLayout'
import AddCourse from '@/components/AddCourse'
import store from '@/store'
import firebase from 'firebase'

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
                    name: 'add-course'
                }
            ]
        }
    ]
})
// protect authenicated content
router.beforeEach((to, from, next) => {
    // the idea situation is get from store, but it is very difficult to do so
    if(to.fullPath.startsWith('/admin'))
    {
        firebase.auth().onAuthStateChanged(function(user) {
            // user has logged in
            if (user) {
                next()
            }
            else{
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
