import {createStore} from 'vuex';

export default createStore({
    state: {
        isAuthenticated: false,
        user: null,
        error:null,
    },

    mutations: {
        setAuthentication(state,status) {
            state.isAuthenticated = status;
        },
        setUser(state,user){
            state.user = user;
        },
        setError(state, error){
            state.error = error;
        },
        clearError(state){
            state.error = null;
        }
    },
    actions: {
        async login ({commit}, user) {
            const credentials = {
                username: 'user',
                password: 'password123',
            };
            if (user.username === credentials.username && user.password === credentials.password) {
                commit('setAuthentication', true);
                commit('setUser', user);
                commit('clearError');
                return Promise.resolve();
            } else {
                const errorMessage = 'Invalid username or password';
                commit('setError', errorMessage);
                return Promise.reject('Invalid username or password');
            } 
        } 
        ,
        logout({commit}) {
            commit('setAuthentication', false);
            commit('setUser', null);
            commit('clearError');
        },
    },
});