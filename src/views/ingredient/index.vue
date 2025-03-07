<template>
  <div>
    <AutoScrollTable
      class="auto-scroll-table"
      :headers="[
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
      ]"
      :rows="alarmList"
      height="300px"
      :class-options="{
        step: 0.5,
      }"
      :scrollAuto="false"
    />
  </div>
</template>
<script lang="ts" setup>
  import { color } from 'echarts';
  import { ref } from 'vue';

  const alarmList = ref([
    {
      method: '吊斗',
      num: 'C30',
      percent: 0.38,
      degree: '160-200',
      jd: 11,
      style: {
        textAlign: 'center',
        color: 'red',
      },
      class: ' text-center',
    },
  ]);
</script>
