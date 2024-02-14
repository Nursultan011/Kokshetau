// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  main: null,
  about: null,
  services: null,
  vacancies: null,
  contacts: null,
  news: null,
  subsidiary: null,
};

const getters = {};

const actions = {
  async getMain({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('home/');

      if (response.data) {
        commit('setMain', response.data);
        console.log(response.data)
      }

      return response.data;
    } catch (error) {
      console.log('Ошибка:', error);
      throw error;
    }
  },
  async getAbout({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('about/');

      if (response.data) {
        commit('setAbout', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getSubsidiaryId({ commit }, id) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('subsidiary/' + id);

      if (response.data) {
        commit('setSubsidiary', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getVacancies({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('vacancies/');

      if (response.data) {
        commit('setVacancies', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async sendVacancy({ commit }, form) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.post('vacancies/', form);

      if (response.data) {
        return response.data
      }
    } catch (error) {
      throw error;
    }
  },
  async getServices({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('services/');

      if (response.data) {
        commit('setServices', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getContacts({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('contacts/');

      if (response.data) {
        commit('setContact', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getNews({ commit }) {
    try {
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('news/');

      if (response.data) {
        commit('setNews', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
};

const mutations = {
  setMain(state, data) {
    state.main = data;
  },
  setAbout(state, data) {
    state.about = data;
  },
  setServices(state, data) {
    state.services = data;
  },
  setVacancies(state, data) {
    state.vacancies = data;
  },
  setContact(state, data) {
    state.contacts = data;
  },
  setNews(state, data) {
    state.news = data;
  },
  setSubsidiary(state, data){
    state.subsidiary = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
