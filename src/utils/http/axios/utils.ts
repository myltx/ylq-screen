import { removeLocalStorage } from '@/utils';
import { TIMEOUT, OTHER, NOLOGIN, SUCCESS_CODE } from './error-code';
import { useMessage } from '@/hooks/useMessage';
import { Modal } from 'ant-design-vue';
import { LOGIN_PATH } from '@/helper';

const router = useRouter();
const { createMessage } = useMessage();

// 成功处理函数
export function handleSuccess(res: any, resolve: Function, opts?: any) {
  // console.log(opts, 'opts-success');
  const data = res.data;
  // 未登录
  if (NOLOGIN.includes(data.code)) {
    loginOut(data.msg);
  } else {
    if (!SUCCESS_CODE.includes(data.code || data.errcode)) {
      const msg = data.msg || data.message;
      createMessage.warn(msg);
    }
  }
  resolve(data);
}

// 失败处理函数
export function handleError(error: any, reject: Function, opts?: any) {
  console.log(opts, 'opts');
  console.log(error, 'error');
  console.log(error.response);
  if (error.code == TIMEOUT) {
    createMessage.error('请求超时');
  } else if (error.response && error.response.data) {
    if (error.response.status === 500) {
      createMessage.error(error.response.data);
    }
    if (NOLOGIN.includes(error.response.data.code)) {
      loginOut(error.response.data.errorMsg || error.response.data.msg);
    } else {
      const resData = error.response.data;

      if (OTHER.includes(resData.code)) {
        loginOut(resData.msg || resData.message);
      } else if (resData.msg) {
        createMessage.error(resData.msg);
      } else if (resData.message) {
        loginOut(resData.message);
      }
    }
  } else if (error.message || error.msg) {
    createMessage.error(error.message || error.msg);
  }
  reject(error);
}

export function loginOut(content: string) {
  Modal.confirm({
    iconType: 'error',
    title: '提示',
    content: content || '登录信息已过期，请重新登录',
    cancelButtonProps: { style: { display: 'none' } },
    onOk: () => {
      removeLocalStorage();
      router.replace(LOGIN_PATH);
    },
  });
}
