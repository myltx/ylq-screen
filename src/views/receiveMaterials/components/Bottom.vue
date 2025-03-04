<script setup lang="ts"></script>
<template>
  <div class="mt-330px flex items-center justify-between">
    <div class="module"></div>
    <div class="module"></div>
    <div class="module"></div>
    <div class="module"></div>
    <div class="module"></div>
  </div>
</template>

<style scoped lang="scss">
  .module {
    width: 292px;
    height: 179px;
    background: rgba(131, 184, 251, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(131, 184, 251, 0.2);
      position: absolute;
      top: -20px;
      left: -20px;
      margin-right: 10px;
    }
  }
</style>
