<template>
  <div>
    <BasicBox title="最新浇筑令">
      <div class="carousel-bg h-310px">
        <a-descriptions title="" :column="1" class="color-[#fff] p-4 text-left" align="center">
          <a-descriptions-item label="浇筑部位">
            TJ08/工程施工阶段/K188+090.00-K189+293.00石子垟隧道右线/K188+293石子垟隧道右线出口工程/套拱/套拱/基础混凝土浇筑
          </a-descriptions-item>
          <a-descriptions-item label="设计方量">1000m³</a-descriptions-item>
          <a-descriptions-item label="实际方量">1000m³</a-descriptions-item>
          <a-descriptions-item label="配比单号">SGPB-TJ08-20250221-0002</a-descriptions-item>
          <a-descriptions-item label="强度等级">C15</a-descriptions-item>
          <a-descriptions-item label="浇筑时间">2025-03-06 12:00:00</a-descriptions-item>
          <a-descriptions-item label="实际进度">
            <a-progress :percent="47" :stroke-color="{ '0%': '#12386D', '100%': '#FFFFFF' }" />
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </BasicBox>
    <BasicBox title="混凝土浇筑任务进度" class="mt-15">
      <AutoScrollTable
        class="auto-scroll-table"
        :headers="[
          {
            key: 'content',
            title: '项目名称',
            style: {
              width: '100px',
              textAlign: 'left',
            },
          },
          {
            key: 'date',
            title: '强度等级',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'date',
            title: '任务方量',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'num',
            title: '实际方量',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'jd',
            title: '进度',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
        ]"
        :rows="alarmList"
        height="300px"
        :class-options="{
          step: 0.5,
        }"
        :scroll-auto="true"
      />
    </BasicBox>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const alarmList = ref([
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
    {
      content: '这是一段文子这是一段文宁这是一段文作这是一段文折这是一段文宇',
      date: 'C30',
      num: 10,
      jd: 1,
      style: {},
      class: '',
    },
  ]);
</script>

<style scoped lang="scss">
  .carousel-bg {
    background: linear-gradient(to bottom, #072655, #123c72);
    color: #fff;
  }
  :deep(.ant-descriptions-item-label) {
    color: #fff;
    line-height: auto;
  }
  :deep(.ant-descriptions-item-content) {
    color: #fff;
    line-height: auto;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  :deep(td) {
    border: none !important;
  }
  :deep(.ant-progress-text) {
    color: #fff !important;
  }
  :deep(.auto-scroll-table .td) {
    width: 100%;
    white-space: wrap; //文本不会换行
    text-align: center; // 文本居中
    display: flex;
    align-items: center;
    justify-content: center;
    .px-16px {
      padding: 12px 0px !important;
    }
  }
</style>
