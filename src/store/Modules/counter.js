const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
     // increment: context => {
        //     context.commit('increment');
        // },
        // decrement: context => {
        //     context.commit('decrement');
        // },

    // The above code can be simplified using es6 destructuring object assignment

    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        },payload.duration)
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        },payload.duration)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}