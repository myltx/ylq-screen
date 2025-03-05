<script setup lang="ts">
import * as echarts from 'echarts';
import { nextTick, onMounted, toRefs, defineProps, defineExpose } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'singleColumnChart',
  },
  data: {
    type: Object,
    default: () => {},
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
    xAxis: {
      type: 'category',
      data: data.value.name,
      axisLabel: {
        color: '#fff',
        paddingTop: 10,
        rotate: 32, // 倾斜放置
        formatter: (value) => {
          const firstThree = value.slice(0, 3); // 提取前3个字符
          const rest = value.slice(3); // 提取从第4个字符开始的部分
          return firstThree + '\n' + ' ' + rest; // 返回前3个字符和其余部分换行后的结果
        },
      },
      axisLine: {
        lineStyle: {
           color: 'rgba(224, 224, 224, 0.1)', 
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff',
      },
      axisLine: {
        lineStyle: {
           color: 'rgba(224, 224, 224, 0.1)', 
        },
      },
      splitLine: {
        lineStyle: {
           color: 'rgba(224, 224, 224, 0.1)', 
        },
      },
      name: '单位：吨', 
      nameTextStyle: {
        color: '#fff',
        align: 'left',
        padding: [40, 0, 0, 410],
      },
    },
    series: [
      {
        data: data.value.value,
        type: 'bar',
        barWidth: 10, // 柱子的宽度
        itemStyle: {
          color: colors[0],
          borderRadius: [10, 10, 0, 0], // 顶部圆柱形
        },
      },
    ],
    grid: {
      top: '18%',
      right: '4%',
      left: '4%',
      bottom: '1%',
      containLabel: true,
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        xAxisIndex: [0],
        start: 0,
        end: 100,
        handleSize: 8,
        height: 12,
        handleStyle: {
          color: '#fff',
        },
        textStyle: {
          color: '#fff',
        },
        borderColor: '#90979c',
      },
    ],
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