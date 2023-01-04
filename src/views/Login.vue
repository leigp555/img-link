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
        >
          <a-form-item
            name="username"
            class="animate__animated animate__fadeInLeft"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.username" placeholder="用户名" />
          </a-form-item>

          <a-form-item
            name="password"
            class="animate__animated animate__fadeInLeft"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" placeholder="密码" />
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
            <a-button type="primary" html-type="submit" style="width: 100%"
              >登录</a-button
            >
          </a-form-item>
        </a-form>
        <a-divider style="font-size: 14px">其他登录方式</a-divider>
        <div style="display: flex; gap: 10px; justify-content: center">
          <a-button type="text" shape="circle" @click="githubCode">
            <template #icon><github-outlined style="font-size: 20px" /></template>
          </a-button>
          <a-button type="text" shape="circle" @click="googleToken">
            <template #icon><google-circle-filled style="font-size: 20px" /></template>
          </a-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
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
const githubCode = () => {
  githubLogin()
}
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

<style scoped lang="scss">
.bac-cover {
  background-image: url('../assets/bac.jpg');
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-wrap {
    margin: auto;
    background: white;
    border-radius: 8px;
    display: inline-block;
    .login {
      min-width: 200px;
      width: calc(100vw - 110px);
      max-width: 310px;
      margin: 40px 40px 20px 40px;
      overflow: hidden;
      //width: 200px;
      > .title {
        font-weight: 600;
        font-size: 24px;
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
  }
}
</style>
