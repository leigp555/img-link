<script lang="ts" setup>
import { RestFilled, UploadOutlined, PictureOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const fileList: File[] = []
const fileTip = ref<string>('已选择3个文件')
</script>

<template>
  <div class="upload">
    <p class="title">图片上传</p>
    <p class="subTitle">每张图片最大不能超过5M,每次请求最多上传10张照片</p>
    <div class="file-preview">
      <div class="file-content">
        <div class="file-title">
          <p>请将图片拖至此区域</p>
          <p style="font-size: 14px">
            支持单张或多张图片上传,每张图片大小不能超过5M,严禁上传和分享包含色情、暴力或宣扬恐怖主义的图片！！！
          </p>
        </div>
      </div>
    </div>
    <div class="action">
      <input type="text" v-model="fileTip" readonly />
      <a-button type="primary" danger class="x-button clear-button">
        <template #icon><rest-filled /></template>
        <span>清除</span>
      </a-button>
      <a-button type="primary" class="x-button upload-button">
        <template #icon><upload-outlined /></template>
        <span>上传</span>
      </a-button>
      <a-button type="primary" class="x-button select-button">
        <template #icon><picture-outlined /></template>
        <span>选择图片</span>
      </a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload {
  > .title {
    font-size: 25px;
    line-height: 1.2;
  }
  > .action {
    display: flex;
    align-items: center;
    margin-top: 20px;
    > input {
      outline: none;
      display: inline-block;
      height: 42px;
      flex-grow: 10;
      margin-right: 4px;
      text-overflow: ellipsis;
      padding: 4px 11px;
      border: 1px solid var(--border-color);
      border-radius: 2px;
      background: var(--input-color);
      transition: all 250ms;
      &:hover {
        border-color: #1890ff;
      }
      &:focus {
        border: 1px solid #1890ff;
        box-shadow: 0 0 0 2px rgba(24, 114, 255, 0.2);
      }
    }
    > .x-button {
      border-radius: 0;
      height: 42px;
      &.clear-button {
        background: #dc3545;
      }
      &.upload-button {
        background: #17a2b8;
        border-color: #17a2b8;
      }
      &.select-button {
        background: #28a745;
        border-color: #28a745;
      }
    }
  }

  > .file-preview {
    border-radius: 5px;
    border: 1px solid var(--border-color);
    padding: 8px;
    width: 100%;
    margin-bottom: 5px;
    > .file-content {
      border: 1px dashed var(--border-color);
      border-radius: 4px;
      height: 100%;
      text-align: center;
      vertical-align: middle;
      margin: 12px 15px 12px 12px;
      padding: 5px;
      > .file-title {
        color: #aaa;
        font-size: 1.6em;
        padding: 85px 10px;
        cursor: default;
      }
    }
  }
}
</style>
