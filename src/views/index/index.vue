<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { getUserInfo } from '@/utils';
  import Top from './components/Top.vue';

  const { isLoading } = storeToRefs(useLoadingStore());
  const userInfo = getUserInfo();
  console.log(userInfo);
</script>
<template>
  <PageWrapper :title="userInfo?.companyName">
    <template #header-left>
      <div class="flex items-center justify-between w-80% mt-28px">
        <div class="nav w-181px h-52px active"> 收料 </div>
        <div class="nav w-181px h-52px"> 收料 </div>
      </div>
    </template>
    <template #header-right>
      <div class="flex items-center justify-between w-80% mt-28px">
        <div class="nav w-181px h-52px active"> 收料 </div>
        <div class="nav w-181px h-52px"> 收料 </div>
        <!-- <div class="color-#eee text-20px">退出登录</div> -->
      </div>
    </template>
    <div class="px-50px py-30px mt-70px color-#fff">
      <Top />
    </div>
  </PageWrapper>
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
    color: #fff;
    &.active {
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      background: url('@/assets/images/index/nav_active.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
