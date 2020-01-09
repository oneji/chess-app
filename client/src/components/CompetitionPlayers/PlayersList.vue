<template>
    <div>
        <PlayersSelector />

        <v-card v-if="items.length !== 0">
            <v-list subheader class="participants-list">
                <v-subheader>List of participants</v-subheader>
                    <v-list-tile
                        v-for="(item, idx) in items"
                        :key="idx"
                        avatar
                        @click="() => {}"
                    >
                        <v-list-tile-avatar>
                            <img 
                                :src="item.playerPhoto === null 
                                        ? 'images/default_user.png' 
                                        : API_URL + '/' + item.playerPhoto" 
                                    :alt="`${item.playerName}'s photo`" />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.playerName"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn small flat fab>
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>                
            </v-list>
        </v-card>

        <EmptySet 
            v-else
            text="No competition participants at the moment." />
    </div>
</template>

<script>
import PlayersSelector from './PlayersSelector'
import EmptySet from '../EmptySet'

export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        API_URL() {
            return process.env.VUE_APP_API_URL;
        }
    },
    components: {
        PlayersSelector,
        EmptySet
    }
}
</script>

<style lang="scss" scoped>
    // .participants-list {
    //     height: 50vh;
    //     overflow-y: scroll;
    // }
</style>
