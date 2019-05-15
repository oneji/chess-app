import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store/index'

Vue.use(Router)

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    
    if (to.meta.requiresAuth && !isAuthenticated) {
        store.commit('setLastVisitedPage', from.path);
        next('/login')
    } else {
        next()
    }

    if(isAuthenticated && to.name === 'Login') {
        next(from.path);
    }
})

export default router
