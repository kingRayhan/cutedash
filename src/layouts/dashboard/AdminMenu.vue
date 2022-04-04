<template>
  <NMenu
    :options="menuOptions"
    :collapsedWidth="64"
    :collapsedIconSize="22"
    @update:value="handleUpdateValue"
  />
</template>
<script setup>
import { h } from "vue";
import { NMenu, NIcon } from "naive-ui";
import {
  DashboardOutlined as DashboardIcon,
  AppstoreOutlined as ComponentsIcon,
  PieChartOutlined as ChartsIcon,
  ProfileOutlined as LogsIcon,
  CodeOutlined as CodeIcon,
  GlobalOutlined as InternationalizationIcon,
  ExclamationCircleOutlined as ErrorHandlingIcon,
  MessageOutlined as MessagesIcon,
} from "@vicons/antd";
import { useRouter } from "vue-router";

const router = useRouter();

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const handleUpdateValue = (key, item) => {
  if (!item.path) return;
  router.push({ path: item.path });
};

const menuOptions = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: renderIcon(DashboardIcon),
  },
  {
    label: "MoonComponents",
    key: "moonComponents",
    path: "test",
    icon: renderIcon(ComponentsIcon),
  },
  {
    label: "Charts",
    key: "charts",
    path: "charts",
    icon: renderIcon(ChartsIcon),
  },
  {
    label: "Internationalization",
    key: "internationalization",
    icon: renderIcon(InternationalizationIcon),
  },
  {
    label: "ErrorHandling",
    key: "errorHandling",
    icon: renderIcon(ErrorHandlingIcon),
  },
  {
    label: "Messages",
    key: "messages",
    icon: renderIcon(MessagesIcon),
  },
  {
    label: "Logs",
    key: "logs",
    path: "log",
    icon: renderIcon(LogsIcon),
  },
  {
    label: "Code",
    key: "code",
    path: "code",
    icon: renderIcon(CodeIcon),
  },
];
</script>
