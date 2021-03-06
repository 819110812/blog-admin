import { request } from 'umi';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(params: {
  username: string;
}): Promise<{ data: CurrentUser }> {
  return request('/api/currentUserDetail', {
    params
  });
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
