<template>
    <v-layout row wrap>
        <v-flex>
            <v-card>
                <v-card-title class="px-0 py-0">
                    <ul class="breadcrumbs-list">
                        <li 
                            v-for="(crumb, index) in crumbs" 
                            :key="index"
                        >
                            <router-link :to="crumb.to">{{ crumb.text }}</router-link>
                        </li>
                    </ul>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    filters: {
        makePathUpperCase(path) {
            if(path !== undefined && path !== '' && path !== null) {
                return path[0].toUpperCase() + path.slice(1, path.length);
            } else {
                return 'Home';
            }
        }
    },
    computed: {
        crumbs() {
            let pathArray = this.$route.path.split("/")
            pathArray.shift()
            
            let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
                breadcrumbArray.push({
                    path: path,
                    to: breadcrumbArray[idx - 1]
                        ? "/" + breadcrumbArray[idx - 1].path + "/" + path
                        : "/" + path,
                    text: this.$options.filters.makePathUpperCase(path),
                });

                return breadcrumbArray;
            }, [])

            return breadcrumbs;
        }
    }
}
</script>

<style scoped lang="scss" scoped>
    .breadcrumbs-list {
        display: flex;
        width: 100%;
        padding: 7px;
        justify-content: flex-end;

        li {
            margin-right: 25px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
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
