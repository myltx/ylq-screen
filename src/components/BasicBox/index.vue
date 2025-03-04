<script setup lang="ts">
  import type { BasicBoxProps } from 'types/components.common';
  import { BasicConfig } from './src/default';
  const { title: defaultTitle, height: defaultHeight } = BasicConfig;

  const props = defineProps<BasicBoxProps>();
  const { title } = toRaw(props);
</script>
<template>
  <div class="basic-box">
    <div class="box-title">
      <div class="title">{{ title || defaultTitle }}</div>
      <div class="sub-title">
        <slot name="subTitle"></slot>
      </div>
    </div>
    <div
      class="box-content"
      :style="{
        height: `${height || defaultHeight}`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './src/index.scss';
</style>
