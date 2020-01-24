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
            <v-container fluid grid-list-md class="pt-2">
                <transition name="slide-x-transition" mode="out-in">
                    <router-view />
                </transition>
                <!-- Create project modal and fab -->
                <CreateCompetition 
                    v-if="$store.getters['competitions/createCompetition']" />
                <CreatePlayer
                    v-if="$store.getters['players/createPlayer']" />
                <FinishGameForm />
                <NextRoundModal />
            </v-container>
        </v-content>
        <!-- Footer -->
        <v-footer app fixed class="pa-3">
            <div>Chess Club &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Loading from '@/components/Loading'
import Breadcrumbs from '@/components/Breadcrumbs'
import CreateCompetition from '@/components/Competitions/CreateCompetition'
import CreatePlayer from '@/components/Players/CreatePlayer'
import FinishGameForm from '@/components/Games/FinishGameForm'
import NextRoundModal from '@/components/Competitions/NextRoundModal'

export default {
    components: {
        Toolbar,
        Loading,
        Breadcrumbs,
        CreateCompetition,
        CreatePlayer,
        FinishGameForm,
        NextRoundModal
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
