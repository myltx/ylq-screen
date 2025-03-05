import { ServicePrefixEnum } from '@/enums/comon';
import { RequestEnum } from '@/enums/httpEnum';
import Axios from '@/utils/http/axios/index';
import OtherAxios from '@/utils/http/axios/other';

// 导出一个名为login的函数，接收一个参数data
export function login(data: any) {
  return Axios({
    url: ServicePrefixEnum.USER + '/login',
    method: RequestEnum.POST,
    data,
  });
}

export function getEntryMaterialData(data: any) {
  return OtherAxios({
    url: ServicePrefixEnum.YLQApi + '/getEntryMaterialData',
    method: RequestEnum.POST,
    data,
  });
}

export function storageMaterialData(data: any) {
  return OtherAxios({
    url: ServicePrefixEnum.YLQApi + '/storageMaterialData',
    method: RequestEnum.POST,
    data,
  });
}
