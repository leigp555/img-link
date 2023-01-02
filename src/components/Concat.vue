<template>
  <div class="concat">
    <p class="title">联系我</p>
    <div class="content">
      <p>滥用投诉请联系 <a href="mailto:122974945@qq.com">122974945@qq.com</a></p>
      <p>联系管理员 <a href="mailto:122974945@qq.com">122974945@qq.com</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.concat {
  > .title {
    font-size: 25px;
    line-height: 1.2;
  }
  > .content {
    background-color: #c4e3ff;
    margin-top: 20px;
    border: 1px solid #a6cef3;
    border-radius: 3px;
    padding: 20px 20px;
    font-size: 18px;
  }
}
</style>
