<template>
    <div v-if="!$store.getters.getContentLoading">
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
        <EmptySet 
            v-else 
            text="You haven't created any competitions yet." />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Competition from '@/components/Competitions/Competition'
import EmptySet from '@/components/EmptySet'

export default {
    components: {
        Competition,
        EmptySet
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
    methods: {
        ...mapActions('competitions', [
            'getCompetitions',
            'setCreateCompetition'
        ])
    },
    created() {
        this.getCompetitions();
        this.setCreateCompetition(true);
    },
    destroyed() {
        this.setCreateCompetition(false);
    },
}
</script>

<style>

</style>
