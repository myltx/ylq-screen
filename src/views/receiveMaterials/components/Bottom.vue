<script setup lang="ts">
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
  });
  watchEffect(() => {
    console.log(props.data, 'props.data');
  });
</script>
<template>
  <div class="mt-270px flex items-center justify-between">
    <div class="module">
      <div class="text-center flex items-center justify-center mt-50px"> 车牌号 </div>
      <div class="text-center flex items-center justify-center mt-20px color-#36d8fd font-500">
        {{ data?.carNum || '' }}
      </div>
    </div>
    <div class="module">
      <div class="text-center flex items-center justify-center mt-50px"> 材料名称 </div>
      <div class="text-center flex items-center justify-center mt-20px color-#36d8fd font-500">
        {{ data?.materialName || '' }}
      </div>
    </div>
    <div class="module">
      <div class="text-center flex items-center justify-center mt-50px"> 进场数量:吨 </div>
      <div class="text-center flex items-center justify-center mt-20px color-#36d8fd font-500">
        {{ data?.entryQuantity || '' }}
      </div>
    </div>
    <div class="module">
      <div class="text-center flex items-center justify-center mt-50px">
        <div> 毛量: </div>
        <div class="text-center flex items-center justify-center ml-5px color-#36d8fd font-500">
          {{ data?.grossWeight || '' }}
        </div>
      </div>
      <div class="text-center flex items-center justify-center mt-20px font-500">
        <div> 皮重: </div>
        <div class="text-center flex items-center justify-center ml-5px color-#36d8fd font-500">
          {{ data?.tareWeight || '' }}
        </div>
      </div>
    </div>
    <div class="module">
      <div class="text-center flex items-center justify-center mt-50px"> 仓料号 </div>
      <div class="text-center flex items-center justify-center mt-20px color-#36d8fd font-500">
        {{ data?.materialId || '' }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .module {
    width: 292px;
    height: 179px;
    background: rgba(131, 184, 251, 0.2);
    margin: 0 auto;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(131, 184, 251, 0.2);
      position: absolute;
      top: -20px;
      left: -20px;
      margin-right: 10px;
    }
  }
</style>
