<template>
    <v-menu dark :close-on-content-click="false" offset-x transition="slide-y-reverse-transition">
        <v-btn depressed fab small color="secondary" slot="activator">
            <v-icon>person</v-icon>
        </v-btn>
        <v-card>
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-btn depressed fab small color="secondary">
                            <img src="images/default_user.png" alt="User photo" />
                        </v-btn>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Hello, {{ user.username }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ user.username }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon white>lock_open</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Change password</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$store.dispatch('auth/logout')">
                    <v-list-tile-action>
                        <v-icon white>power_settings_new</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters['auth/getUser'] || {};
        }
    }
}
</script>

<style>

</style>
