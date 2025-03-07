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
        :headers="[
          {
            key: 'constructionSite',
            title: '项目名称',
            style: {
              width: '100px',
              textAlign: 'left',
            },
          },
          {
            key: 'designGrade',
            title: '强度等级',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'taskQuantity',
            title: '任务方量',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'produceQuantity',
            title: '实际方量',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
          {
            key: 'jdprocessRate',
            title: '进度',
            style: {
              width: '100px',
              textAlign: 'center',
            },
          },
        ]"
        :rows="alarmList"
        height="300px"
        :class-options="{
          step: 0.5,
        }"
        :scroll-auto="true"
      />
    </BasicBox>
  </div>
</template>

<script lang="ts" setup>
  import { getLatestPouringOrder, getPouringOrderList } from '@/api/cockpit';
  import { getUserInfo } from '@/utils';

  const userInfo = getUserInfo();
  const detailData = ref<any>({});
  const alarmList = ref([]);

  getLatestPouringOrder({
    companyId: userInfo.companyId,
  }).then((res) => {
    detailData.value = res?.data || {};
  });

  getPouringOrderList({
    companyId: userInfo.companyId,
  }).then((res) => {
    res = {
      errcode: '0',
      msg: 'ok',
      data: [
        {
          constructionSite: '测试工程部位',
          taskQuantity: 100,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-12-05 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ02/工程施工阶段/K124+030.1松阴溪大桥右线/6~8#墩基础及下部构造/8#墩/桩基/右线8#墩8-3桩基',
          taskQuantity: 38,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-12-04 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite: '黄山头隧道左洞洞顶截水沟',
          taskQuantity: 60,
          recipeNumber: '',
          designGrade: 'C25',
          pouringDate: '2024-12-04 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ08/工程施工阶段/K186+560~K198+208路基工程/ZK186+550~ZK189+767防护支挡工程/ZK189+246~ZK189+265左侧Ⅱ路堤式挡土墙/基础/ZK189+253~ZK189+260基础基坑',
          taskQuantity: 20,
          recipeNumber: '',
          designGrade: 'C20',
          pouringDate: '2024-12-04 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/DK0+142龙泉北互通D匝道/9~11#墩基础及下部构造/9#墩/系梁/9#墩地系梁/混凝土浇筑',
          taskQuantity: 11.23,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-11-19 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'SG01/施工合同段/K0+576~K2+740海域高架桥右幅/基础及下部构造/42#墩/承台/承台',
          taskQuantity: 40,
          recipeNumber: '',
          designGrade: 'C20',
          pouringDate: '2024-12-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'SG01/施工合同段/K0+576~K2+740海域高架桥右幅/基础及下部构造/42#墩/承台/承台',
          taskQuantity: 40,
          recipeNumber: '',
          designGrade: 'C20',
          pouringDate: '2024-12-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/BK0+064龙泉北互通B匝道1号桥/0~2#墩基础及下部构造/1#墩/桩基/1#墩1-1桩基/混凝土浇筑',
          taskQuantity: 30.2,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-11-26 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/DK0+142龙泉北互通D匝道/12~14#台基础及下部构造/13#墩/桩基/13#墩13-0桩基/混凝土浇筑',
          taskQuantity: 32.76,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-11-20 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/CK0+500.769龙泉北互通C匝道/0~2#墩基础及下部构造/2#墩/桩基/2#墩2-0桩基/混凝土浇筑',
          taskQuantity: 28.92,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-11-14 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/BK0+064龙泉北互通B匝道1号桥/0~2#墩基础及下部构造/2#墩/桩基/2#墩2-0桩基/混凝土浇筑',
          taskQuantity: 25.08,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-21 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/DK0+142龙泉北互通D匝道/9~11#墩基础及下部构造/9#墩/桩基/9#墩9-0桩基/混凝土浇筑',
          taskQuantity: 10,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-12-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/BK0+335.573龙泉北互通B匝道2号桥/3~5#墩基础及下部构造/3#墩/桩基/3#墩3-1桩基/混凝土浇筑',
          taskQuantity: 61.3,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-10 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/BK0+064龙泉北互通B匝道1号桥/6~7#台基础及下部构造/6#墩/桩基/6#墩6-0桩基/混凝土浇筑',
          taskQuantity: 18.33,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-06 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/BK0+335.573龙泉北互通B匝道2号桥/0~2#墩基础及下部构造/2#墩/桩基/2#墩2-0桩基/混凝土浇筑',
          taskQuantity: 24.77,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/YK185+662岭坤大桥右线/3~5#墩基础及下部构造/5#墩/桩基/右线5#墩5-1桩基/混凝土浇筑',
          taskQuantity: 89.67,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/YK185+662岭坤大桥右线/3~5#墩基础及下部构造/5#墩/桩基/右线5#墩5-1桩基/混凝土浇筑',
          taskQuantity: 89.67,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ07/工程施工阶段/YK185+662岭坤大桥右线/3~5#墩基础及下部构造/5#墩/桩基/右线5#墩5-1桩基/混凝土浇筑',
          taskQuantity: 89.67,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-10-01 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'TJ02合同段/工程施工阶段/水头互通D匝道桥/3#~5#墩基础及下部构造/4#墩/桩基/4-1#钻孔灌注桩/混凝土浇筑',
          taskQuantity: 1,
          recipeNumber: '',
          designGrade: 'C30',
          pouringDate: '2024-09-05 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
        {
          constructionSite:
            'SG01/施工合同段/DK0+290.040~DK0+512.48威海互通D匝道桥/上部构造预制和安装/第一（D0-D3）联钢梁',
          taskQuantity: 60,
          recipeNumber: '',
          designGrade: 'C50',
          pouringDate: '2024-11-29 00:00:00',
          produceQuantity: 0,
          processRate: 0,
        },
      ],
    };
    alarmList.value = res?.data || [];
  });
</script>

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
