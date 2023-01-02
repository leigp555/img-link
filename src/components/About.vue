<template>
  <div class="about">
    <p class="title">关于IMG.URL</p>
    <div class="content">
      <a-alert type="success" show-icon class="alert">
        <template #icon><smile-outlined /></template>
        <template #message>
          <span class="alert">
            IMG.URL仅供分享图片，我们保留随时删除图片和举报上传非法图片者的权利
          </span>
        </template>
      </a-alert>
      <a-alert type="error" show-icon class="alert">
        <template #icon><frown-outlined /></template>
        <template #message>
          <span class="alert">严禁上传和分享以下类型的图片</span>
        </template>
        <template #description>
          <a-typography-paragraph class="alert">
            <ul>
              <li>包含色情、暴力或宣扬恐怖主义的图片。</li>
              <li>侵犯版权，未经授权的图像。</li>
              <li>其他违反中华人民共和国法律的图片。</li>
            </ul>
          </a-typography-paragraph>
        </template>
      </a-alert>
      <a-alert type="info" show-icon class="alert">
        <template #message>
          <span class="alert">在使用服务之前，请阅读使用条款</span>
        </template>
        <template #icon><robot-outlined /></template>
      </a-alert>
      <a-alert type="info" class="alert">
        <template #message>
          <div class="alert" style="display: flex; justify-content: center">
            滥用投诉 122974945@qq.com 联系管理员 122974945@qq.com 电报组
            122974945@qq.com
          </div>
        </template>
      </a-alert>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SmileOutlined, RobotOutlined, FrownOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.about {
  > .title {
    font-size: 25px;
    line-height: 1.2;
  }
  > .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .alert {
    font-size: 18px;
    line-height: 2em;
  }
}
</style>
