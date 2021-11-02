import axios from "axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      // tt3896198
      const response = await axios.get("/", {
        params: {
          apikey: process.env.VUE_APP_API_KEY,
          plot: "full",
          i: "tt3896198"
        }
      });
      console.log(response);
    }
  }
};

export default moviesStore;