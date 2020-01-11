<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm4 md4 lg4>
            <PlayersList :items="competition.players || []" />
        </v-flex>

        <v-flex xs12 sm8 md8 lg8>
            <transition name="slide-x-transition" mode="out-in">
                <v-btn color="success" @click="start" v-if="!competition.started">Start competition</v-btn>
                <v-btn color="success" block v-else class="mb-3">Upcoming games</v-btn>
            </transition>
            <GamesList 
                :games="games" />
        </v-flex>
    </v-layout>
</template>

<script>
import axios from '@/axios'
import PlayersList from '@/components/CompetitionPlayers/PlayersList';
import GamesList from '@/components/Games/GamesList'
import { mapActions } from 'vuex'

export default {
    components: {
        PlayersList,
        GamesList
    },
    computed: {
        API_URL() {
            return process.env.VUE_APP_API_URL;
        },

        competition() {
            return this.$store.getters['competitions/getCompetition'];
        },

        games() {
            return this.$store.getters['games/getGames'];
        }
    },
    methods: {
        ...mapActions('competitions', [
            'startCompetition'
        ]),
        start() {
            this.$store.dispatch('competitions/startCompetition', this.competition._id)
                .then(() => {
                    this.$store.dispatch('games/getCompetitionGames', this.competition._id);
                });
        }
    },
    created() {
        this.$store.dispatch('competitions/getCompetitionBySlug', this.$route.params.slug)
            .then(() => {
                this.$store.dispatch('games/getCompetitionGames', this.competition._id);
            });
    }
}
</script>

<style>

</style>
