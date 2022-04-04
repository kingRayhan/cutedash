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
        const refresh_token = localStorage.getItem("refreshToken");
        const { data } = await api.post(
          "/auth/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refresh_token}`,
            },
          }
        );
        this.saveToken(data.token);
        resolve();
      });
    },
    logout() {
      return new Promise(async (resolve, reject) => {
        this.clearToken();
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
