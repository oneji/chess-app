<template>
    <div>
        <!-- Toolbar -->
        <Toolbar />
        <!-- Main content -->
        <v-content>
            <v-container fluid grid-list-md v-if="!$store.getters.getContentLoading">
                <transition name="slide-x-transition" mode="out-in">
                    <router-view  />
                </transition>
                <!-- Create project modal and fab -->
                <CreateCompetition 
                    v-if="$store.getters['competitions/createCompetition']" />
            </v-container>
        </v-content>
        <!-- Footer -->
        <v-footer app fixed>
            <span>&copy; 2018</span>
        </v-footer>
        <!-- Content loading -->
        <Loading />
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import CreateCompetition from '@/components/Competitions/CreateCompetition'
import Loading from '@/components/Loading'

export default {
    components: {
        Toolbar,
        CreateCompetition,
        Loading
    },
    computed: {

    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
    .v-content {
        height: 100vh;
    }
</style>
