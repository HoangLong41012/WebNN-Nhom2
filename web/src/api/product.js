import { getApiResponse, PostApiResponse } from './apiUtils';

import { defaultPrefix } from '../utils/const'

export const getSmartDeviceProduct = async ({
  price, 
  ram,
  cpu,
  screen,
  hardDrive,
  brand
}) => {
  let filter = '';
  if (price) {
    filter = filter + `?price < ${price.max * 1000000} %26%26 ?price > ${price.min * 1000000} `;
  }
  if (ram !== 0) {
    filter = filter + `%26%26 ?ramCapacity = ${ram} `
  }
  if (cpu) {
    filter = filter + `%26%26 ?cpuSpeed < ${cpu.max} %26%26 ?cpuSpeed > ${cpu.min} `;
  }
  if (screen !== 0) {
    if (screen == 12) {
      filter = filter + `%26%26 ?screenSize < ${screen} `;
    } else {
      filter = filter + `%26%26 ?screenSize < ${screen + 1} %26%26 ?screenSize > ${screen} `;
    }
  }
  if (hardDrive !== 0) {
    filter = filter + `%26%26 ?hardDriveCapacity = ${hardDrive} `;
  }
  if (brand !== '') {
    filter = filter + `%26%26 ?brandName = "${brand}" `;
  }
  filter = `filter(${filter})`;
  const query = `prefix : ${defaultPrefix} ` +
                'select ?product ?productName ?price ?cpu ?cpuSpeed ' +
                '?ram ?ramCapacity ?screen ?screenSize ?hardDrive ' +
                '?hardDriveCapacity ?os ?osName ?brand ?brandName ' +
                'where {' +
                `${filter} {?product a :SmartDevice}` +
                '{?product :productName ?productName}' +
                '{?product :hasCPU ?cpu}' +
                '{?cpu :cpuSpeed ?cpuSpeed}' +
                '{?product :productPrice ?price}' +
                '{?product :hasRAM ?ram}' +
                '{?ram :ramCapacity ?ramCapacity}' +
                '{?product :hasScreen ?screen}' +
                '{?screen :screenSize ?screenSize}' +
                '{?product :hasHardDrive ?hardDrive}' +
                '{?hardDrive :hardDriveCapacity ?hardDriveCapacity}' +
                '{?product :hasOperationSystem ?os}' +
                '{?os :osName ?osName}' +
                '{?product :madeBy ?brand}' +
                '{?brand :branchName ?brandName}}';
  const brands = await getApiResponse({
    url: '/dataset/query',
    query
  });
  return brands;
}