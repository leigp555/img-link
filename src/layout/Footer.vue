<template>
  <section class="footer">
    <span>Copyright &copy;2023 </span>
    <a href="https://lgp.asia/">lgp.asia.</a>
    <span>All rights reserved. </span>
    <router-link to="/privacy-policy">Terms of Use</router-link>
    -
    <router-link to="/privacy-policy">Privacy Policy</router-link>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 64px;
  background: var(--footer-bac);
  padding-right: 120px;
  padding-left: 120px;
  display: flex;
  align-items: center;
  transition: background 250ms;
}
</style>
