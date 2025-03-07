<script setup lang="ts">
  import leftChart from './components/leftChart.vue';
  import centerChart from './components/centerChart.vue';
  import rightChart from './components/rightChart.vue';
</script>
<template>
  <div class="flex justify-around">
    <leftChart class="w-30%" />
    <centerChart class="w-34%" />
    <rightChart class="w-34%" />
  </div>
</template>

<style scoped></style>
