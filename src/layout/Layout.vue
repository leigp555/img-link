<template>
  <Header />
  <section class="content">
    <slot />
  </section>
  <Footer />
</template>
<script setup lang="ts">
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 120px;
}
</style>
