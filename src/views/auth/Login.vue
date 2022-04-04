<template>
  <div class="h-16 max-w-xl mx-auto my-20">
    <n-form
      ref="formRef"
      :model="form"
      :rules="rules"
      size="large"
      :disabled="isLoading"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Email" path="email">
        <n-input v-model:value="form.email" placeholder="Email address" />
      </n-form-item>

      <n-form-item label="Password" path="password">
        <n-input
          v-model:value="form.password"
          placeholder="Password"
          type="password"
        />
      </n-form-item>

      <n-button attr-type="submit">Login</n-button>
    </n-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useNotification } from "naive-ui";
import { useMutation } from "vue-query";
import api from "@/helpers/api";
const formRef = ref(null);

const notification = useNotification();

const rules = {
  email: {
    required: true,
    message: "Email is required",
    trigger: "input",
  },
  password: {
    required: true,
    message: "Password is required",
    trigger: "input",
  },
};
const form = reactive({
  email: "",
  password: "",
});

const { mutateAsync, isLoading, isError } = useMutation("login", (payload) =>
  api.post("/auth/login", payload)
);

const handleSubmit = async () => {
  await formRef.value.validate();
  try {
    const res = await mutateAsync(form);
    console.log(res);
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      content: error.response.data.message,
    });
  }
};
</script>
