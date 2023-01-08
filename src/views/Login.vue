<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { GithubOutlined, GoogleCircleFilled } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { githubLogin, googleLogin } from '@/utils/login'

const router = useRoute()
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

// github授权
const githubCode = () => {
  githubLogin()
}
// google授权
const googleToken = () => {
  googleLogin()
}

onMounted(() => {
  let code: string = ''
  try {
    code = router.query?.code as string
  } catch (err) {
    code = ''
  }
  if (code) {
    axios
      .post('http://localhost:8000/code/back', {
        code
      })
      .then((res) => {
        console.log(res)
      })
  }
})
</script>

<template>
  <section class="bac-cover">
    <div class="login-wrap">
      <div class="login">
        <p class="title animate__animated animate__bounceInLeft">登录</p>
        <a-form
          :model="formState"
          autocomplete="on"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          class="login-form"
          ref="formRef"
        >
          <!--用户名-->
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
            class="username animate__animated animate__fadeInLeft"
          >
            <a-input
              v-model:value="formState.username"
              placeholder="用户名"
              size="large"
            />
          </a-form-item>
          <!--密码-->
          <a-form-item
            name="password"
            class="password animate__animated animate__fadeInLeft"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="密码"
              size="large"
            />
          </a-form-item>
          <!--记住密码/忘记密码-->
          <a-form-item
            name="remember"
            class="remember animate__animated animate__fadeInLeft"
          >
            <div class="action">
              <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
              <router-link to="">忘记密码?</router-link>
            </div>
          </a-form-item>
          <!--登录-->
          <a-form-item class="loginButton animate__animated animate__fadeInLeft">
            <a-button
              type="primary"
              html-type="submit"
              style="width: 100%; height: 40px"
              >登录</a-button
            >
          </a-form-item>
          <a-form-item class="goRegister animate__animated animate__fadeInLeft">
            <router-link to="/register">没有账号?点击注册</router-link>
          </a-form-item>
        </a-form>
        <!--其他方式登录-->
        <a-divider
          style="font-size: 14px"
          class="other-way animate__animated animate__fadeInLeft"
          >其他登录方式</a-divider
        >
        <div class="other-way-login animate__animated animate__fadeInLeft">
          <a-button type="text" shape="circle" @click="githubCode">
            <template #icon><github-outlined class="svg" /></template>
          </a-button>
          <a-button type="text" shape="circle" @click="googleToken">
            <template #icon><google-circle-filled class="svg" /></template>
          </a-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../style/login.scss';

.username.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.5s;
}
.password.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.6s;
}
.remember.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.7s;
}
.loginButton.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.8s;
}
.goRegister.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.9s;
}
.other-way.animate__animated.animate__fadeInLeft {
  --animate-duration: 1s;
}
.other-way-login.animate__animated.animate__fadeInLeft {
  --animate-duration: 1s;
}
</style>
