import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        favoriteList: []
    },
    mutations: {
        initFavoriteList(state, list) {
            state.favoriteList = list
        },
        addFavoriteList(state, list) {
            let index = state.favoriteList.findIndex(data => data.imdbID === list.imdbID);
           if(index === -1) {
                state.favoriteList.push(list);
            }

        },
        deleteFavoriteList(state, list) {
            let index = state.favoriteList.findIndex(data => data.imdbID === list);
            state.favoriteList.splice(index,1);

        },
    },
    actions: {
        initApp(context, query) {

        },
        addFavoriteList(context, list) {
            context.commit('addFavoriteList', list)
        },
        deleteFavoriteList(context, listId) {
            context.commit('deleteFavoriteList', listId)
        }
    },
    getters: {
        getFavoriteList(state) {
            return state.favoriteList
        }
    },
    modules: {}
})
