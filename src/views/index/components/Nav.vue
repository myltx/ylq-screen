<script setup lang="ts"></script>
<template>
  <div class="text-white flex items-center justify-between">
    <div class="flex items-center justify-between">
      <div class="nav w-181px h-52px active"> 收料 </div>
      <div class="nav w-181px h-52px ml-50px"> 收料 </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="nav w-181px h-52px">收料 </div>
      <div class="nav w-181px h-52px ml-50px">收料 </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .nav {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: url('@/assets/images/index/nav.png') no-repeat;
    background-size: 100% 100%;
    z-index: 99;
    &.active {
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      background: url('@/assets/images/index/nav_active.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
