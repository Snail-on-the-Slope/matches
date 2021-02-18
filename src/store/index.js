import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        matches: [{
                id: 1,
                team: {
                    home: 'Team1',
                    away: 'Team2'
                },
                scores: {
                    home: 1,
                    away: 2
                }
            },
            {
                id: 2,
                team: {
                    home: 'Team3',
                    away: 'Team4'
                },
                scores: {
                    home: 0,
                    away: 2
                }
            },
            {
                id: 3,
                team: {
                    home: 'Team5',
                    away: 'Team6'
                },
                scores: {
                    home: 2,
                    away: 2
                }
            },
            {
                id: 4,
                team: {
                    home: 'Team7',
                    away: 'Team8'
                },
                scores: {
                    home: 0,
                    away: 0
                }
            }
        ],
        selected_matches: []
    },
    mutations: {
        addSelectedMatches(state, new_match) {
            let id = state.matches.filter(e => e.id === new_match)[0];
            console.log("state.selected_matches", state.selected_matches.indexOf(id) > -1)
            state.selected_matches.indexOf(id) > -1 ?
                state.selected_matches.unshift(...state.selected_matches.splice(
                    state.matches.indexOf(id),
                    1)) :
                state.selected_matches.unshift(id)
                // state.selected_matches.unshift(state.matches.filter(e => e.id === new_match)[0])
        },
        updateSelectedMatches(state, upp_id) {
            state.selected_matches.unshift(...state.selected_matches.splice(
                state.selected_matches.indexOf(state.matches.filter(e => e.id === upp_id)[0]),
                1));
        },
    },
    actions: {},
    getters: {
        matches: s => s.matches,
        selected_matches: s => s.selected_matches
    },
})