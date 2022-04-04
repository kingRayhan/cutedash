<template>
  <n-config-provider :theme="theme.isDark ? darkTheme : null">
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from "naive-ui";
import useThemeStore from "@/store/theme";

const theme = useThemeStore();
</script>
