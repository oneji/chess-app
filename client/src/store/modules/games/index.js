import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const gamesModule = {
    namespaced: true,
    state: {
        games: [],
        currentGame: []
    },
    getters,
    mutations,
    actions
}

export default gamesModule