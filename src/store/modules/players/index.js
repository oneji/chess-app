import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const playersModule = {
    namespaced: true,
    state: {
        players: [],
        createPlayer: false
    },
    getters,
    mutations,
    actions
}

export default playersModule