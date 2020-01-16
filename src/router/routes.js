// Layouts
import MainLayout from '@/layouts/MainLayout'
// Pages
import Login from '@/components/Login'
import Competitions from '@/views/competitions/competitions'
import Competition from '@/views/competitions/competition'
import Players from '@/views/players'
import Game from '@/views/games/game'
import Home from '@/views/home'

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { 
        path: '/', component: MainLayout, meta: { requiresAuth: true },
        children: [
            { path: '/', name: 'HomePage', component: Home, meta: { requiresAuth: true } },
            { path: 'competitions', name: 'Competitions', component: Competitions, meta: { requiresAuth: true, } },
            { path: 'competitions/:slug', name: 'Competition', component: Competition, meta: { requiresAuth: true, } },
            { path: 'players', name: 'Players', component: Players, meta: { requiresAuth: true, } },
            { path: '/games/:id', name: 'Game', component: Game, meta: { requiresAuth: true, } }
        ] 
    },
]

export default routes