<template>
  <div class="flex gap-2 items-center">
    <button @click="theme.toggleTheme()">Settings</button>
    <Avatar />
  </div>
</template>

<script setup>
import useThemeStore from "@/store/theme";
import Avatar from "./Avatar.vue";
const theme = useThemeStore();
</script>
