<template>
  <Layout>
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1300, y: 400 }"
      class="table"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
    </a-table>
  </Layout>
</template>

<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue'
import { defineComponent } from 'vue'
import Layout from '@/layout/Layout.vue'

const columns: TableColumnsType = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100
  }
]

interface DataItem {
  key: string
  name: string
  age: number
  address: string
}

const data: DataItem[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}
</script>

<style lang="scss">
.ant-table-pagination-right {
  justify-content: center;
}
</style>
