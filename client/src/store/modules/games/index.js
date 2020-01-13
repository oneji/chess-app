import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const gamesModule = {
    namespaced: true,
    state: {
        games: [],
        currentGame: {},
        finishGameForm: false
    },
    getters,
    mutations,
    actions
}

export default gamesModule