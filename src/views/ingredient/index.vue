<template>
  <div>
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="headersTop"
      :rows="alarmList"
      height="300px"
      :class-options="{
        step: 0.5,
      }"
      :scrollAuto="false"
    />
  </div>
  <div>
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="headersMid"
      :rows="alarmList"
      height="300px"
      :class-options="{
        step: 0.5,
      }"
      :scrollAuto="false"
    />
  </div>
  <!-- 第三个表格 -->
  <div class="flex">
    <div class="thead color-[#4EA4FF] text-[20px] font-medium text-center font-bold">
      <div
        class="w-[300px] h-[80px] line-height-[80px] bgColor"
        v-for="(row, index) in headersBot"
        :key="index"
        :style="row.style"
        :class="index % 2 === 0 ? '' : 'bgColor'"
        >{{ row.title }}</div
      >
      <!-- <div class="h-[80px] line-height-[80px]">理论用量</div>
      <div class="h-[80px] line-height-[80px] bgColor">规格型号</div>
      <div class="h-[80px] line-height-[80px]">实际用量</div>
      <div class="h-[80px] line-height-[80px] bgColor">含水量</div> -->
    </div>
    <div class="flex w-[80%] overflow-hidden overflow-x-scroll">
      <div
        class="thead color-[#4EA4FF] text-[16px] text-center"
        v-for="(row, index) in dataList"
        :key="index"
        :style="row.style"
      >
        <div class="w-[200px] h-[80px] line-height-[80px] bgColor px-[12px]">{{
          row.materialName
        }}</div>
        <div class="w-[200px] h-[80px] line-height-[80px] px-[12px]">{{
          row.TheoreticalDosage
        }}</div>
        <div class="w-[200px] h-[80px] line-height-[80px] bgColor px-[12px]">{{
          row.specification
        }}</div>
        <div class="w-[200px] h-[80px] line-height-[80px] px-[12px]">{{ row.actualUsage }}</div>
        <div class="w-[200px] h-[80px] line-height-[80px] bgColor px-[12px]">{{
          row.moistureContent
        }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { color } from 'echarts';
  import { ref } from 'vue';
  const headersTop = ref([
    {
      key: 'name',
      title: '材料名称',
      style: {
        width: '50%',
        textAlign: 'center',
      },
    },
    {
      key: 'num',
      title: '规格',
      style: {
        width: '25%',
        textAlign: 'center',
      },
    },
    {
      key: 'percent',
      title: '数量：吨',
      style: {
        width: '25%',
        textAlign: 'center',
      },
    },
  ]);
  const headersMid = ref([
    {
      key: 'method',
      title: '浇筑方式',
      style: {
        width: '100px',
        textAlign: 'center',
      },
    },
    {
      key: 'num',
      title: '设计标号',
      style: {
        width: '100px',
        textAlign: 'center',
      },
    },
    {
      key: 'percent',
      title: '设计水胶比',
      style: {
        width: '100px',
        textAlign: 'center',
      },
    },
    {
      key: 'degree',
      title: '设计塌落度',
      style: {
        width: '100px',
        textAlign: 'center',
      },
    },
    {
      key: 'jd',
      title: '预计工程量',
      style: {
        width: '100px',
        textAlign: 'center',
      },
    },
  ]);
  const alarmList = ref([
    {
      method: '吊斗',
      num: 'C30',
      percent: 0.38,
      degree: '160-200',
      jd: 11,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
  ]);
  //第三表格
  //表头
  const headersBot = ref([
    {
      key: 'materialName',
      title: '材料名称',
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      key: 'TheoreticalDosage',
      title: '理论用量',
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      key: 'specification',
      title: '规格型号',
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      key: 'actualUsage',
      title: '实际用量',
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      key: 'moistureContent',
      title: '含水量',
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
  ]);
  const dataList = ref([
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
        color: 'red',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
    {
      materialName: '粗集料2',
      TheoreticalDosage: 234,
      specification: '碎石10-10mm',
      actualUsage: 356,
      moistureContent: 4,
      style: {
        width: '200px',
        textAlign: 'center',
      },
    },
  ]);
</script>
<style scoped lang="scss">
  .bgColor {
    background-color: rgba(78, 164, 255, 0.2);
  }
</style>
