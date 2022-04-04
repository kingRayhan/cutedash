<template>
  <n-dropdown
    v-if="auth.loggedIn"
    trigger="click"
    placement="bottom"
    :options="options"
    size="huge"
    @select="handleSelect"
  >
    <div class="flex items-center gap-2 cursor-pointer">
      <img class="w-10 h-10 rounded-md" :src="auth.user.avatar" />
      <div>
        <p class="font-semibold">{{ auth.user.name }}</p>
        <p class="text-sm text-slate-600">Admin</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </n-dropdown>
</template>

<script setup>
import { h } from "vue";
import { NIcon, NDropdown, useNotification } from "naive-ui";
import { LogoutOutlined as LogoutIcon } from "@vicons/antd";
import useAuthStore from "@/store/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();
const notification = useNotification();

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  { label: "Log Out", key: "logout", icon: renderIcon(LogoutIcon) },
];

const handleSelect = (key) => {
  if (key === "logout") {
    notification.success({
      title: "Logout Success",
      content: "You have been logged out",
    });
    router.push({ name: "auth.login" });
    auth.logout();
  }
};
</script>
