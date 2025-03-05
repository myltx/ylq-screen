<script setup lang="ts">
import * as echarts from 'echarts';
import { nextTick, onMounted, toRefs, defineProps, defineExpose } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'pieChart',
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
  const colors = ['#6DBBFF', '#F9D9C9', '#8FFFF3', '#2347EA', '#6898D9', '#8278FF', '#78CBFF'];
  const options = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value, percent } = params;
        return `${name}: ${value} (${percent}%)`; // 显示百分比
      }
    },
    legend: {
      orient: 'vertical',  
      right: '40',  // 确保图例靠右
      top: '21',  // 控制图例的垂直位置
      textStyle: {
        color: '#fff',
      },
      formatter: (name) => {
        const item = data.value.find(d => d.name === name);
        const valueStr = `${item.value}%`.padStart(10, ' ');
        return `${name} ${valueStr}`;
      },
      itemWidth: 10,  // 图例标记的宽度
      itemHeight: 10,  // 图例标记的高度
      itemGap: 25,  // 图例项之间的间隔
      icon: 'circle',  // 使用圆形图例
      align: 'left'  // 图例内容右对齐
    },

    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '90%'],
        center: ['26%', '47%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data.value.map((item, index) => ({
          ...item,
          itemStyle: {
            color: colors[index % colors.length],
          },
        })),
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