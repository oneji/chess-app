<template>
     <v-card>
        <v-img
          :src="item.playerPhoto !== null ? baseURL + '/' + item.playerPhoto : '/images/no-photo.jpg'"
          height="200px"
          class="player-photo"
        >
            <v-layout column fill-height>
                <v-card-title class="py-2 px-2">
                    <v-spacer></v-spacer>

                    <v-btn dark icon>
                        <v-icon>edit</v-icon>
                    </v-btn>

                    <v-btn dark icon @click="$emit('delete', item._id)">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title class="white--text">
                    <div class="title player-name">{{ item.playerName }}</div>
                </v-card-title>
            </v-layout>
        </v-img>

        <v-list two-line>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="white">phone</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ item.playerPhone !== null ? item.playerPhone : 'Not set' }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="white">mail</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ item.playerEmail !== null ? item.playerEmail : 'Not set' }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>Email</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="white">language</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.playerCountry }}</v-list-tile-title>
                    <v-list-tile-sub-title>Country</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-card>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        baseURL() {
            return process.env.VUE_APP_API_URL;
        }
    }
}
</script>

<style scoped>
    .v-list {
        padding: 0 !important;
    }
    .v-list--two-line .v-list__tile {
        height: 65px !important;
    }
    .player-name {
        width: 100%;
        text-align: center;
    }

    .player-photo {
        background-size: cover;
    }
</style>
