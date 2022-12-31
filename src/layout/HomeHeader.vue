<template>
  <nav>
    <section class="logo">
      <router-link to="/home">IMG.URL</router-link>
    </section>
    <section class="navbar">
      <div class="navbar-left">
        <router-link to="">Home</router-link>
        <router-link to="">About</router-link>
        <router-link to="">Concat</router-link>
      </div>
      <div class="navbar-right">
        <router-link to="">ChangeLog</router-link>
        <router-link to="">API Docs</router-link>
        <router-link to="">Manage</router-link>
      </div>
    </section>
    <section class="switch-theme">
      <a-switch v-model:checked="checked">
        <template #checkedChildren><check-outlined /></template>
        <template #unCheckedChildren><close-outlined /></template>
      </a-switch>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'

const checked = ref<boolean>(false)
</script>

<style scoped lang="scss">
nav {
  height: 64px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  padding: 9px 120px;
  display: flex;
  gap: 20px;
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
    flex-grow: 10;
    > .navbar-left {
      flex-grow: 10;
      > a {
        margin-right: 30px;
      }
    }
    > .navbar-right {
      > a {
        margin-left: 30px;
      }
    }
  }
  > .switch-theme {
  }
}
</style>
