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
  <div class="h-900px overflow-y-auto">
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
</style>
