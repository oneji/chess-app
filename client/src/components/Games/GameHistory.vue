<template>
    <v-layout row>
        <v-flex>
            <v-data-table
                :headers="[{ text: 'Whites', value: '' }]"
                :items="whitesMoves"
                hide-actions
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td 
                        :class="boardGoToIdx === props.item.value ? 'game-history-item--choose' : null"
                        @click="goTo(props.item.value)"
                    >{{ props.item.name }}</td>
                </template>
            </v-data-table>
        </v-flex>
        <v-flex>
            <v-data-table
                :headers="[{ text: 'Blacks', value: '' }]"
                :items="blacksMoves"
                hide-actions
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td 
                        :class="boardGoToIdx === props.item.value ? 'game-history-item--choose' : null"
                        @click="goTo(props.item.value)"
                    >{{ props.item.name }}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        items: Array
    },
    data () {
      return {
        filteredHistory: [],
        whitesMoves: [],
        blacksMoves: []
      }
    },
    computed: {
        boardGoToIdx() {
            return this.$store.getters['games/getBoardGoToIdx'];
        }
    },
    methods: {
        goTo(idx) {
            this.$store.dispatch('games/setBoardGoToIdx', idx);
        }
    },
    created() {
        for(let i = 0; i < this.items.length; i++) {
            if(i % 2 === 0) {
                this.whitesMoves.push({
                    name: this.items[i],
                    value: i
                });
            } else if(i % 2 === 1) {
                this.blacksMoves.push({
                    name: this.items[i],
                    value: i
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-history-item {
        cursor: pointer;
        transition: .3s all ease;
    }
    .game-history-item--choose {
        background: #616161;
    }
</style>