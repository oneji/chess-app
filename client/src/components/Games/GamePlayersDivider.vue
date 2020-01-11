<template>
    <div class="game-players-divider">
        <div class="game-players-divider-text">Game {{ gameNumber }}</div>
        <div class="game-players-divider-item"></div>
    </div>
</template>

<script>
export default {
    props: {
        gameNumber: {
            type: Number
        }
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
        }
    }
</style>