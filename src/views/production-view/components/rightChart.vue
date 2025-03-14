<script lang="ts" setup>
  import { getLatestPouringOrder, getPouringOrderList } from '@/api/cockpit';
  import { getUserInfo, setIntervalTimer } from '@/utils';
  import { Progress } from 'ant-design-vue';

  const userInfo = getUserInfo();
  const detailData = ref<any>({});
  const alarmList = ref([]);
  const style = {
    background: '#0a2349',
    // padding: 0,
    textAlign: 'center',
    padding: '10px 6px',
  };
  const tdStyle = {
    margin: '-1px 0',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '10px 6px',
    wordWrap: 'break-all',
  };
  const columns = [
    {
      key: 'constructionSite',
      title: '项目名称',
      style: {
        flex: 2,
        ...style,
      },
      tdStyle: {
        width: '100%',
        flex: 2,
        ...tdStyle,
        // overflow: 'hidden',
        // textOverflow: 'ellipsis', //文本溢出显示省略号
        // whiteSpace: 'nowrap', //文本不会换行
      },
    },
    {
      key: 'designGrade',
      title: '强度等级',
      style: style,
      tdStyle,
    },
    {
      key: 'taskQuantity',
      title: '任务方量',
      style: style,
      tdStyle,
    },
    {
      key: 'produceQuantity',
      title: '实际方量',
      style: style,
      tdStyle,
    },
    {
      key: 'processRate',
      title: '进度',
      style: style,
      tdStyle,
      render(data: any) {
        if (data.processRate) {
          return h(Progress, {
            percent: data.processRate,
          });
        } else {
          return data.processRate + '%';
        }
      },
    },
  ];

  const getData = () => {
    getLatestPouringOrder({
      companyId: userInfo.companyId,
    }).then((res) => {
      detailData.value = res?.data || {};
    });

    getPouringOrderList({
      companyId: userInfo.companyId,
    }).then((res) => {
      alarmList.value = res?.data || [];
    });
  };
  setIntervalTimer(getData);
</script>

<template>
  <div>
    <BasicBox title="最新浇筑令">
      <div class="carousel-bg h-310px">
        <a-descriptions title="" :column="1" class="color-[#fff] p-4 text-left" align="center">
          <a-descriptions-item label="浇筑部位">
            {{ detailData?.constructionSite || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="设计方量">
            {{ detailData?.taskQuantity || 0 }}m³
          </a-descriptions-item>
          <a-descriptions-item label="实际方量">
            {{ detailData?.produceQuantity || 0 }}m³
          </a-descriptions-item>
          <a-descriptions-item label="配比单号">
            {{ detailData?.recipeNumber || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="强度等级">
            {{ detailData?.designGrade || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="浇筑时间">
            {{ detailData?.pouringDate || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="实际进度">
            <a-progress
              :percent="detailData?.processRate || 0"
              :stroke-color="{ '0%': '#12386D', '100%': '#FFFFFF' }"
            />
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </BasicBox>
    <BasicBox title="混凝土浇筑任务进度" class="mt-15">
      <AutoScrollTable
        class="auto-scroll-table"
        :headers="columns"
        :rows="alarmList"
        border
        height="300px"
        :thead-style="{
          color: '#fff',
        }"
        :class-options="{
          step: 0.5,
        }"
        :scroll-auto="true"
      />
    </BasicBox>
  </div>
</template>
<style scoped lang="scss">
  .carousel-bg {
    background: linear-gradient(to top, rgba(17, 52, 100, 0.5), rgba(17, 52, 100, 0));
    color: #fff;
  }
  :deep(.ant-descriptions-item-label) {
    color: #fff;
    line-height: auto;
  }
  :deep(.ant-descriptions-item-content) {
    color: #fff;
    line-height: auto;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  :deep(td) {
    border: none !important;
  }
  :deep(.ant-progress-text) {
    color: #fff !important;
  }
  :deep(.auto-scroll-table .td) {
    width: 100%;
    white-space: wrap; //文本不会换行
    text-align: center; // 文本居中
    display: flex;
    align-items: center;
    justify-content: center;
    .px-16px {
      padding: 12px 0px !important;
    }
  }
</style>
