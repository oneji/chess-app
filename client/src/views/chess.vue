<template>
    <v-layout row wrap>
        <v-flex xs12 sm4 md4 lg4>
            <v-card>
                <v-card-title>
                    <ChessBoard />
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import ChessBoard from '@/components/Chess/ChessBoard'

export default {
    components: {
        ChessBoard
    }
}
</script>

<style>
    
</style>
