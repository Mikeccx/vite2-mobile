import { createStore } from 'vuex'

export default createStore({
    state: {
        accessToken: '',
        userInfo: {}
    },
    mutations: {
        SETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {},
    getters: {
        userInfo(state) {
            return state.userInfo
        }
    },
    modules: {}
})
