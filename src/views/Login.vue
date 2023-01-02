<template>
  <HomeLayout>
    <div class="login">
      <p class="title animate__animated animate__bounceInLeft">登录</p>
      <a-form
        :model="formState"
        autocomplete="on"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        class="login-form"
      >
        <a-form-item
          name="username"
          class="animate__animated animate__fadeInLeft"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input
            v-model:value="formState.username"
            size="large"
            placeholder="用户名"
          />
        </a-form-item>

        <a-form-item
          name="password"
          class="animate__animated animate__fadeInLeft"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            size="large"
            placeholder="密码"
          />
        </a-form-item>
        <a-form-item name="remember" class="animate__animated animate__fadeInLeft">
          <div class="action">
            <a-checkbox
              v-model:checked="formState.remember"
              style="color: var(--font-color)"
              >记住密码</a-checkbox
            >
            <router-link to="">忘记密码?</router-link>
          </div>
        </a-form-item>
        <a-form-item class="animate__animated animate__fadeInLeft">
          <a-button type="primary" html-type="submit" style="width: 100%; height: 40px"
            >Submit</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </HomeLayout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import HomeLayout from '@/layout/HomeLayout.vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped lang="scss">
.login {
  margin-top: 12vh;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 40px 40px;
  box-shadow: var(--login-shadow);
  overflow: hidden;
  > .title {
    font-weight: 600;
    font-size: 27px;
  }
  > .login-form {
    margin-right: auto;
    margin-left: auto;
    .action {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<style lang="scss">
.ant-input,
.ant-input-password {
  background: var(--input-color);
  svg {
    fill: var(--font-color);
  }
}
</style>
