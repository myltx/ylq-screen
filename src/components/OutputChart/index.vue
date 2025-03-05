<script setup lang="ts">
import * as echarts from 'echarts';
import { nextTick, onMounted, toRefs, defineProps, defineExpose } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'singleColumnChart',
  },
  data: {
    type: Array,
    default: () => [],
  },
});
let myChart: any = null;

const { id, data } = toRefs(props);

function initChart() {
  const dom = document.getElementById(id.value);
  if (dom) {
    myChart = echarts.init(dom);
    setOption();
  }
}

function setOption() {
  const colors = ['#B7D2F1'];
  const options = {
    title: {
        text: '义龙庆(丽水段)TJ08标1号拌合站环境监测',
        left: 'center',
        textStyle: {
        color: '#fff',
        paddingBottom: 10,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {top: '10%', left: '3%', right: '4%', bottom: '13%', containLabel: true
      },
    series: [
      {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 20,
        fontSize: 10
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        color: 'inherit'
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
  };
  if (myChart) {
    myChart.setOption(options);
  }
}

onMounted(() => {
  nextTick(() => {
    initChart();
  });
});

defineExpose({
  initChart,
  setOption,
});
</script>

<template>
  <div :id="id" class="w-full h-full"></div>
</template>

<style scoped></style>