<template>
    <table class="game-history-table">
        <thead>
            <th>Whites</th>
            <th>Blacks</th>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
                <td><span v-if="(idx + 1) % 2 === 1">{{ item }}</span></td>
                <td><span v-if="(idx + 1) % 2 === 0">{{ item }}</span></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        items: Array
    },
    data () {
      return {
        filteredHistory: []
      }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
    .game-history-table {
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: center;
    }
</style>