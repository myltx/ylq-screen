<template>
  <div class="center-chart">
    <div class="center-chart-title">生产进度</div>
    <div class="center-chart-content mt-10">
      <div class="center-chart-content-item large">
        <div class="center-chart-content-item-title">场站累计产量</div>
        <div class="center-chart-content-item-value">12153.51方</div>
      </div>
      <div class="center-chart-content-item large">
        <div class="center-chart-content-item-title">2024年产量</div>
        <div class="center-chart-content-item-value">2673.2方</div>
      </div>
    </div>
    <div class="center-chart-content mt-30">
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">周产量</div>
        <div class="center-chart-content-item-value">231方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">季产量</div>
        <div class="center-chart-content-item-value">12153.51方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">月产量</div>
        <div class="center-chart-content-item-value">237方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">日产量</div>
        <div class="center-chart-content-item-value">38方</div>
      </div>
    </div>
    <BasicBox title="混凝土累计生产量" class="mt-15">
      <div class="h-245px carousel-bg">
        <MultiplePillars class="w-full h-245px" :data="SettingOutlined" id="MultiplePillars" />
      </div>
    </BasicBox>
  </div>
</template>

<script lang="ts" setup>
  import MultiplePillars from '@/components/MultiplePillars/index.vue';
  const SettingOutlined = {
    data: [
      ['product', '2012', '2013', '2014', '2015'],
      ['TJ08-号机', 41.1, 30.4, 65.1, 53.3],
      ['TJ08二号机', 86.5, 92.1, 85.7, 83.1],
    ],
  };
</script>

<style scoped>
  .carousel-bg {
    background: linear-gradient(to bottom, #072655, #123c72);
  }
  .center-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .center-chart-title {
    font-size: 24px;
    color: #fff;
    margin-bottom: 20px;
  }

  .center-chart-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .center-chart-content-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: #fff;
    text-align: center;
  }

  .center-chart-content-item.large {
    width: 257px;
    height: 182px;
  }

  .center-chart-content-item.small {
    width: 225px;
    height: 110px;
  }

  .center-chart-content-item-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .center-chart-content-item-value {
    font-size: 24px;
  }
</style>
