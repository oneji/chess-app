<template>
    <v-btn-toggle class="chess-board-controls">
        <v-btn flat @click="$emit('start')">
            <v-icon>skip_previous</v-icon>
        </v-btn>
        <v-btn flat @click="$emit('undo')">
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn flat @click="$emit('next')">
            <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
        <v-btn flat @click="$emit('finish')">
            <v-icon>skip_next</v-icon>
        </v-btn>
        <v-btn flat @click="$emit('swap-side')">
            <v-icon>cached</v-icon>
        </v-btn>
        <v-btn flat @click="$emit('save')">
            <span>Save</span>
            <v-icon>save</v-icon>
        </v-btn>
        <v-btn flat loading v-if="loading">
            <v-icon>save</v-icon>
        </v-btn>
    </v-btn-toggle>    
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .chess-board-controls {
        margin-bottom: 5px;
    }
</style>