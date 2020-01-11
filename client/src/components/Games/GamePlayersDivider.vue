<template>
    <div class="game-players-divider">
        <div class="game-players-divider-text">
            <AppBadge :text="`Game ${gameNumber}`" color="primary" />
        </div>
        <div class="game-players-divider-item"></div>
        <div class="game-players-divider-text" v-if="!started">
            <v-btn color="warning" small @click="$emit('sex')">Start game</v-btn>
        </div>
        <div class="game-players-divider-text" v-if="started">
            <AppBadge text="Started" color="success" />
        </div>
    </div>
</template>

<script>
import AppBadge from '../AppBadge'
export default {
    props: {
        gameNumber: Number,
        started: Boolean
    },
    components: {
        AppBadge
    }
}
</script>

<style lang="scss" scoped>
    .game-players-divider {
        height: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        &-item {
            border: 1px solid rgba(255,255,255,0.12);
            height: 1px;
            width: 100%;
            border-radius: 10px;
            margin: 5px 0;
        }
    }
</style>