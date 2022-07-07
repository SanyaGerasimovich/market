import axios from 'axios'


export default {
    state: {
        choco: {},
        market: {},
        id: null
    },
    getters: {
        MARKET: (state) => {
            return state.market
        },
        CHOCO: (state) => {
            // let i = Object.getPrototypeOf(state.market)
            // console.log(i)
            return state.market
                //return state.market.find(item => item.id === choco)
        },
        getChoco: (state) => {
            return state.choco;
        }
    },
    mutations: {
        SET_MARKET: (state, payload) => {
            state.market = payload
        },
        SET_ID: (state, payload) => {
            state.id = payload
            console.log(state.id)
        },
        setChoco: (state, data) => {
            state.choco = data;
        }
    },
    actions: {
        GET_MARKET: async (context) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
            //console.log(response.data)
            context.commit('SET_MARKET', response.data)
        },
        GET_CHOCO: ({commit}, payload) => {
            commit('SET_ID', payload)
        },
        fetchChocoById: async (context, id) => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
            context.commit("setChoco", data);
        }
    }
}
