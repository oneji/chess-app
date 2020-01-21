<template>
    <div>
        <v-select
            v-model="playersToParticipate"
            :items="playersList"
            item-text="value"
            item-value="value"
            label="Choose players"
            multiple
            box
            hide-details 
            class="mb-3"
        >
            <template slot="selection" slot-scope="data">
                <v-chip
                    :selected="data.selected"
                    :key="JSON.stringify(data.item.value)"
                    close
                    class="chip--select-multi"
                    @input="data.parent.selectItem(data.item.value)"
                >
                <v-avatar>
                    <img :src="data.item.photo !== null ? baseURL + '/' +  data.item.photo : 'images/default_user.png'">
                </v-avatar>
                    {{ data.item.text }}
                </v-chip>
            </template>
            <template slot="item" slot-scope="data">
                <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                    <v-list-tile-avatar>
                        <img :src="data.item.photo !== null ? baseURL + '/' + data.item.photo : 'images/default_user.png'">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="data.item.text"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="data.item.country"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </template>
            </template>
        </v-select>
        <v-btn 
            color="success" 
            block 
            outline 
            class="mb-3"
            @click="addPlayerToParticipants">   
            Add
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        competition() {
            return this.$store.getters['competitions/getCompetition'];
        },

        playersList() {
            let players = this.$store.getters['players/getPlayers'];
            let parsedPlayers = [];

            for(let i = 0; i < players.length; i++) {
                parsedPlayers.push({
                    text: players[i].playerName,
                    value: players[i]._id,
                    photo: players[i].playerPhoto,
                    country: players[i].playerCountry
                });
            }

            return parsedPlayers;
        },

        baseURL() {
            return process.env.VUE_APP_API_URL;
        },

        icon () {
            return 'home'
        }
    },
    data() {
        return {
            playersToParticipate: [],
        }
    },
    methods: {
        ...mapActions('players', [
            'getPlayers'
        ]),

        addPlayerToParticipants() {
            this.$store.dispatch('competitions/addPlayers', this.playersToParticipate);
            this.playersToParticipate = [];
        }
    },
    created() {
        this.getPlayers();
    }
}
</script>

<style>

</style>
