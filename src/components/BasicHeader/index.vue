<script setup lang="ts">
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { getDate, getFileUrl, getUserInfo } from '@/utils';
  import { useSettingStore } from '@/stores';
  import DetaultAvatar from '@/assets/images/header/avatar.gif';

  const router = useRouter();
  const { setSettingShow } = useSettingStore();

  const userInfo = getUserInfo();
  const avatarImg = computed(() => {
    return DetaultAvatar;
    if (userInfo?.userInfo?.headIcon) {
      return getFileUrl(userInfo?.userInfo?.headIcon);
    }
  });

  const props = defineProps({
    title: {
      type: [String, Number],
      default: '',
    },
    showSetting: {
      type: Boolean,
      default: false,
    },
    showBack: {
      type: Boolean,
      default: false,
    },
  });
  const { title } = toRaw(props);
  const time = ref(getDate('HH:mm:ss'));
  setInterval(() => {
    time.value = getDate('HH:mm:ss');
  }, 1000);
</script>
<template>
  <div class="header-container">
    <div class="flex-1">
      <slot name="left"></slot>
    </div>
    <div class="title text-center flex-1"> {{ title }} </div>
    <div class="flex-1 flex items-center justify-end">
      <slot name="right"></slot>
      <!-- <div class="color-#eee text-20px">退出登录</div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './index.scss';
</style>
