import api from "@/helpers/api";
import axios from "axios";
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
          //   console.log(error.response.status);
          //   await this.refreshToken();
        }

        // if (ok) {
        //   this.loggedIn = true;
        //   this.user = data.data;
        // } else {
        //   if (status === 401) {
        //     await this.refreshToken();
        //   }
        // }
        resolve();
      });
    },

    refreshToken() {
      return new Promise(async (resolve, reject) => {
        const refresh_token = localStorage.getItem("refresh_token");
        // axios.setHeader("Authorization", `Bearer ${refresh_token}`);

        const { data } = await api.post("/auth/refresh", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${refresh_token}`,
          },
        });

        console.log(data);

        // if (ok) {
        //   api.setHeader("Authorization", `Bearer ${data.token.access_token}`);
        //   this.saveToken(data.data);
        //   await this.boot();
        // } else {
        //   this.clearToken();
        // }

        resolve();
      });
    },
    logout() {
      return new Promise(async (resolve, reject) => {
        const { ok } = await api.post("/auth/logout");
        if (ok) {
          this.loggedIn = false;
          this.user = {};
          this.clearToken();
          resolve(true);
        } else {
          reject(true);
        }
      });
    },

    saveToken({ access_token, refresh_token }) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
    },

    clearToken() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export default useAuthStore;
