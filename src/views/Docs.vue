<template>
  <div class="docs">
    <div class="nav">
      <Anchor customClass="customClass">
        <AnchorLink
          v-for="item in navArr"
          :key="item.id"
          :href="item.id"
          :title="item.title"
          :nested="item.nested"
          :affix="false"
        />
      </Anchor>
    </div>
    <div class="content">
      <div id="xxx">xxx</div>
      <div id="yyy">yyy</div>
      <div id="zzz">zzz</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnchorLink from '@/components/AnchorLink.vue'
import Anchor from '@/components/Anchor.vue'

const navArr = [
  { id: `#xxx`, title: '简介', nested: false },
  { id: `#yyy`, title: '案例', nested: false },
  { id: `#zzz`, title: `常规用法`, nested: true }
]
</script>

<style lang="scss" scoped>
#xxx,
#yyy,
#zzz {
  height: 500px;
}
.docs {
  display: flex;
  > .nav {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 50px;
    background: #f5f5f5;
  }
  > .content {
    flex-grow: 10;
    margin-left: 200px;
  }
}
</style>
