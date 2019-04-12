<template>
    <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12>
            <v-card>
                <v-card-title primary-title>
                    <chessboard 
                        :free="true" />
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { chessboard } from 'vue-chessboard'

export default {
    components: {
        chessboard
    },
}
</script>

<style>

</style>
