<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

const props = withDefaults(defineProps<{ href: string; nested?: boolean }>(), {
  nested: false
})
const { href } = toRefs(props)
// 滑动元素
const onClick = () => {
  if (href.value && document.querySelector(href.value)) {
    document.querySelector(href.value)!.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <div
    @click="onClick"
    class="ui-anchorLink-title"
    :class="{ 'ui-anchorLink-nested': nested }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.ui-anchorLink-title {
  cursor: pointer;
  transition: all 250ms;
  white-space: nowrap;
  &.ui-anchorLink-nested {
    margin-left: 24px;
  }
  &:hover {
    color: #1890ff;
  }
  &.active {
    color: #1890ff;
  }
}
</style>
