<script lang="ts" setup>
  import { getLatestPouringOrder } from '@/api/cockpit';
  import { headersTop, headersMid, headersBot } from './ingredient.data';
  import { getUserInfo, setIntervalTimer } from '@/utils';
  const userInfo = getUserInfo();
  const alarmList = ref([]);
  const twoList = ref<any>([]);

  const dataList = ref<any>([]);

  const getData = () => {
    getLatestPouringOrder({
      companyId: userInfo.companyId,
    }).then((res: any) => {
      twoList.value = [];
      alarmList.value = [res.data] || [];
      dataList.value = res.data?.dataList || [];
      twoList.value.push({
        pouringMethod: res.data?.pouringMethod || '',
        recipeNumber: res.data?.recipeNumber || '',
        waterRatio: res.data?.waterRatio || '',
        slump: res.data?.slump || '',
        taskQuantity: res.data?.taskQuantity || '',
      });
    });
  };
  setIntervalTimer(getData);
</script>
<template>
  <div>
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="headersTop"
      :rows="alarmList"
      :height="180"
      :class-options="{
        step: 0.5,
      }"
      :scrollAuto="false"
    />
  </div>
  <div class="my-20px">
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="headersMid"
      :theadStyle="{ background: 'rgba(45, 103, 175, 0)' }"
      :rows="twoList"
      :height="120"
      :class-options="{
        step: 0.5,
      }"
      :scrollAuto="false"
    />
  </div>
  <!-- 第三个表格 -->
  <div class="flex">
    <div class="w-20% color-#1EE7FF text-20px font-medium text-center font-bold">
      <div
        class="h-80px w-100% line-height-80px"
        v-for="(row, index) in headersBot"
        :key="index"
        :class="index % 2 === 0 ? '' : 'bgColor'"
      >
        {{ row.title }}
      </div>
    </div>
    <div class="list-container overflow-hidden flex-grow-1">
      <div class="w-100% overflow-auto flex tablewebkit">
        <div
          class="flex-none color-#1EE7FF text-16px text-center bottom-td"
          v-for="(row, index) in dataList"
          :key="index"
        >
          <div class="h-80px line-height-80px px-12px">{{ row.materialName || '/' }}</div>
          <div class="h-80px line-height-80px bgColor px-12px">{{ row.llyl || '/' }}</div>
          <div class="h-80px line-height-80px px-12px">{{ row.specification || '/' }}</div>
          <div class="h-80px line-height-80px bgColor px-12px">{{ row.sjyl || '/' }}</div>
          <div class="h-80px line-height-80px px-12px">{{ row.water || 0 }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .bottom-td {
    min-width: 200px;
  }
  .bgColor {
    background-color: rgba(78, 164, 255, 0.2);
  }
  .list-container::-webkit-scrollbar {
    width: 0 !important;
  }
  .list-container {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  /* 修改整个滚动条的大小 */
  .tablewebkit::-webkit-scrollbar {
    width: 5px; /* 垂直滚动条宽度 */
    height: 5px; /* 水平滚动条高度 */
  }

  /* 修改滚动条轨道（背景） */
  .tablewebkit::-webkit-scrollbar-track {
    background-color: rgba(78, 164, 255, 0.2); /* 背景颜色 */
    border-radius: 5px;
  }

  /* 修改滚动条滑块（滑动的部分） */
  .tablewebkit::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块颜色 */
    border-radius: 5px;
    border: 3px solid rgba(78, 164, 255, 0.2); /* 给滑块加一个边框 */
  }

  /* 滑块悬停时的样式 */
  .tablewebkit::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 鼠标悬停时的颜色 */
  }
</style>
