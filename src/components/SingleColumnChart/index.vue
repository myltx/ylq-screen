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
      grid: {
        top: '13%',
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
      tooltip: {
        trigger: 'item',
        // formatter: (params) => {
        //   const { name, value, percent } = params;
        //   return `${name}: ${value} (${percent}%)`; // 显示百分比
        // },
      },
      xAxis: {
        type: 'category',
        data: data.value.name,
        axisLabel: {
          color: '#fff',
          // paddingTop: 10,
          // rotate: 42, // 倾斜放置
          formatter: (value) => {
            if (!value) return '';
            const str = value.toString();
            const result = str.split('').reduce((acc, char, i) => {
              if (i > 0 && i % 3 === 0) {
                return acc + '\n' + char;
              }
              return acc + char;
            }, '');
            return result;
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
          padding: [40, 20, 0, -20],
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
