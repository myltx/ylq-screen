import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';

export function login(data: any) {
  return Axios({
    url: ServicePrefixEnum.USER + '/login',
    method: RequestEnum.POST,
    data,
  });
}
