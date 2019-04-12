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
                            <v-icon>person</v-icon>
                        </v-btn>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Привет</v-list-tile-title>
                        <v-list-tile-sub-title>Юзер</v-list-tile-sub-title>
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
                        <v-list-tile-title>Изменить пароль</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon white>power_settings_new</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Выйти</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>
