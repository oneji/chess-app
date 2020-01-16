<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm12 md3 lg3>
            <PlayersList :items="competition.players" />
        </v-flex>

        <v-flex xs12 sm12 md9 lg9>
            <transition name="slide-x-transition" mode="out-in">
                <v-btn color="success" @click="start" v-if="!competition.started">Start competition</v-btn>
                <v-btn color="success" block v-else class="mb-3">Upcoming games</v-btn>
            </transition>

            <v-progress-circular v-if="gamesLoading"
                :size="60"
                color="primary"
                indeterminate
            ></v-progress-circular>
            <transition name="slide-y-reverse-transition" mode="out-in">
                <GamesList v-if="!gamesLoading" :games="games" />
            </transition>

            <!-- <v-responsive color="grey lighten-2" v-if="!competition.started">
                <v-container fill-height>
                    <v-layout justify center align-center>
                        <v-flex class="text-md-center">
                            <img style="width: 220px; display: block; margin: 0 auto;" src="/images/chess-club-logo.svg" alt="">
                            <v-divider class="my-3"></v-divider>
                            <h3 class="display-3">Add players and start competition!</h3>
                            <v-divider class="my-3"></v-divider>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-responsive> -->
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

import PlayersList from '@/components/CompetitionPlayers/PlayersList';
import GamesList from '@/components/Games/GamesList'
import { ContentLoader } from "vue-content-loader"

export default {
    components: {
        PlayersList,
        GamesList,
        ContentLoader
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
    data() {
        return {
            gamesLoading: true
        }
    },
    methods: {
        ...mapActions('competitions', [
            'startCompetition'
        ]),
        start() {
            this.gamesLoading = true;
            this.$store.dispatch('competitions/startCompetition', this.competition._id)
                .then(() => {
                    this.$store.dispatch('games/getCompetitionGames', this.competition._id)
                        .then(() => {
                            this.gamesLoading = false;
                        });
                });
        }
    },
    created() {
        this.$store.dispatch('competitions/getCompetitionBySlug', this.$route.params.slug)
            .then(() => {
                this.$store.dispatch('games/getCompetitionGames', this.competition._id)
                .then(() => {
                    this.gamesLoading = false;
                });
            });
    }
}
</script>

<style>

</style>
