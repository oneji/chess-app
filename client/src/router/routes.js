// Layouts
import MainLayout from '@/layouts/MainLayout'
// Pages
import Login from '@/components/Login'
import CreateCompetition from '@/views/competitions/create'
import Competitions from '@/views/competitions/competitions'
import Competition from '@/views/competitions/competition'
import Chess from '@/views/chess'

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { 
        path: '/', name: 'Home', component: MainLayout, meta: { requiresAuth: true },
        children: [
            { path: 'competition/create', name: 'CreateCompetition', component: CreateCompetition, meta: { requiresAuth: true } },
            { path: 'competitions', name: 'Competitions', component: Competitions, meta: { requiresAuth: true } },
            { path: 'competitions/:slug', name: 'Competition', component: Competition, meta: { requiresAuth: true } },
            { path: 'chess', name: 'Chess', component: Chess, meta: { requiresAuth: true } },
        ] 
    },
]

export default routes