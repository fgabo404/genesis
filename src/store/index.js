import { createStore } from "vuex";
import { fetchAuthSession  } from 'aws-amplify/auth';

export default createStore({
    state:{
        // ----- Lang -----
        lang: navigator.language || navigator.userLanguage,
        // ----- Att themes -----
        mainThemes:['black', 'white'],
        theme:0,

        // ===== DATA =====
        // -- user --
        user:undefined
    },
    mutations:{
        // Lang
        setLang(state, data){ state.lang  =data   },
        // Action Teme
        setTheme(state, data){ state.theme =data   },

        // ===== DATA =====
        // -- user --
        setUser(state, data){ state.user =data},
    },
    actions:{
        async getUser({ commit }){
            console.log('getCurrentUser');
            let data = {}
            try {
                const session = await fetchAuthSession();
                data = session.tokens.idToken.payload
            } catch (error) {
                console.log(error);
            }
            commit('setUser', data);
        }
    },
    modules:{

    }
})