<script lang="ts" setup>
  import { getLatestPouringOrder } from '@/api/cockpit';
  import { headersTop, headersMid, headersBot } from './ingredient.data';
  import { getUserInfo } from '@/utils';
  const userInfo = getUserInfo();
  const alarmList = ref([]);
  const twoList = ref<any>([]);

  const dataList = ref<any>([]);

  getLatestPouringOrder({
    companyId: userInfo.companyId,
  }).then((res: any) => {
    alarmList.value = res.data?.dataList || [];
    dataList.value = res.data?.dataList || [];
    twoList.value.push({
      pouringMethod: res.data?.pouringMethod || '',
      recipeNumber: res.data?.recipeNumber || '',
      waterRatio: res.data?.waterRatio || '',
      slump: res.data?.slump || '',
      taskQuantity: res.data?.taskQuantity || '',
    });
  });
</script>
<template>
  <div>
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="headersTop"
      :rows="alarmList"
      :height="360"
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
      <div class="w-100% overflow-auto flex">
        <div
          class="w-200px flex-none color-#1EE7FF text-16px text-center"
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
</style>
