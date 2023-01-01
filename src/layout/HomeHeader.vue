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
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/concat">Concat</router-link>
      </div>
      <!--      右边导航-->
      <div class="navbar-right">
        <router-link to="/changeLog">ChangeLog</router-link>
        <router-link to="/apiDocs">API Docs</router-link>
        <router-link to="/manage">Manage</router-link>
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
    <section class="user-avatar">
      <a-avatar>
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </section>
    <!--    登录或注册-->
    <section class="login-or-register">
      <router-link to="/login">登录</router-link>
      <router-link to="/login">注册</router-link>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuOutlined, UserOutlined } from '@ant-design/icons-vue'
import SvgIcon from '@/components/SvgIcon.vue'

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
</script>

<style scoped lang="scss">
$nav_height: 64px;
$router_gap: 30px;
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
    .router-link-exact-active {
      font-weight: 600;
      color: #1890ff;
    }
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
}
.switch {
  background: #151515;
  .switch-svg {
    display: flex;
    align-items: center;
  }
}
</style>
