<script setup lang="ts">
  import { useSettingStore } from '@/stores/index';
  import { login } from '@/api/cockpit';
  import { setUserInfo, setToken } from '@/utils';
  import { useMessage } from '@/hooks/useMessage';

  const router = useRouter();
  const { notification } = useMessage();
  const settingStore = useSettingStore();
  const { isScale } = storeToRefs(settingStore);
  const wrapperStyle = {};
  interface FormState {
    userAccount: string;
    userPassword: string;
  }

  const formState = reactive<FormState>({
    userAccount: '',
    userPassword: '',
  });
  const onFinish = (values: any) => {
    login(values).then((res: any) => {
      if (res.code === 200) {
        setUserInfo(res?.result?.userInfo);
        setToken(res?.result?.userInfo?.companyId);
        notification.success({ message: '登录成功' });
        router.replace('/');
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
<template>
  <ScaleScreen
    width="1920"
    height="1080"
    :delay="500"
    :fullScreen="false"
    :boxStyle="{
      background: '#03050C',
      overflow: isScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="wrapperStyle"
    :autoScale="isScale"
  >
    <div class="flex items-center w-full h-100% bg-white">
      <img src="@/assets/images/login/login_bg.png" class="w-1120px" alt="" />

      <div class="flex flex-grow-1 items-center flex-wrap justify-center">
        <div
          class="w-100% font-bold text-34px text-#000 text-center flex items-center justify-center"
        >
          <img src="@/assets/images/login/sys_logo.png" alt="" class="w-44px h-44px mr-10px" />
          义龙庆(丽水段)龙泉至义乌智慧拌合
        </div>
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          class="w-60% mt-50px"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label=""
            name="userAccount"
            style="display: flex; align-items: center; justify-content: center"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
            <a-input v-model:value="formState.userAccount" placeholder="帐号" style="height: 40px">
              <template #prefix>
                <img src="@/assets/images/login/account.png" alt="" class="w-20px h-20px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            label=""
            name="userPassword"
            style="display: flex; align-items: center; justify-content: center"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input-password
              v-model:value="formState.userPassword"
              placeholder="密码"
              style="height: 40px"
            >
              <template #prefix>
                <img src="@/assets/images/login/locak.png" alt="" class="w-20px h-20px" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item label="" style="display: flex; align-items: center; justify-content: center">
            <a-button type="primary" html-type="submit" block class="h-40px bg-286BE5">
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </ScaleScreen>
</template>

<style scoped lang="scss">
  @import '@/styles/common.scss';
</style>
