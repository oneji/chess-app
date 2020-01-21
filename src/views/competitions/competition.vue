<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm12 md3 lg3 v-if="!competition.started">
            <PlayersList :items="competition.players" />
        </v-flex>

        <v-flex xs12 sm12 md9 lg9>
            <v-responsive color="grey lighten-2" v-if="!competition.started">
                <v-container fill-height>
                    <v-layout justify center align-center>
                        <v-flex class="text-md-center">
                            <img 
                                style="width: 180px; display: block; margin: 0 auto;" 
                                :src="competition.competitionLogo !== null ? API_URL + '/' + competition.competitionLogo : '/images/chess-club-logo.svg'" alt="">
                            <v-divider class="my-3"></v-divider>
                            <h3 class="display-1">Add players and start competition!</h3>
                            <v-divider class="my-3"></v-divider>
                            <v-btn color="success" @click="start" v-if="!competition.started">Start competition</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-responsive>
        </v-flex>

        <v-flex xs12 sm12 md12 lg12 v-if="competition.started">
            <v-layout row wrap>
                <v-flex>
                    <v-btn color="error" block class="mb-3" >Finish competition</v-btn>
                </v-flex>
                <v-flex>
                    <v-btn color="success" block class="mb-3" >Qualification games</v-btn>
                </v-flex>
                <v-flex>
                    <v-btn color="primary" block class="mb-3" >Go to the next stage</v-btn>
                </v-flex>
            </v-layout>

            <PlayersMarquee :items="competition.players" />
            
            <v-progress-circular v-if="gamesLoading"
                :size="60"
                color="primary"
                indeterminate
            ></v-progress-circular>

            <transition name="slide-y-reverse-transition" mode="out-in">
                <GamesList v-if="!gamesLoading" :games="games" />
            </transition>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

import PlayersList from '@/components/CompetitionPlayers/PlayersList';
import GamesList from '@/components/Games/GamesList'
import PlayersMarquee from '@/components/Players/PlayersMarquee'

export default {
    components: {
        PlayersList,
        GamesList,
        PlayersMarquee
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
