<script lang="ts" setup>
import { computed, onMounted, reactive, watchEffect } from 'vue'
import { UserAddOutlined } from '@ant-design/icons-vue'
import type { Rule } from 'ant-design-vue/es/form'
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

// 数据验证
const validate = reactive({
  username: [
    { required: true, message: '请填写用户名' },
    {
      pattern: /^[0-9A-Za-z_@/.]{3,10}$/,
      message: '用户名格式为3-10位(含数字、字母、下划线、@、.)',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请填写邮箱地址' },
    {
      pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: '邮箱格式不正确',
      trigger: 'blur'
    }
  ],
  emailCaptcha: [
    { required: true, message: '请填写邮箱验证码' },
    {
      pattern: /^\d{6}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请填写密码' },
    {
      pattern: /^[a-zA-Z0-9_]{6,16}$/,
      message: '密码格式为6到16位(含字母、数字、下划线)',
      trigger: 'blur'
    }
  ],
  checkPassword: [
    {
      validator: async (_rule: Rule, value: string) => {
        if (value === '') {
          return Promise.reject(Error('请确认密码'))
        }
        if (value !== formState.password) {
          return Promise.reject(Error('两次输入不一致'))
        }
        return Promise.resolve()
      }
    }
  ],
  captcha: [
    { required: true, message: '请填写图形验证码' },
    {
      pattern: /^\d{4}$/,
      message: '验证码不正确',
      trigger: 'blur'
    }
  ]
})

// 获取email验证码
const getEmailCaptcha = () => {
  if (
    !formState.email ||
    !(validate.email[1].pattern as RegExp).test(formState.email)
  ) {
    alert.error('请输入正确的邮箱')
    return
  }
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
    .then(() => {
      alert.success('验证码已发送')
    })
    .catch(() => {
      alert.error('验证码未发送')
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
          class="login-form"
        >
          <!--用户名-->
          <a-form-item
            name="username"
            :rules="validate.username"
            class="username animate__animated animate__fadeInRight"
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
            :rules="validate.email"
            class="email animate__animated animate__fadeInRight"
          >
            <a-input v-model:value="formState.email" placeholder="邮箱" size="large" />
          </a-form-item>
          <!--邮箱验证码-->
          <a-form-item
            name="emailCaptcha"
            class="emailCaptcha animate__animated animate__fadeInRight"
            :rules="validate.emailCaptcha"
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
            class="password animate__animated animate__fadeInRight"
            :rules="validate.password"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="密码"
              size="large"
            />
          </a-form-item>

          <!--确认密码-->
          <a-form-item
            name="checkPassword"
            class="checkPassword animate__animated animate__fadeInRight"
            :rules="validate.checkPassword"
          >
            <a-input-password
              v-model:value="formState.checkPassword"
              placeholder="确认密码"
              size="large"
            />
          </a-form-item>

          <!--图形验证码-->
          <a-form-item
            name="captcha"
            class="captcha animate__animated animate__fadeInRight"
            :rules="validate.captcha"
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
                placeholder="图形验证码"
                size="large"
                style="flex-grow: 10"
              />
              <div
                style="
                  flex-shrink: 0;
                  width: 100px;
                  height: 40px;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                "
                @click="changeCaptcha"
              >
                <img :src="captchaImg.imgUrl" alt="验证码" />
              </div>
            </div>
          </a-form-item>
          <!--登录-->
          <a-form-item class="loginButton animate__animated animate__fadeInRight">
            <a-button
              type="primary"
              html-type="submit"
              style="width: 100%; height: 40px"
            >
              <template #icon><user-add-outlined /></template>
              注册</a-button
            >
          </a-form-item>
          <a-form-item class="goLogin animate__animated animate__fadeInRight">
            <router-link to="/login">已有账号?点击登录</router-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../style/login.scss';

.username.animate__animated.animate__fadeInRight {
  --animate-duration: 0.5s;
}
.email.animate__animated.animate__fadeInRight {
  --animate-duration: 0.6s;
}
.emailCaptcha.animate__animated.animate__fadeInRight {
  --animate-duration: 0.7s;
}
.password.animate__animated.animate__fadeInRight {
  --animate-duration: 0.8s;
}
.checkPassword.animate__animated.animate__fadeInRight {
  --animate-duration: 0.9s;
}
.captcha.animate__animated.animate__fadeInRight {
  --animate-duration: 1s;
}
.loginButton.animate__animated.animate__fadeInRight {
  --animate-duration: 1.1s;
}
.goLogin.animate__animated.animate__fadeInRight {
  --animate-duration: 1.2s;
}
</style>
