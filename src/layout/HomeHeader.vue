<template>
  <nav>
    <section class="logo">
      <router-link to="/">IMG.URL</router-link>
    </section>
    <section class="navbar">
      <div class="navbar-left">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/concat">Concat</router-link>
      </div>
      <div class="navbar-right">
        <router-link to="/changeLog">ChangeLog</router-link>
        <router-link to="/apiDocs">API Docs</router-link>
        <router-link to="/manage">Manage</router-link>
      </div>
    </section>
    <section class="switch-theme">
      <a-switch v-model:checked="checked" class="switch">
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
    </section>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

const checked = ref<boolean>(false)
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
  background: #fff;
  padding: 9px 120px;
  display: flex;
  gap: $router_gap;
  align-items: center;
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
        margin-left: $router_gap;
        white-space: nowrap;
      }
    }
  }
  > .switch-theme {
  }
}
.switch {
  background: #151515;
  padding: 2px;
  .switch-svg {
    display: flex;
    align-items: center;
  }
}
</style>
