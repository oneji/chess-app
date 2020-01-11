<template>
    <span :class="`app-badge app-badge-${color}`">{{ text }}</span>
</template>

<script>
export default {
    props: {
        text: String,
        color: String
    }
}
</script>

<style lang="scss" scoped>
    .app-badge {
        background: #5cbbf6;
        padding: 2px 6px;
        border: none;
        border-radius: 2px;
        text-shadow: none;
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
        white-space: nowrap;

        &-success {
            background: #4caf50 !important;
        }

        &-primary {
            background: #1867c0 !important;
        }
    }
</style>