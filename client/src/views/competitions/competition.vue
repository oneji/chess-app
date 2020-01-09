<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm4 md4 lg4>
            <PlayersList :items="competition.players || []" />
        </v-flex>

        <v-flex xs12 sm4 md4 lg4>

        </v-flex>
    </v-layout>
</template>

<script>
import axios from '@/axios'
import PlayersList from '@/components/CompetitionPlayers/PlayersList';

export default {
    components: {
        PlayersList
    },
    computed: {
        API_URL() {
            return process.env.VUE_APP_API_URL;
        },

        competition() {
            return this.$store.getters['competitions/getCompetition'];
        }
    },
    created() {
        this.$store.dispatch('competitions/getCompetitionBySlug', this.$route.params.slug);
    }
}
</script>

<style>

</style>
