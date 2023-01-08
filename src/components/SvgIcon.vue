<template>
  <svg aria-hidden="true" :style="{ width, height, fill }">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, toRefs, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    fill?: string
    width?: string
    height?: string
  }>(),
  {
    width: '1em',
    height: '1em'
  }
)
const { width, height } = toRefs(props)
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
