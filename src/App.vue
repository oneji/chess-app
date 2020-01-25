<template>
    <v-app :dark="theme === 'dark' ? true : false">
        <transition name="slide-x-transition" mode="out-in">
            <router-view />
        </transition>

        <Snackbar />
    </v-app>
</template>

<script>
import Snackbar from '@/components/Snackbar'

export default {
    name: 'App',
    components: {
        Snackbar
    },
    computed: {
        theme() {
        return localStorage.getItem('theme');
        }
    },
    data () {
        return {
        
        }
    }
}
</script>
