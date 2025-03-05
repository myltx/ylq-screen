export const barOption = {
  grid: {
    top: '20%',
    right: '0%',
    left: '0%',
    bottom: '12%',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#e6e6e6',
      },
    },
    axisTick: {
      show: false,
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#e6e6e6',
      },
    },
    axisLabel: {
      formatter: '',
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    type: 'value',
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: 26,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#67e1e1',
            },
            {
              offset: 1,
              color: '#0e5cde',
            },
          ]),
          barBorderRadius: 13,
        },
      },
      label: {
        normal: {
          show: true,
          lineHeight: 30,
          width: 80,
          height: 30,
          backgroundColor: 'rgba(0,160,221,0.1)',
          borderRadius: 200,
          position: ['-7', '-60'],
          distance: 1,
          formatter: ['    {d|●}', ' {a|{c}}     \n', '    {b|}'].join(','),
          rich: {
            d: {
              color: '#3CDDCF',
            },
            a: {
              color: '#fff',
              align: 'center',
            },
            b: {
              width: 1,
              height: 20,
              borderWidth: 1,
              borderColor: '#234e6c',
              align: 'left',
            },
          },
        },
      },
    },
  ],
};
