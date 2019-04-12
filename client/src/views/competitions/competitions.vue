<template>
    <v-scale-transition 
        group 
        tag="div" 
        class="layout row wrap"
        v-if="competitions.length !== 0"
    >
        <v-flex xs12 sm6 md4 lg4 v-for="competition in competitions" :key="competition._id">        
            <Competition :item="competition" :key="competition._id"/>
        </v-flex>        
    </v-scale-transition>
    <!-- Show if there's no competitions created by the user -->
    <NoCompetitions v-else />
</template>

<script>
import axios from '@/axios'
import Competition from '@/components/Competitions/Competition'
import NoCompetitions from '@/components/Competitions/NoCompetitions'

export default {
    components: {
        Competition,
        NoCompetitions
    },
    computed: {
        competitions() {
            return this.$store.getters['competitions/getCompetitions']
        }
    },
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('competitions/getCompetitions');
        this.$store.dispatch('competitions/setCreateCompetition', true);
    },
    destroyed() {
        this.$store.dispatch('competitions/setCreateCompetition', false);
    },
}
</script>

<style>

</style>
