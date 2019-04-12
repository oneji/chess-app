<template>
    <h1>{{ $route.params.slug }}</h1>
</template>

<script>
import axios from '@/axios'

export default {
    components: {
        
    },
    data() {
        return {
            showFAB: false
        }
    },
    created() {
        this.showFAB = true;
    }
}
</script>

<style>

</style>
