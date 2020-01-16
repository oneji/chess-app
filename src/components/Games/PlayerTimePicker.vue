<template>
    <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="playerTime"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
    >
        <v-text-field
            slot="activator"
            v-model="playerTime"
            :label="playerType | capitalLetter"
            prepend-icon="access_time"
            readonly
        ></v-text-field>
        
        <v-time-picker 
            @change="setPlayerTime" 
            v-model="playerTime" 
            scrollable 
            format="24hr"
        ></v-time-picker>
    </v-menu>
</template>

<script>
export default {
    props: {
        playerType: String
    },
    filters: {
        capitalLetter(value) {
            if(!value) return '';

            return value.charAt(0).toUpperCase() + value.slice(1) + ' time'
        }
    },
    data() {
        return {
            playerTime: null,
            menu: false
        }
    },
    methods: {
        setPlayerTime() {
            this.$refs.menu.save(this.playerTime);
            this.$emit('set', {
                playerType: this.playerType,
                playerTime: this.playerTime
            });
        }
    }
}
</script>

<style lang="scss">
    
</style>