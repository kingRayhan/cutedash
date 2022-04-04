<template>
  <n-layout has-sider>
    <n-layout-sider
      class="min-h-screen"
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="270"
      :native-scrollbar="false"
    >
      <admin-menu />
    </n-layout-sider>

    <n-layout class="flex flex-col">
      <n-layout-header>
        <Navbar />
      </n-layout-header>

      <n-layout-content>
        <main class="p-4">
          <router-view />
        </main>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import AdminMenu from "@/layouts/dashboard/AdminMenu.vue";
import Navbar from "@/layouts/dashboard/Navbar/index.vue";
</script>
