<script setup lang="ts">
  import { storageMaterialData } from '@/api/cockpit/index';
  import { getUserInfo } from '@/utils';

  const allData = ref<any>([]);
  const loading = ref(true);
  storageMaterialData({
    companyId: getUserInfo().companyId,
  }).then((res: any) => {
    allData.value = res.data;
    loading.value = false;
  });
</script>
<template>
  <div class="h-900px overflow-y-auto box-wwebkit">
    <div
      class="flex justify-center flex-wrap mt-20px"
      v-for="(item, index) in allData"
      :key="item.groupName"
    >
      <div class="chart-title"> {{ item.groupName }} </div>
      <div class="w-full b-1px b-#2D67AF h-410px mt-30px">
        <Chart :data="item.storageMaterialData" v-if="!loading" :id="`barChart${index}`" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .chart-title {
    width: 495px;
    height: 52px;
    background: linear-gradient(to right, rgba(131, 184, 251, 0.29), rgba(131, 184, 251, 0));
    display: flex;
    justify-content: center;
    line-height: 60px;
    position: relative;
    font-weight: bold;
    font-size: 24px;
    font-family: PangMenZhengDao;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(131, 184, 251, 0.29), rgba(131, 184, 251, 0));
      position: absolute;
      top: 8px;
      left: 10px;
      margin-right: 10px;
    }
  }
  .chart {
    //     background: rgba(45, 103, 175, 29);
    background: linear-gradient(to top, rgba(18, 50, 95, 0.29), rgba(18, 50, 95, 0));
  }

  /* 修改整个滚动条的大小 */
  .box-wwebkit::-webkit-scrollbar {
    width: 5px; /* 垂直滚动条宽度 */
    height: 5px; /* 水平滚动条高度 */
  }

  /* 修改滚动条轨道（背景） */
  .box-wwebkit::-webkit-scrollbar-track {
    background-color: rgba(78, 164, 255, 0.2); /* 背景颜色 */
    border-radius: 5px;
  }

  /* 修改滚动条滑块（滑动的部分） */
  .box-wwebkit::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块颜色 */
    border-radius: 5px;
    border: 3px solid rgba(78, 164, 255, 0.2); /* 给滑块加一个边框 */
  }

  /* 滑块悬停时的样式 */
  .box-wwebkit::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 鼠标悬停时的颜色 */
  }
</style>
