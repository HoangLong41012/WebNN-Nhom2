import _ from 'lodash';
import { getApiResponse, PostApiResponse } from './apiUtils';

import { defaultPrefix } from '../utils/const'

export const getCpu = async ({ cpu }) => {
  const query = `prefix : ${defaultPrefix} select ?cpuName ?cpuSpeed ` +
                `where {{:${cpu} :cpuSpeed ?cpuSpeed}` +
                `{:${cpu} :cpuName ?cpuName}}`;
  const brands = await getApiResponse({
    url: '/dataset/query',
    query
  });
  const data = _.get(brands, 'results.bindings[0]') || {cpu: '', cpuName: '', cpuSpeed: 0};
  return data;
}