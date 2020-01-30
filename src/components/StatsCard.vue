<template>
        <v-card class="mt-3">
            <div class="v-offset">
                <v-card
                    class="pa-4 elevation-20"
                    :color="color"
                    dark
                >
                    <v-icon size="40">
                        {{ icon }}
                    </v-icon>
                </v-card>   
            </div>

            <v-card-text>
                <div class="subheading font-weight-light grey--text text-xs-right">{{ title }}</div>
                <div class="title font-weight-light mb-3 mt-2 text-xs-right">{{ value }}</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>{{ subIcon }}</v-icon>
                <span class="caption grey--text font-weight-light">{{ subText }}</span>
            </v-card-text>
        </v-card>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        subIcon: {
            type: String,
            default: undefined
        },
        subIconColor: {
            type: String,
            default: undefined
        },
        subTextColor: {
            type: String,
            default: undefined
        },
        subText: {
            type: String,
            default: undefined
        },
        title: {
            type: String,
            default: undefined
        },
        value: {
            type: Number,
            default: undefined
        },
        smallValue: {
            type: String,
            default: undefined
        },
        color: {
            type: String,
            default: undefined
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-offset {
        display: inline-block;
        flex: 0 1;
        margin-top: 0;
        margin-left: 0;
        margin-right: auto;
        margin-bottom: 0 !important;
        max-width: auto;
        padding: 0 16px 0;
        position: absolute;
        top: -15px;
    }

    .v-card {
        border-radius: 4px;
        flex: 0 1 auto;
    }

    .v-card__actions {
        flex: 1 0 100%;
    }
</style>