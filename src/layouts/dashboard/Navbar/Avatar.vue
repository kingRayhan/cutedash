<template>
  <n-dropdown
    trigger="click"
    placement="bottom"
    :options="options"
    size="huge"
    @select="handleSelect"
  >
    <div class="flex gap-2 cursor-pointer items-center">
      <img
        class="w-10 h-10 rounded-md"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg"
      />
      <div>
        <p class="font-semibold">Stephen Austin</p>
        <p class="text-sm text-slate-600">Chief manager</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
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
import { NIcon, NDropdown } from "naive-ui";
import {
  UserOutlined as UserIcon,
  EditOutlined as EditIcon,
  LogoutOutlined as LogoutIcon,
  CarryOutFilled,
} from "@vicons/antd";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  { label: "Profile", key: "Profile", icon: renderIcon(UserIcon) },
  { label: "Edit Profile", key: "Edit Profile", icon: renderIcon(EditIcon) },
  { label: "Sign Out", key: "Sign Out", icon: renderIcon(LogoutIcon) },
];

const handleSelect = (key) => {
  console.log(key);
};
</script>
