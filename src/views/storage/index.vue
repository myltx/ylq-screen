<script setup lang="ts">
  import { storageMaterialData } from '@/api/cockpit/index';
  import { getUserInfo } from '@/utils';

  const allData = ref<any>([]);
  const data = [
    {
      name: '1号',
      value: 100,
    },
    {
      name: '2号',
      value: 200,
    },
    {
      name: '3号',
      value: 300,
    },
    {
      name: '4号',
      value: 400,
    },
    {
      name: '5号',
      value: 500,
    },
  ];
  const loading = ref(true);
  storageMaterialData({
    companyId: getUserInfo().companyId,
  }).then((res: any) => {
    console.log(res, 'r');
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
