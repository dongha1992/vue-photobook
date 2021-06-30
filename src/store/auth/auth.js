import { Auth } from 'aws-amplify';

export const auth = {
  namespace: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  acions: {
    async logout({ commit }) {
      commit('setUser', null);
      return await Auth.signOut();
    },

    // eslint-disable-next-line no-unused-vars
    async login({ commit, dispatch }, { userName, password }) {
      try {
        await Auth.signIn({
          userName,
          password,
        });
        const userInfo = await Auth.currentUserInfo();
        commit('setUser', userInfo);
        return Promise.resolve('Success');
      } catch (error) {
        console.log(error);
        return Promise.reject('reject');
      }
    },

    async confirmSignUp(_, { userName, code }) {
      try {
        await Auth.confirmSignUp(userName, code);
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject('reject');
      }
    },

    async signUp(_, { userName, password, email }) {
      try {
        await Auth.signUp({
          userName,
          password,
          attributes: {
            email,
          },
        });
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject();
      }
    },

    async authActions({ commit }) {
      const userInfo = await Auth.currentUserInfo();
      commit('setUser', userInfo);
    },
  },

  getters: {
    user: (state) => state.user,
  },
};
