<!--
 * @Author: dongpenghu
 * @Date: 2025-03-05 21:33:42
 * @LastEditors: dongpenghu
 * @LastEditTime: 2025-03-14 14:27:53
 * @Description: 描述
 * @FilePath: \ylq-screen\src\components\AutoScrollTable\index.vue
-->
<script lang="ts" setup>
  import { vue3ScrollSeamless } from 'vue3-scroll-seamless';
  import type { CSSProperties } from 'vue'; // Vue 项目
  export interface Headers {
    key: string;
    style: CSSProperties;
    title: string;
    tdStyle?: CSSProperties;
    trStyle?: CSSProperties;
    render?: Function;
  }
  interface ClassOption {
    step?: number;
    limitMoveNum?: number;
    hoverStop?: boolean;
    direction?: string;
    singleHeight?: number;
    waitTime?: number;
    switchDelay?: number;
  }
  interface Rows {
    style?: CSSProperties;
    class?: string;
    [key: string]: unknown;
  }

  interface Props extends ClassOption {
    headers: Headers[];
    rows: Rows[];
    scrollAuto: boolean;
    height?: string | number;
    classOptions: Object;
    showIndex?: boolean;
    theadStyle?: CSSProperties;
  }
  const props = withDefaults(defineProps<Props>(), {
    scrollAuto: true,
  });
  const headers = ref<Headers[]>(props.headers);
  watchEffect(() => {
    headers.value = props.headers;
    if (props.showIndex) {
      headers.value.unshift({
        key: 'sort_index',
        style: {},
        title: '#',
      });
      props.rows.forEach((item, index) => {
        item.sort_index = index + 1 + '';
      });
    }
  });

  const defaultClassOption = Object.assign(
    {
      limitMoveNum: 6,
      direction: 1,
      hoverStop: true,
      step: 1,
    },
    props.classOptions,
  );
</script>

<template>
  <div
    class="auto-scroll-table"
    :style="{ height: props.height ? props.height + 'px' : '100%' }"
    ref="tableContainer"
  >
    <div
      class="w-100% flex thead py-10px px-16px color-#4EA4FF text-20px font-500 text-center"
      :style="{
        ...(props.theadStyle ? props.theadStyle : {}),
      }"
      v-if="headers.length"
    >
      <div
        class="flex-1"
        v-for="th in headers.filter((item) => item.key !== 'id')"
        :key="th?.key"
        :style="{
          ...(th.style ? th?.style : {}),
        }"
      >
        {{ th?.title }}
      </div>
    </div>
    <!-- 这一层是tr -->
    <template v-if="props.rows.length">
      <div class="tbody" v-if="props.scrollAuto">
        <vue3ScrollSeamless
          class="scroll-wrap"
          :classOptions="defaultClassOption"
          :dataList="props.rows"
        >
          <div
            class="flex px-16px py-6px tr text-16px"
            v-for="(row, index) in props.rows"
            :key="row?.id"
            :style="{
              ...(headers[index]?.trStyle ? headers[index]?.trStyle : {}),
            }"
          >
            <div
              class="flex-1 td"
              :class="row.class"
              :style="{
                ...(row?.style ? row.style : {}),
                ...(th?.tdStyle ? th?.tdStyle : {}),
              }"
              v-for="th in props.headers.filter((item) => item.key !== 'id')"
              :key="th.key"
            >
              <div v-if="th.key === 'jdprocessRate'" style="width: 100%">
                <a-progress :percent="row.processRate || 0" stroke-linecap="square" />
              </div>
              <div v-else>
                <div
                  :class="row.class"
                  :style="{
                    ...(row?.style ? row.style : {}),
                    ...(th?.tdStyle ? th?.tdStyle : {}),
                  }"
                  v-html="th.render(row)"
                  v-if="th.render"
                ></div>
                <div
                  :class="row.class"
                  :style="{
                    ...(row?.style ? row.style : {}),
                    ...(th?.tdStyle ? th?.tdStyle : {}),
                  }"
                  v-else
                >
                  {{ row[th?.key] }}</div
                >
              </div>
            </div>
          </div>
        </vue3ScrollSeamless>
      </div>
      <div class="tbody overflow-y-auto" v-else>
        <div
          class="flex px-16px py-6px tr text-16px"
          v-for="(row, index) in props.rows"
          :key="row.id"
          :style="{
            ...(headers[index]?.trStyle ? headers[index]?.trStyle : {}),
          }"
        >
          <div
            class="flex-1 td"
            v-for="th in props.headers.filter((item) => item.key !== 'id')"
            :key="th.key"
            :style="{
              ...(th?.tdStyle ? th?.tdStyle : {}),
            }"
          >
            {{ row[th.key] || '/' }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .thead {
    background-color: rgba(78, 164, 255, 0.2);
  }
  .tr:nth-child(2n) {
    background-color: rgba(78, 164, 255, 0.1);
  }
  .td {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis; //文本溢出显示省略号
    white-space: nowrap; //文本不会换行
  }
  .scroll-wrap {
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .tbody {
    height: 90%;
  }

  /* 修改整个滚动条的大小 */
  .tbody::-webkit-scrollbar {
    width: 5px; /* 垂直滚动条宽度 */
    height: 5px; /* 水平滚动条高度 */
  }

  /* 修改滚动条轨道（背景） */
  .tbody::-webkit-scrollbar-track {
    background-color: rgba(78, 164, 255, 0.2); /* 背景颜色 */
    border-radius: 5px;
  }

  /* 修改滚动条滑块（滑动的部分） */
  .tbody::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块颜色 */
    border-radius: 5px;
    border: 3px solid rgba(78, 164, 255, 0.2); /* 给滑块加一个边框 */
  }

  /* 滑块悬停时的样式 */
  .tbody::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 鼠标悬停时的颜色 */
  }
</style>
