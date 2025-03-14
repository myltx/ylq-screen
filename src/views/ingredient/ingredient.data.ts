import type { CSSProperties } from 'vue'; // Vue 项目
const defaultTdStyle: CSSProperties = {
  textAlign: 'center',
  color: '#1EE7FF',
};
const tdStyle: CSSProperties = {
  ...defaultTdStyle,
  height: '40px',
  lineHeight: '40px',
};
const trStyle: CSSProperties = {
  backgroundColor: 'rgba(45, 103, 175, .29)',
};
const style: CSSProperties = {
  color: '#1EE7FF',
  textAlign: 'center',
  padding: '10px 0',
};
export const headersTop = ref([
  {
    key: 'constructionSite',
    title: '工程部位',
    style: defaultTdStyle,
    tdStyle,
  },
  {
    key: 'pouringDate',
    title: '浇筑日期',
    style: defaultTdStyle,
    tdStyle,
  },
  {
    key: 'createDate',
    title: '创建日期',
    style: defaultTdStyle,
    tdStyle,
  },
]);
export const headersMid = ref([
  {
    key: 'pouringMethod',
    title: '浇筑方式',
    style,
    tdStyle,
    trStyle,
  },
  {
    key: 'recipeNumber',
    title: '设计标号',
    style,
    tdStyle,
    trStyle,
  },
  {
    key: 'waterRatio',
    title: '设计水胶比',
    style,
    tdStyle,
    trStyle,
  },
  {
    key: 'slump',
    title: '设计塌落度',
    style,
    tdStyle,
    trStyle,
  },
  {
    key: 'taskQuantity',
    title: '预计工程量',
    style,
    tdStyle,
    trStyle,
  },
]);

//第三表格
//表头
export const headersBot = ref([
  {
    key: 'materialName',
    title: '材料名称',
    style: {
      width: '200px',
      textAlign: 'center',
    },
  },
  {
    key: 'llyl',
    title: '理论用量',
    style: {
      width: '200px',
      textAlign: 'center',
    },
  },
  {
    key: 'specification',
    title: '规格型号',
    style: {
      width: '200px',
      textAlign: 'center',
    },
  },
  {
    key: 'sjyl',
    title: '实际用量',
    style: {
      width: '200px',
      textAlign: 'center',
    },
  },
  {
    key: 'water',
    title: '含水率',
    style: {
      width: '200px',
      textAlign: 'center',
    },
  },
]);
