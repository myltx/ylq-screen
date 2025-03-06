<script setup lang="ts">
  import leftChart from './components/leftChart.vue';
  import centerChart from './components/centerChart.vue';
  import rightChart from './components/rightChart.vue';

  import { getEntryMaterialData } from '@/api/cockpit';
  import { getUserInfo } from '@/utils';
  import { useLoadingStore } from '@/stores/loading';

  const { startLoading, endLoading } = useLoadingStore();
  const userInfo = getUserInfo();

  const detailData = ref({});

  const getData = () => {
    startLoading();
    getEntryMaterialData({
      companyId: userInfo.companyId,
    }).then((res: any) => {
      if (res.errcode == 0) {
        detailData.value = res.data;
        console.log(detailData.value);
      }
    });
    endLoading();
  };
  getData();
</script>
<template>
  <div class="flex justify-around">
    <leftChart class="w-30%" />
    <centerChart class="w-34%" />
    <rightChart class="w-34%" />
  </div>
</template>

<style scoped></style>
