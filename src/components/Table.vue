<template>
  <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
  </a-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { TableItem } from '@/common/types'

const props = defineProps<{ dataSource?: TableItem[] }>()

const columns = [
  {
    title: '字段',
    dataIndex: 'name'
  },
  {
    title: '类型',
    dataIndex: 'type'
  },
  {
    title: '描述',
    dataIndex: 'description'
  }
]

const getTokenTable: TableItem = ref([
  {
    key: '0',
    name: 'Edward King 0',
    type: 32,
    description: 'London, Park Lane no. 0'
  }
])
</script>
<style lang="scss">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
