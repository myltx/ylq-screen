<script setup lang="ts">
  // import { useLoadingStore } from '@/stores/loading';
  import { getUserInfo, removeLocalStorage } from '@/utils';
  import ReceiveMaterials from '../receiveMaterials/index.vue';
  import Storage from '../storage/index.vue';
  import ProductionView from '../production-view/index.vue';
  import Ingredient from '../ingredient/index.vue';
  import { useRouter } from 'vue-router';
  // const { isLoading } = storeToRefs(useLoadingStore());
  const userInfo = getUserInfo();
  const activeIndex = ref(0);
  console.log(userInfo);
  const router = useRouter();
  const handleNav = (index: number) => {
    activeIndex.value = index;
  };
  const loginOut = () => {
    removeLocalStorage('token');
    removeLocalStorage('userInfo');
    router.push('/login');
  };
</script>
<template>
  <PageWrapper :title="userInfo?.companyName">
    <template #header-left>
      <div class="flex items-center justify-between w-[80%] mt-[28px]">
        <div
          class="nav w-[181px] h-[52px]"
          :class="{ active: activeIndex === 0 }"
          @click="handleNav(0)"
        >
          收料
        </div>
        <div
          class="nav w-[181px] h-[52px]"
          :class="{ active: activeIndex === 1 }"
          @click="handleNav(1)"
        >
          仓储
        </div>
      </div>
    </template>
    <template #header-right>
      <div class="flex items-center justify-between w-[80%] mt-[28px]">
        <div
          class="nav w-[181px] h-[52px]"
          :class="{ active: activeIndex === 2 }"
          @click="handleNav(2)"
        >
          配料
        </div>
        <div
          class="nav w-[181px] h-[52px]"
          :class="{ active: activeIndex === 3 }"
          @click="handleNav(3)"
        >
          生产
        </div>
        <div class="color-#eee text-20px cursor-pointer" @click="loginOut">退出登录</div>
      </div>
    </template>
    <div class="px-[50px] py-[30px] mt-[70px] color-[#fff]">
      <ReceiveMaterials v-if="activeIndex === 0" />
      <Storage v-if="activeIndex === 1" />
      <Ingredient v-if="activeIndex === 2" />
      <ProductionView v-if="activeIndex === 3" />
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
    font-family: PangMenZhengDao;
    &.active {
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      background: url('@/assets/images/index/nav_active.png') no-repeat;
      background-size: 100% 100%;
    }
    &:hover {
      background: url('@/assets/images/index/nav_active.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
