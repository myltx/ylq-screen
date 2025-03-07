<script setup lang="ts">
  import * as echarts from 'echarts';
  import { nextTick, onMounted, toRefs, defineProps, defineExpose } from 'vue';

  const props = defineProps({
    id: {
      type: String,
      default: 'MultiplePillars',
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
    const colors = ['#FFAB49', '#E1FFB5'];
    const series: any = [];
    const legend = data.value.map((item: any) => item.machineName);
    const xData = data.value[0].data.map((d: any) => d.Date);
    data.value?.forEach((item: any, index: number) => {
      series.push({
        name: item.machineName,
        type: 'bar',
        data: item.data.map((d: any) => {
          return {
            value: d.produceQuantity,
            name: d.Date,
            ...d,
          };
        }),
        itemStyle: {
          color: colors[index],
        },
      });
    });

    const options = {
      legend: {
        data: legend,
        textStyle: {
          color: '#fff', // 设置图例文字为白色
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      // dataset: {
      //   source: data.value,
      // },
      xAxis: [
        {
          type: 'category',
          gridIndex: 0,
          axisLabel: {
            color: '#fff', // 设置x轴文字为白色
          },
          data: xData,
        },
      ],
      yAxis: [
        {
          axisLabel: {
            color: '#fff', // 设置y轴文字为白色
          },
          axisLine: {
            lineStyle: {
              color: '#fff', // 设置y轴线为白色
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)', // 设置y轴分割线为白色
            },
          },
        },
      ],
      grid: [{ bottom: '35%' }, { top: '15%' }],
      series: series,
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
  <div :id="id" class="w-full h-full z-999"></div>
</template>

<style scoped></style>
