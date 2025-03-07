<script setup lang="ts">
  // import { LeftCircleOutlined, RightCircleOutlined, SettingOutlined } from '@ant-design/icons-vue';
  import PieChart from '@/components/PieChart/index.vue';
  import SingleColumnChart from '@/components/SingleColumnChart/index.vue';
  import OutputChart from '@/components/OutputChart/index.vue';
  import { getCaculationByStrength, getEnvMonitor, getMaterialNumber } from '@/api/cockpit/index';
  import { getUserInfo } from '@/utils';

  const userInfo = getUserInfo();

  const alarmList = ref([]);
  const SettingOutlined = ref<any>({
    name: [],
    value: [],
  });
  const instrumentPanelData = ref<any>({});
  getCaculationByStrength({
    companyId: userInfo.companyId,
  }).then((res: any) => {
    alarmList.value = res.data.map((item: any) => {
      return {
        name: item.F_StrengthGrade,
        value: item.GradeSum,
        ...item,
      };
    });
  });
  getMaterialNumber({
    companyId: userInfo.companyId,
  }).then((res: any) => {
    SettingOutlined.value = {
      name: res.data.map((item: any) => item.ClName),
      value: res.data.map((item: any) => item.ClYL),
    };
  });

  getEnvMonitor({
    companyId: userInfo.companyId,
  }).then((res: any) => {
    instrumentPanelData.value = res.data;
  });
</script>
<template>
  <div class="mt-24px flex justify-between">
    <div class="w-520px">
      <BasicBox title="混凝土累计生产量">
        <div class="carousel-bg">
          <PieChart
            class="w-full h-245px"
            :data="alarmList"
            id="PieChart"
            v-if="alarmList.length"
          />
        </div>
      </BasicBox>
      <BasicBox title="原材料消耗动态" :height="'245px'">
        <div class="carousel-bg1 h-225px">
          <SingleColumnChart
            class="w-full h-245px"
            :data="SettingOutlined"
            v-if="SettingOutlined.name.length && SettingOutlined.value.length"
            id="SingleColumnChart"
          />
        </div>
      </BasicBox>
      <BasicBox title="混凝土累计生产量" :height="'180px'">
        <div class="carousel-bg h-200px">
          <div class="text-center">{{ instrumentPanelData?.deviceName }}</div>
          <div class="h-80% w-100% flex items-center justify-between relative">
            <OutputChart
              class="w-80% h-100% z-50"
              :data="instrumentPanelData"
              id="OutputChart"
              v-if="Object.keys(instrumentPanelData).length"
            />
            <div
              class="w-30% h-100% flex flex-col items-center justify-between absolute right-0 top-10px"
            >
              <div class="w-100%">
                <div class="flex items-center justify-between h-30px">
                  <div>PM2.5</div>
                  <div> {{ instrumentPanelData?.pm25 }} ug/m³ </div>
                </div>
                <div class="flex items-center justify-between h-30px">
                  <div>PM10</div>
                  <div> {{ instrumentPanelData?.pm10 }} ug/m³ </div>
                </div>
                <div class="flex items-center justify-between h-30px">
                  <div>温度</div>
                  <div> {{ instrumentPanelData?.temperature }} ℃ </div>
                </div>
                <div class="flex items-center justify-between h-30px">
                  <div>湿度</div>
                  <div> {{ instrumentPanelData?.humidity }} %RH </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .carousel-bg {
    background: linear-gradient(to top, rgba(17, 52, 100, 0.5), rgba(17, 52, 100, 0));
  }
  .carousel-bg1 {
    background: linear-gradient(to top, rgba(17, 52, 100, 0.5), rgba(17, 52, 100, 0));
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
</style>
