import { getApiResponse, PostApiResponse } from './apiUtils';

import { defaultPrefix } from '../utils/const'

export const getSmartDeviceBrand = async () => {
  const query = `prefix : ${defaultPrefix} select ?branch ?name where {{?branch a :SmartDeviceBrand} {?branch :branchName ?name}}`;
  const brands = await PostApiResponse({
    url: '/dataset/query',
    query,
    body: {}
  });
  return brands;
}