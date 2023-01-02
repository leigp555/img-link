<template>
  <div class="history">
    <a-typography>
      <a-typography-paragraph>
        <blockquote class="quote">
          <div class="title">1.0.0，更新时间： <span class="nb">2023-01-03</span></div>
          <ul>
            <li>Upgrade to 3.0.0</li>
            <li>Rewrite with PHP Swoole.</li>
            <li>Add webp format support.</li>
          </ul>
        </blockquote>
      </a-typography-paragraph>
    </a-typography>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
.history {
  .title {
    font-weight: bold;
    border-bottom: 1px dotted #ccc;
    color: #7d50b3;
    margin-bottom: 10px;
  }
  .quote {
    background: var(--input-color);
    color: var(--font-color);
    padding: 10px 10px 2px 10px;
    font-size: 16px;
    line-height: 2em;
  }
}
</style>
