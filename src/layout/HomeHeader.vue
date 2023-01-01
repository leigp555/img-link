<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MenuOutlined, UserOutlined } from '@ant-design/icons-vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { useProfileStore } from '@/store/user_profile'

const userStore = useProfileStore()
const avatarRef = ref<HTMLElement>(null)
const login_register_ref = ref<HTMLElement>(null)
const checked = ref<boolean>(false)
const theme_change = (isChecked: boolean) => {
  if (isChecked) {
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')
  } else {
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')
  }
}

onMounted(() => {
  if (userStore.login_status) {
    login_register_ref.value?.classList.add('hidden')
  } else {
    avatarRef.value?.classList.add('hidden')
  }
})
</script>

<template>
  <nav>
    <!--    导航按钮-->
    <section class="header-menu">
      <menu-outlined />
    </section>
    <!--    logo-->
    <section class="logo">
      <router-link to="/">IMG.URL</router-link>
    </section>
    <!--    导航-->
    <section class="navbar">
      <!--      左边导航-->
      <div class="navbar-left">
        <router-link to="/upload">图片上传</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/concat">联系我</router-link>
      </div>
      <!--      右边导航-->
      <div class="navbar-right">
        <router-link to="/changeLog">版本变更</router-link>
        <router-link to="/apiDocs">API 文档</router-link>
        <router-link to="/manage">图片管理</router-link>
        <a-switch v-model:checked="checked" @change="theme_change" class="switch">
          <template #checkedChildren>
            <span class="switch-svg">
              <SvgIcon name="sun" />
            </span>
          </template>
          <template #unCheckedChildren>
            <span class="switch-svg">
              <SvgIcon name="moon" />
            </span>
          </template>
        </a-switch>
      </div>
    </section>
    <!--    用户头像-->
    <section class="user-avatar" ref="avatarRef">
      <a-avatar>
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </section>
    <!--    登录或注册-->
    <section class="login-or-register" ref="login_register_ref">
      <router-link to="/login">登录</router-link>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <router-link to="/register">注册</router-link>
    </section>
  </nav>
</template>

<style scoped lang="scss">
$nav_height: 64px;
$router_gap: 30px;
a {
  color: #000000d9;
  &:hover {
    color: #1890ff;
  }
}
.router-link-exact-active {
  font-weight: 600;
  color: #1890ff;
}
nav {
  height: $nav_height;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: var(--header-bac);
  display: flex;
  gap: $router_gap;
  align-items: center;
  padding: 9px 120px;
  transition: background 250ms;
  @media (max-width: 1000px) {
    padding: 9px 18px;
  }
  @media (max-width: 800px) {
    justify-content: space-between;
  }
  > .logo {
    font-size: 1.2em;
    white-space: nowrap;
    a {
      color: inherit;
      font-weight: 600;
    }
  }
  > .navbar {
    display: flex;
    margin-left: $router_gap;
    flex-grow: 10;
    @media (max-width: 800px) {
      display: none;
      justify-self: center;
    }
    > .navbar-left {
      flex-grow: 10;
      flex-wrap: nowrap;
      > a {
        margin-right: $router_gap;
      }
    }
    > .navbar-right {
      flex-wrap: nowrap;
      > a {
        margin-right: $router_gap;
        white-space: nowrap;
      }
    }
  }
  > .header-menu {
    align-items: center;
    font-size: 22px;
    display: none;
    @media (max-width: 800px) {
      display: inline-flex;
    }
  }
  > .user-avatar {
    cursor: pointer;
    &.hidden {
      display: none;
    }
  }
  > .login-or-register {
    &.hidden {
      display: none;
    }
  }
}
.switch {
  background: #151515;
  outline: 2px solid #ffffff;
  .switch-svg {
    display: flex;
    align-items: center;
  }
}
</style>
