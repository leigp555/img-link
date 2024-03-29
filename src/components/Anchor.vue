<script setup lang="ts">
import {
  defineProps,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
  useSlots,
  VNode,
  withDefaults
} from 'vue'

type ContainerType = () => HTMLElement | Window
type VNodeItem = {
  titleVNode?: VNode | null
  targetOffsetTop?: number
  targetClientHeight?: number
  active?: boolean
  order: number
}
const props = withDefaults(
  defineProps<{
    customClass?: string
    scrollContainer?: ContainerType
  }>(),
  {
    customClass: 'custom-class',
    scrollContainer: () => window
  }
)
const { scrollContainer } = toRefs(props)
let slots: VNode[] = []
const getSlots = () => {
  let s: VNode[] = []
  if (useSlots().default) {
    s = useSlots().default?.() || []
  }
  if (s.length === 1 && s[0].children) {
    slots = s[0].children as VNode[]
    return
  }
  slots = s
}
// 获取所有节点
getSlots()
// 选中的节点
const selectItem = ref<VNodeItem | null>(null)
// 改造所有节点
const elInfo = ref<VNodeItem[]>([])
const currentOrder = ref<number>(0)
const realScrollEl = ref<HTMLElement | null>(null)
// 获取所有节点的信息
elInfo.value = slots.map((item, index) => {
  return {
    titleVNode: item,
    targetOffsetTop: 0,
    targetClientHeight: 0,
    active: index === 0,
    order: index
  }
})
// 简单的节流函数
function throttle(func: () => void, wait: number) {
  let startTime = new Date().getTime() as number
  return () => {
    const curTime = new Date().getTime() as number
    if (curTime - startTime >= wait) {
      func()
      startTime = curTime
    }
  }
}
const getElInfo = () => {
  elInfo.value.forEach((item) => {
    let target: HTMLElement
    if (item.titleVNode && item.titleVNode.props) {
      target = document.querySelector(item.titleVNode.props.href) as HTMLElement
      if (target) {
        item.targetOffsetTop = target.offsetTop - realScrollEl.value!.offsetTop
        item.targetClientHeight = target.clientHeight
      } else {
        item.targetOffsetTop = 0
        item.targetClientHeight = 0
      }
    }
  })
}
// 获取滑动的高度,并判断是否高亮
function handle() {
  getElInfo()
  let scrollDistance: number = 0
  if (realScrollEl.value) scrollDistance = realScrollEl.value.scrollTop
  elInfo.value.forEach((item) => {
    if (
      item.targetOffsetTop! >= scrollDistance - item.targetClientHeight! &&
      item.targetOffsetTop! <= scrollDistance + 100
    ) {
      selectItem.value = item
      currentOrder.value = item.order
    }
    item.active = false
  })
  selectItem.value!.active = true
}
// 绑定监听滚动事件
const scrollHandle = throttle(handle, 20)
onMounted(() => {
  realScrollEl.value = document.documentElement
  getElInfo()
  selectItem.value = elInfo.value[0]
  if (realScrollEl.value) {
    window.addEventListener('scroll', scrollHandle)
  }
})
onBeforeUnmount(() => {
  realScrollEl.value?.removeEventListener('scroll', scrollHandle)
})
</script>

<template>
  <div class="ui-anchor-wrap" :class="{ customClass }">
    <Component
      v-for="item in elInfo"
      :is="item.titleVNode"
      :key="item.titleVNode"
      :class="{ active: item.active }"
    />
  </div>
</template>

<style lang="scss">
.ui-anchor-wrap {
  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: transparent;
  position: relative;
}
</style>
