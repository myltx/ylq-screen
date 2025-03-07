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
    const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#45b0e9',
      },
      {
        offset: 0.25,
        color: '#7cfaba',
      },
      {
        offset: 0.5,
        color: '#fcd059',
      },
      {
        offset: 1,
        color: '#d24a34',
      },
    ]);
    // colorSet倒过来
    const colorSet = [
      // [0.1, '#FF0000'],
      [1, color],
    ];
    const options = {
      series: [
        {
          type: 'gauge',
          endAngle: -20,
          startAngle: 200,
          center: ['35%', '50%'],
          radius: '90%',
          axisLine: {
            lineStyle: {
              width: 10,
              color: colorSet,
              shadowColor: color, //默认透明
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              opacity: 1,
            },
          },
          pointer: {
            itemStyle: {
              color: '#6dfa78',
            },
            length: '110%',
          },
          axisTick: {
            show: false,
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            show: false,
            distance: -30,
            length: 30,
            lineStyle: {
              // color: '#fff',
              // width: 4,
            },
          },
          axisLabel: {
            color: 'inherit',
            distance: 10,
            fontSize: 0,
          },
          detail: {
            show: false,
            formatter: '{value}',
            offsetCenter: [0, 0],
            textStyle: {
              fontSize: 40,
              color: '#fecf05',
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
          data: [
            {
              value: 75,
            },
          ],
        },
        /*内部*/
        {
          type: 'pie',
          radius: ['0', '40%'],
          center: ['35%', '50%'],
          z: 8,
          hoverAnimation: false,
          data: [
            {
              name: '',
              value: 75,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#2653a3',
                    },
                    {
                      offset: 1,
                      color: '#3d6eb3',
                    },
                  ]),
                },
              },
              label: {
                normal: {
                  rich: {
                    a: {
                      color: 'rgba(1, 246, 247, 1)',
                      align: 'center',
                      fontSize: 22,
                      fontWeight: 'bold',
                      fontFamily: 'PangMenZhengDao',
                    },
                    b: {
                      color: 'rgba(1, 246, 247, 1)',
                      align: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      fontFamily: 'PangMenZhengDao',
                    },
                    c: {
                      color: 'rgba(1, 246, 247, 1)',
                      align: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      fontFamily: 'PangMenZhengDao',
                      lineHeight: 20,
                    },
                  },
                  formatter: function (params) {
                    const standardMap = '优';
                    // if (data.value?.noise >= 80) {
                    //   standardMap = '优';
                    // } else if (data.value?.noise < 80 && data.value?.noise >= 60) {
                    //   standardMap = '良';
                    // } else {
                    //   standardMap = '差';
                    // }
                    return '{a|' + params.value + '}{b|%}\n{c|' + standardMap + ' }';
                  },
                  position: 'center',
                  show: true,
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
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
