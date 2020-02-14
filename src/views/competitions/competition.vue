<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <div class="mobile-control-buttons">
            <v-fab-transition>
                <v-btn
                    dark fab fixed bottom color="primary"
                    style="right: 80px;"
                    @click="nextRoundModal(true)"
                    v-show="!competition.finished">
                    <v-icon>send</v-icon>
                </v-btn>
            </v-fab-transition>

            <v-fab-transition>
                <v-btn
                    dark fab fixed bottom right color="red"
                    @click="finishCompetition"
                    v-show="!competition.finished">
                    <v-icon>stop</v-icon>
                </v-btn>
            </v-fab-transition>
        </div>

        <v-flex xs12 sm12 md3 lg3 v-if="!competition.started">
            <PlayersList :items="competition.players" />
        </v-flex>

        <v-flex xs12 sm12 md9 lg9 v-if="!competition.started">
            <div class="start-wrapper">
                <v-card>
                    <v-card-title>
                        <v-container fill-height>
                            <v-layout justify center align-center>
                                <v-flex class="text-xs-center">
                                    <img 
                                        style="width: 180px; display: block; margin: 0 auto;" 
                                        :src="competition.competitionLogo !== null ? API_URL + '/' + competition.competitionLogo : '/images/chess-club-logo.svg'" alt="">
                                    <v-btn color="success" @click="start">Start competition</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-title>
                </v-card>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md4 lg4 v-if="competition.started">
            <CompetitionWinner :winner="competition.champion" :participants="competition.players" />
        </v-flex>

        <v-flex xs12 sm12 md8 lg8 v-if="competition.started">
            <div class="games-loading-spinner" v-if="gamesLoading">
                <v-progress-circular
                    :size="60"
                    color="primary"
                    indeterminate                
                ></v-progress-circular>
            </div>

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
import CompetitionWinner from '@/components/Competitions/CompetitionWinner'

export default {
    components: {
        PlayersList,
        GamesList,
        PlayersMarquee,
        CompetitionWinner
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
            'startCompetition', 'setNextRoundModal', 'finish'
        ]),
        start() {
            if(this.competition.players.length > 0) {
                this.gamesLoading = true;
                this.$store.dispatch('competitions/startCompetition', this.competition._id)
                    .then(() => {
                        this.$store.dispatch('games/getCompetitionGames', this.competition._id)
                            .then(() => {
                                this.gamesLoading = false;
                            });
                    });
            } else {
                this.$store.dispatch('snackbar', {
                    color: 'warning',
                    active: true,
                    text: 'Add players before starting the competition.'
                });
            }
            
        },
        finishCompetition() {
            let finalGame = this.games.final.items[0];

            if(finalGame !== undefined && finalGame.ended) {
                this.finish(this.competition._id.toString());
            } else {
                this.$store.dispatch('snackbar', {
                    color: 'warning',
                    active: true,
                    text: 'You can\'t finish the competition without playing the final.'
                });
            }
        },
        nextRoundModal(status) {
            let allGamesFinished = true;
            for (let game in this.games) {
                let items = this.games[game].items.map(game => {
                    if(!game.ended) {
                        allGamesFinished = false;
                    }
                })
            }

            if(allGamesFinished) {
                this.setNextRoundModal(status);
            } else {
                this.$store.dispatch('snackbar', {
                    color: 'warning',
                    active: true,
                    text: 'Finish the games before moving to the next stage.'
                });
            }
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

<style lang="scss">
    .games-loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

    .start-wrapper {
        background-image: url('../../../public/images/start.jpg');
        background-size: cover;
        background-position: center center;

        div {
            background-color: transparent !important;
        }
    }
</style>
