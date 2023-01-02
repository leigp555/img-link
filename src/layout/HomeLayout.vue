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
  padding: 100px 120px;
}
</style>
