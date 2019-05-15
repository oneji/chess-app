// Layouts
import MainLayout from '@/layouts/MainLayout'
// Pages
import Login from '@/components/Login'
import Competitions from '@/views/competitions/competitions'
import Competition from '@/views/competitions/competition'
import Chess from '@/views/chess'
import Players from '@/views/players'

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { 
        path: '/', name: 'Home', component: MainLayout, meta: { requiresAuth: true },
        children: [
            { path: 'competitions', name: 'Competitions', component: Competitions, meta: { requiresAuth: true, } },
            { path: 'competitions/:slug', name: 'Competition', component: Competition, meta: { requiresAuth: true, } },
            { path: 'chess', name: 'Chess', component: Chess, meta: { requiresAuth: true, } },
            { path: 'players', name: 'Players', component: Players, meta: { requiresAuth: true, } },
        ] 
    },
]

export default routes