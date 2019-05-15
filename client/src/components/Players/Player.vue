<template>
     <v-card>
        <v-img
          src="./images/chess-board.jpg"
          height="200px"
          class="player-photo"
        >
            <v-layout column fill-height>
                <v-card-title>
                    <v-spacer></v-spacer>

                    <v-btn dark icon class="mr-3">
                        <v-icon>edit</v-icon>
                    </v-btn>

                    <v-btn dark icon>
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title class="white--text">
                    <div class="display-1 player-name">{{ item.playerName }}</div>
                </v-card-title>
            </v-layout>
        </v-img>

        <v-list two-line>
            <v-list-tile @click="">
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

            <v-divider inset></v-divider>

            <v-list-tile @click="">
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

            <v-divider inset></v-divider>

            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon color="white">language</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>1400 Main Street</v-list-tile-title>
                    <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
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
    }
}
</script>

<style scoped>
    .player-name {
        width: 100%;
        text-align: center;
    }

    .player-photo {
        background-size: cover;
    }
</style>
