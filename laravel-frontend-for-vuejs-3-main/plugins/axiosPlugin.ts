import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
const config = useRuntimeConfig();
 axios.defaults.baseURL = `${config.public.appURL}/api`;
 axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
 axios.defaults.headers.common["Content-Type"] = "application/json";
 axios.defaults.headers.common["Accept"] = "application/json";
 axios.defaults.withCredentials = true;
 axios.defaults.headers.withXSRFToken = true;
 axios.interceptors.response.use(
   response => {
      return response;
   },
   error => {
      if (error.response.status === 401) {
         user.value = null;
         navigateTo("/login");
      }
      else {
         return Promise.reject(error);
      }
   }
 )

 await axios.get("/sanctum/csrf-cookie", {
    baseURL: config.public.appURL
 });
})