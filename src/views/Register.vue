<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import { alert } from '@/components/Message'
import httpRequest from '@/utils/axios'

const router = useRoute()
// 用户信息
interface FormState {
  username: string
  email: string
  emailCaptcha: string
  password: string
  checkPassword: string
  captcha: string
  captchaId: string
}
// email验证码信息
interface EmailCaptcha {
  isGetting: boolean
  restTime: number
}

const formState = reactive<FormState>({
  username: '',
  email: '',
  emailCaptcha: '',
  password: '',
  checkPassword: '',
  captcha: '',
  captchaId: ''
})

const emailCaptchaInfo = reactive<EmailCaptcha>({
  isGetting: false,
  restTime: 60
})

// 图形验证码的数据
const captchaImg = reactive<{
  imgUrl: string
  imgId: string
}>({ imgUrl: '', imgId: '' })

// 获取email验证码
const getEmailCaptcha = () => {
  emailCaptchaInfo.isGetting = true
  const id = setInterval(() => {
    if (emailCaptchaInfo.restTime <= 0) {
      window.clearInterval(id)
      emailCaptchaInfo.isGetting = false
      emailCaptchaInfo.restTime = 60
    }
    emailCaptchaInfo.restTime -= 1
  }, 1000)
  // 请求服务端发送验证码
  httpRequest({
    url: 'v1/api/email/captcha',
    method: 'POST',
    data: { email: formState.email }
  })
    .then((res) => {
      console.log(res)
      alert.success('验证码已发送')
    })
    .catch((err) => {
      alert.error('验证码未发送')
      console.log(err)
    })
}

// 获取图片验证码
const getCaptchaImg = () => {
  httpRequest<{ captchaImg: string; captchaId: string }>({
    url: 'v1/api/captcha'
  })
    .then((res) => {
      captchaImg.imgUrl = res.data.captchaImg
      captchaImg.imgId = res.data.captchaId
      formState.captchaId = res.data.captchaId
    })
    .catch((err) => {
      alert.error('图形验证码获取失败,请重试')
    })
}
const changeCaptcha = () => {
  getCaptchaImg()
}
onMounted(() => {
  // 获取图形验证码
  getCaptchaImg()
})

// 表单提交的回调
const onFinish = () => {
  console.log('Success:', formState)
}
// 表单提交失败的回调
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

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
              <a-button v-if="emailCaptchaInfo.isGetting" style="height: 40px">
                {{ emailCaptchaInfo.restTime }}秒后重发
              </a-button>
              <a-button v-else style="height: 40px" @click="getEmailCaptcha">
                获取验证码
              </a-button>
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
              <div
                style="flex-shrink: 0; width: 100px; cursor: pointer"
                @click="changeCaptcha"
              >
                <img :src="captchaImg.imgUrl" alt="captcha" />
              </div>
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

<style scoped lang="scss">
@import '../style/login.scss';
</style>
