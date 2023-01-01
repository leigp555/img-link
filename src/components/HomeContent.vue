<template>
  <div class="home">
    <p v-for="i in 10" :key="i">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur beatae
      consectetur deserunt distinctio dolorem ea ipsum iure pariatur quae rem, rerum
      saepe. Eius fuga ipsum magni necessitatibus ratione, repellendus!
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.home {
  height: 800px;
  padding: 50px 120px;
}
</style>
