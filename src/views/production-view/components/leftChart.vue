<!--
 * @Author: dongpenghu
 * @Date: 2025-03-05 22:15:32
 * @LastEditors: dongpenghu
 * @LastEditTime: 2025-03-06 01:37:38
 * @Description: 描述
 * @FilePath: \ylq-screen\src\views\production-view\components\leftChart.vue
-->
<script setup lang="ts">
  // import { LeftCircleOutlined, RightCircleOutlined, SettingOutlined } from '@ant-design/icons-vue';
  import PieChart from '@/components/PieChart/index.vue';
  import SingleColumnChart from '@/components/SingleColumnChart/index.vue';
  import OutputChart from '@/components/OutputChart/index.vue';
  const alarmList = ref([
    {
      name: '湿喷C20',
      value: '20.3',
    },
    {
      name: 'C15',
      value: '1.3',
    },
    {
      name: 'C30P8',
      value: '0.3',
    },
    {
      name: '湿喷C25',
      value: '0.3',
    },
    {
      name: 'C20',
      value: '0.3',
    },
    {
      name: 'C25',
      value: '0.3',
    },
  ]);

  const SettingOutlined: any = {
    name: ['天然砂0-4.75mm', '天然砂1-4.75mm', '天然砂2-4.75mm'],
    value: [100, 200, 300],
  };
</script>
<template>
  <div class="mt-24px flex justify-between">
    <div class="w-520px">
      <BasicBox title="混凝土累计生产量">
        <div class="carousel-bg">
          <PieChart class="w-full h-245px" :data="alarmList" id="PieChart" />
        </div>
      </BasicBox>
      <BasicBox title="原材料消耗动态">
        <div class="carousel-bg h-245px">
          <SingleColumnChart
            class="w-full h-245px"
            :data="SettingOutlined"
            id="SingleColumnChart"
          />
        </div>
      </BasicBox>
      <BasicBox title="混凝土累计生产量">
        <div class="carousel-bg h-245px">
          <OutputChart class="w-full h-245px z-50" :data="SettingOutlined" id="OutputChart" />
        </div>
      </BasicBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .carousel-bg {
    background: linear-gradient(to bottom, #072655, #123c72);
  }

  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }

  :deep(.slick-slide h3) {
    color: #fff;
  }
  .carousel-bg {
    background: linear-gradient(to bottom, #061c44, #123c72);
  }
</style>
