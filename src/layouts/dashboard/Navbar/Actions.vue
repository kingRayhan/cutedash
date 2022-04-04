<template>
  <div class="flex items-stretch">
    <button
      class="px-3 py-4 border-l border-slate-200 dark:border-slate-700"
      @click="toggle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        class="w-6 h-6"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 8V6a2 2 0 0 1 2-2h2"></path>
          <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
          <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
          <path d="M16 20h2a2 2 0 0 0 2-2v-2"></path>
        </g>
      </svg>
    </button>
    <button
      class="px-3 py-4 border-l border-slate-200 dark:border-slate-700"
      @click="theme.toggleDark()"
    >
      <svg
        v-if="!theme.isDark"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <svg
        v-if="theme.isDark"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    </button>
    <Avatar />
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";
import useThemeStore from "@/store/theme";
import Avatar from "./Avatar.vue";
const theme = useThemeStore();
const { toggle } = useFullscreen();
</script>
