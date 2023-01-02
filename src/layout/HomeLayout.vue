<template>
  <Header />
  <section class="content">
    <slot />
  </section>
  <Footer />
</template>
<script setup lang="ts">
import Header from '@/layout/HomeHeader.vue'
import Footer from '@/layout/HomeFooter.vue'
</script>

<style lang="scss" scoped>
.content {
  padding-top: 100px;
  margin-bottom: 100px;
  padding-left: 120px;
  padding-right: 120px;
}
</style>
