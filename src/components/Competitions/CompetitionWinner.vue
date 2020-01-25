<template>
    <v-card class="competition-winner-card">
        <v-card-title>
            <v-container fill-height>
                <v-layout>
                    <v-flex xs12 sm12 md12 lg12 class="text-xs-center">
                        <img 
                            class="competition-winner-photo"
                            :src="winner !== null ? API_URL + '/' + winner.playerPhoto : '/images/default_user.png'" alt="No photo">
                        <v-divider class="my-3"></v-divider>

                        <h3 class="headline" v-if="winner !== null">
                            * {{ winner.playerName }} * <br> 
                            is the winner of the competition!
                        </h3>
                        <h3 class="headline" v-else>
                            Champion is still unknown!
                        </h3>

                        <v-divider class="my-3"></v-divider>
                        <PlayersMarquee :items="participants" />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-title>
    </v-card>
</template>

<script>
import PlayersMarquee from '../Players/PlayersMarquee'

export default {
    components: {
        PlayersMarquee
    },
    computed: {
        API_URL() {
            return process.env.VUE_APP_API_URL;
        },
    },
    props: {
        winner: Object,
        participants: Array
    }
}
</script>

<style lang="scss" scoped>
    .competition-winner-card {
        border: 1px solid #4caf50;
    }

    .competition-winner-photo {
        width: 200px;
        display: block;
        margin: 0 auto;
        border: 2px solid rgba(255, 255, 255, 0.12);
        border-radius: 100%;
        padding: 7px;
    }
</style>