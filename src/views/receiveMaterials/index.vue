<script setup lang="ts">
  import Top from './components/Top.vue';
  import Bottom from './components/Bottom.vue';
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
  <div>
    <Top />
    <Bottom :data="detailData" />
  </div>
</template>

<style scoped></style>
