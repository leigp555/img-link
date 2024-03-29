<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

type AlertType = 'success' | 'info' | 'warning' | 'error' | 'loading'

const emits = defineEmits(['close'])
const props = withDefaults(
  defineProps<{
    message: string
    type?: AlertType
    closable?: boolean
    description?: string
    showIcon?: boolean
    banner?: boolean
  }>(),
  {
    closable: false,
    description: '',
    type: 'success',
    showIcon: false,
    banner: false
  }
)
const wrapRef = ref<HTMLElement | null>(null)
const onClose = () => {
  wrapRef.value?.classList.add('alert-close')
  emits('close', props.message)
}
</script>

<template>
  <div
    ref="wrapRef"
    class="ui-alert-wrap"
    :class="{
      'alert-wrap-hasDescription': description || $slots.description,
      [`ui-alert-${type}`]: true,
      'ui-alert-noBorder': banner
    }"
  >
    <div
      v-if="showIcon && !$slots.icon"
      class="ui-alert-icon"
      :class="{ 'alert-icon-description': description || $slots.description }"
    >
      <SvgIcon
        name="error"
        width="16px"
        height="16px"
        fill="#ff4d4f"
        v-if="type === 'error'"
      />
      <SvgIcon
        name="loading"
        width="16px"
        height="16px"
        fill="#1890ff"
        v-if="type === 'loading'"
        class="alert-icon-loading"
      />
      <SvgIcon
        name="info"
        width="16px"
        height="16px"
        fill="#1890ff"
        v-else-if="type === 'info'"
      />
      <SvgIcon
        name="warning"
        width="16px"
        height="16px"
        fill="#faad14"
        v-else-if="type === 'warning'"
      />
      <SvgIcon
        name="success"
        width="16px"
        height="16px"
        fill="#52c41a"
        v-else-if="type === 'success'"
      />
    </div>
    <div
      class="ui-alert-icon"
      v-if="$slots.icon"
      :class="{ 'alert-icon-description': description || $slots.description }"
    >
      <slot name="icon" />
    </div>
    <div class="ui-alert-content-wrap">
      <div
        class="ui-alert-content"
        :class="{ 'alert-content-hasDescription': description || $slots.description }"
      >
        <div class="ui-alert-message">
          <span v-if="$slots.title">
            <slot name="title" />
          </span>
          <span v-else>{{ message }}</span>
        </div>
      </div>
      <div class="ui-alert-description" v-if="description || $slots.description">
        <span v-if="$slots.description"><slot name="description" /></span>
        <span v-else>{{ description }}</span>
      </div>
    </div>
    <span
      v-if="closable"
      class="ui-alert-close"
      :class="{ 'ui-alert-description-close': description || $slots.description }"
      @click="onClose"
    >
      <SvgIcon name="cancel" width="12px" height="12px" />
    </span>
  </div>
</template>

<style lang="scss">
.ui-alert-wrap {
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5em;
  padding: 8px 15px;
  border-radius: 2px;
  margin-bottom: 16px;
  display: flex;
  //box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';
  > .ui-alert-icon {
    display: flex;
    margin-right: 8px;
    align-items: center;
    &.alert-icon-description {
      align-items: start;
      margin-right: 15px;
      font-size: 24px;
      > svg {
        width: 24px;
        height: 24px;
      }
    }
    > .alert-icon-loading {
      animation: loading_icon infinite 1s linear;
    }
  }
  &.alert-wrap-hasDescription {
    padding: 15px;
  }
  &.alert-close {
    display: none;
  }
  &.ui-alert-success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
  }
  &.ui-alert-info {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
  &.ui-alert-warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
  }
  &.ui-alert-error {
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
  }
  &.ui-alert-noBorder {
    border: none;
  }
  > .ui-alert-content-wrap {
    display: flex;
    flex-grow: 10;
    flex-direction: column;
    align-items: start;
    word-wrap: break-word;
    > .ui-alert-content {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      &.alert-content-hasDescription {
        margin-bottom: 4px;
        > .ui-alert-message {
          font-weight: 500;
          font-size: 16px;
        }
      }
      > .ui-alert-message {
      }
    }
    > .ui-alert-description {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }
  }
  > .ui-alert-close {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 8px;
    font-size: 12px;
    line-height: 12px;
    &.ui-alert-description-close {
      align-items: start;
      cursor: pointer;
      > svg {
        width: 12px;
        height: 12px;
      }
    }
  }
}
@keyframes loading_icon {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
