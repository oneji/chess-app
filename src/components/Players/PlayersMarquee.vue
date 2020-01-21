<template>
    <marquee scrollamount="5" direction="left">
        <ul class="players-list">
            <li class="players-list-title">Participants: </li>
            <li v-for="(item, index) in items" :key="index">
                {{ item.playerName }}
            </li>
        </ul>
    </marquee>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scsoped>
    .players-list {
        display: flex;
        width: 100%;
        padding: 0px;

        li {
            margin-right: 25px;

            &:hover {
                text-decoration: none;
            }

            &:first-child {
                list-style-type: none;
            }

            a {
                color: white;
                text-decoration: none;
            }
        }
    }
</style>