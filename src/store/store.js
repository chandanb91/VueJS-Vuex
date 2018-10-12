import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        // increment: context => {
        //     context.commit('increment');
        // },
        // decrement: context => {
        //     context.commit('decrement');
        // },

        // The above code can be simplified using es6 destructuring object assignment
        increment: ({ commit }) => {
            commit('increment');
        },
        decrement: ({ commit }) => {
            commit('decrement');
        },
        asyncIncrement: ({ commit }) => {
            setTimeout(() => {
                commit('increment');
            },1000)
        },
        asyncDecrement: ({ commit }) => {
            setTimeout(() => {
                commit('decrement');
            },1000)
        }
    }
});