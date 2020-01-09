<template>
    <div>        
        <!-- Toolbar -->
        <Toolbar />        
        <!-- Main content -->
        <v-content>
            <!-- Breadcrumbs -->
            <Breadcrumbs />
            <!-- Content loading -->
            <Loading v-if="$store.getters.getContentLoading" />
            <v-container fluid grid-list-md>
                <transition name="slide-x-transition" mode="out-in">
                    <router-view />
                </transition>
                <!-- Create project modal and fab -->
                <CreateCompetition 
                    v-if="$store.getters['competitions/createCompetition']" />
                <CreatePlayer
                    v-if="$store.getters['players/createPlayer']" />
            </v-container>
        </v-content>
        <!-- Footer -->
        <v-footer app fixed>
            <span>&copy; 2018</span>
        </v-footer>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import CreateCompetition from '@/components/Competitions/CreateCompetition'
import CreatePlayer from '@/components/Players/CreatePlayer'
import Loading from '@/components/Loading'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
    components: {
        Toolbar,
        CreateCompetition,
        CreatePlayer,
        Loading,
        Breadcrumbs
    },
    computed: {

    },
    data() {
        return {
            
        }
    },
    watch:{
        $route (to, from){
            this.$store.dispatch('contentLoading', true);
        }
    } 
}
</script>

<style>

</style>
