<template>
  <section class="bac-cover">
    <div class="login-wrap">
      <div class="login">
        <p class="title animate__animated animate__bounceInLeft">注册</p>
        <a-form
          :model="formState"
          autocomplete="on"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          class="login-form animate__animated animate__fadeInRight"
        >
          <!--用户名-->
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="formState.username"
              placeholder="用户名"
              size="large"
            />
          </a-form-item>
          <!--邮箱-->
          <a-form-item
            name="email"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.email" placeholder="邮箱" size="large" />
          </a-form-item>
          <!--邮箱验证码-->
          <a-form-item
            name="emailCaptcha"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <div
              style="
                display: flex;
                gap: 20px;
                justify-content: space-between;
                align-items: stretch;
              "
            >
              <a-input
                v-model:value="formState.emailCaptcha"
                placeholder="验证码"
                size="large"
                style="flex-grow: 10"
              />
              <!--<a-button style="align-self: stretch; height: 40px">获取验证码</a-button>-->
              <a-button style="align-self: stretch; height: 40px">60秒后重发</a-button>
            </div>
          </a-form-item>
          <!--密码-->
          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="密码"
              size="large"
            />
          </a-form-item>

          <!--确认密码-->
          <a-form-item
            name="rePassword"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password
              v-model:value="formState.rePassword"
              placeholder="确认密码"
              size="large"
            />
          </a-form-item>

          <!--图形验证码-->
          <a-form-item
            name="captcha"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <div
              style="
                display: flex;
                gap: 20px;
                justify-content: space-between;
                align-items: stretch;
              "
            >
              <a-input
                v-model:value="formState.captcha"
                placeholder="验证码"
                size="large"
                style="flex-grow: 10"
              />
              <!--<a-button style="align-self: stretch; height: 40px">获取验证码</a-button>-->
              <a-button style="align-self: stretch; height: 40px">60秒后重发</a-button>
            </div>
          </a-form-item>
          <!--登录-->
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              style="width: 100%; height: 40px"
            >
              <template #icon><user-add-outlined /></template>
              注册</a-button
            >
          </a-form-item>
          <a-form-item>
            <router-link to="/login">已有账号?点击登录</router-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'

const router = useRoute()
interface FormState {
  username: string
  email: string
  emailCaptcha: string
  password: string
  rePassword: string
  captcha: string
}
const formState = reactive<FormState>({
  username: '',
  email: '',
  emailCaptcha: '',
  password: '',
  rePassword: '',
  captcha: ''
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped lang="scss">
@import '../style/login.scss';
</style>
