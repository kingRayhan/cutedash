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
          show-password-on="mousedown"
          type="password"
        />
      </n-form-item>

      <n-button attr-type="submit">Login</n-button>
    </n-form>

    <n-alert title="Login Credential" type="info" class="mt-5">
      Email: example@example.com <br />
      Password: pa$$word
    </n-alert>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useNotification } from "naive-ui";
import { useMutation } from "vue-query";
import api from "@/helpers/api";
import useAuthStore from "@/store/auth";
import { useRouter } from "vue-router";
const formRef = ref(null);
const auth = useAuthStore();
const notification = useNotification();
const router = useRouter();
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
    const { data } = await mutateAsync(form);
    auth.saveToken(data.token);

    api.defaults.headers.authorization = `Bearer ${data.token.refreshToken}`;

    notification.success({
      content: "Successfully logged in",
    });
    await auth.boot();
    router.push({ name: "index" });
  } catch (error) {
    console.log(error.response);
    // notification.error({
    //   content: error.response.data.message,
    // });
  }
};
</script>
