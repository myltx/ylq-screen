<template>
  <div class="center-chart">
    <div class="center-chart-title">
      <!-- 生产进度 -->
    </div>
    <div class="center-chart-content mt-10">
      <div class="center-chart-content-item large">
        <div class="center-chart-content-item-title">场站累计产量</div>
        <div class="center-chart-content-item-value"> {{ detailData?.totalSum }} 方</div>
      </div>
      <div class="center-chart-content-item large">
        <div class="center-chart-content-item-title">2024年产量</div>
        <div class="center-chart-content-item-value">{{ detailData?.yearSum }} 方</div>
      </div>
    </div>
    <div class="center-chart-content mt-20">
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">周产量</div>
        <div class="center-chart-content-item-value">{{ detailData?.weekSum }} 方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">季产量</div>
        <div class="center-chart-content-item-value">{{ detailData?.seasonSum }} 方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">月产量</div>
        <div class="center-chart-content-item-value">{{ detailData?.monthSum }} 方</div>
      </div>
      <div class="center-chart-content-item small">
        <div class="center-chart-content-item-title">日产量</div>
        <div class="center-chart-content-item-value">{{ detailData?.daySum }} 方</div>
      </div>
    </div>
    <BasicBox title="产能情况报表" class="mt-15">
      <div class="h-245px carousel-bg">
        <MultiplePillars
          class="w-full h-245px"
          :data="SettingOutlined"
          id="MultiplePillars"
          v-if="SettingOutlined.length"
        />
      </div>
    </BasicBox>
  </div>
</template>

<script lang="ts" setup>
  import { getMachineProduce, getProduceCaculation } from '@/api/cockpit';
  import MultiplePillars from '@/components/MultiplePillars/index.vue';
  import { getUserInfo, setIntervalTimer } from '@/utils';

  const userInfo = getUserInfo();
  const detailData = ref<any>({});
  const SettingOutlined = ref<any>([]);
  const getData = () => {
    // 中间
    getProduceCaculation({ companyId: userInfo.companyId }).then((res: any) => {
      detailData.value = res.data;
    });
    getMachineProduce({ companyId: userInfo.companyId }).then((res: any) => {
      SettingOutlined.value = res.data;
    });
  };
  setIntervalTimer(getData);
</script>

<style scoped>
  .carousel-bg {
    background: linear-gradient(to top, rgba(17, 52, 100, 0.5), rgba(17, 52, 100, 0));
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
    gap: 30px;
  }

  .center-chart-content-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #fff;
    text-align: center;
  }

  .center-chart-content-item.large {
    width: 257px;
    height: 182px;
    background: url(../../../assets/images/prodaction/total_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .center-chart-content-item.small {
    width: 225px;
    height: 110px;
    background: url(../../../assets/images/prodaction/yield_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .center-chart-content-item-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .center-chart-content-item-value {
    font-size: 24px;
  }
</style>
