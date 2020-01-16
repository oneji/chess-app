import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const gamesModule = {
    namespaced: true,
    state: {
        games: [],
        currentGame: {},
        finishGameForm: false,
        boardGoToIdx: null
    },
    getters,
    mutations,
    actions
}

export default gamesModule