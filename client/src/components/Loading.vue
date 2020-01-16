<template>
    <div class="loading-block">
        <v-progress-circular
            :size="60"
            color="primary"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loading-block {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>
