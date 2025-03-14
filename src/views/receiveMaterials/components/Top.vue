<script setup lang="ts">
  import { receiveMaterialData } from '@/api/cockpit';
  import { getUserInfo, setIntervalTimer } from '@/utils';
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

  const userInfo = getUserInfo();
  const alarmList = ref([]);
  const getData = () => {
    receiveMaterialData({
      companyId: userInfo.companyId,
    }).then((res: any) => {
      alarmList.value = res.data || [];
    });
  };

  setIntervalTimer(getData);

  const onChange = (current: number) => {
    // console.log(current);
  };
</script>
<template>
  <div class="mt-30px flex justify-between">
    <div class="w-900px">
      <BasicBox title="进场材料" :height="'336px'">
        <AutoScrollTable
          show-index
          :headers="[
            {
              key: 'materialName',
              title: '材料名称',
              style: {},
            },
            {
              key: 'specification',
              title: '规格',
              style: {},
            },
            {
              key: 'weight',
              title: '数量:吨',
              style: {},
            },
          ]"
          :rows="alarmList"
          :class-options="{
            step: 0.5,
          }"
        />
      </BasicBox>
    </div>
    <div class="w-900px">
      <BasicBox title="进场影像">
        <a-carousel
          arrows
          autoplay
          :after-change="onChange"
          class="bg-#2D67AF w-100% px-20px pb-20px carousel-bg"
        >
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <LeftCircleOutlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <div class="w-616px h-336px bg-#D7D7D7" v-for="item in 4" :key="item">{{ item }}</div>
        </a-carousel>
      </BasicBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .carousel-bg {
    background: linear-gradient(to top, rgba(45, 103, 175, 0.29), rgba(45, 103, 175, 0));
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
