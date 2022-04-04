import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light",
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});

export default useThemeStore;
