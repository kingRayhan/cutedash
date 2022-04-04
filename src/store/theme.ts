import { useDark, useToggle } from "@vueuse/core";
import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", () => {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  return { isDark, toggleDark };
});

export default useThemeStore;
