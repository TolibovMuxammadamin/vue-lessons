import axios from "axios";

const VueAxios = {
  install(Vue, axiosOptions) {
    const customAxios = axios.create(axiosOptions);

    Vue.prototype.$axios = customAxios;
  },
};

export default VueAxios;
