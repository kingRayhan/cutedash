import api from "@/helpers/api";
import { defineStore } from "pinia";

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
    loggedIn: false,
  }),
  actions: {
    async boot() {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await api.get("/auth/me");
          console.log(data);
          this.loggedIn = true;
          this.user = data.data;
        } catch (error) {
          await this.refreshToken();
        }
        resolve();
      });
    },

    refreshToken() {
      return new Promise(async (resolve, reject) => {
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          const { data } = await api.post(
            "/auth/refresh",
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );
          this.saveToken(data.token);

          api.defaults.headers[
            "Authorization"
          ] = `Bearer ${data.token.accessToken}`;

          await this.boot();
          resolve();
        } catch (error) {
          resolve();
        }
      });
    },
    logout() {
      return new Promise(async (resolve, reject) => {
        this.clearToken();
        this.loggedIn = false;
        this.user = {};
        resolve();
      });
    },

    saveToken({ accessToken, refreshToken }) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },

    clearToken() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export default useAuthStore;
