<template>
  <n-config-provider :theme="theme.theme === 'dark' && darkTheme">
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
    <VueQueryDevTools />
  </n-config-provider>
</template>

<script setup>
import { VueQueryDevTools } from "vue-query/devtools";
import { darkTheme } from "naive-ui";
import useThemeStore from "@/store/theme";
const theme = useThemeStore();
</script>
