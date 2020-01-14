<template>
    <div>
        <h1>Home page!</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    created() {
        this.$store.dispatch('contentLoading', false);
    }
}
</script>

<style lang="">
    
</style>