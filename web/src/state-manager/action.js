import _ from 'lodash';
import { getSmartDeviceBrand } from '../api/brand';
import { getSmartDeviceProduct } from '../api/product';

const getSmartDeviceBrandsAction = async () => {
  try {
    const brand = await getSmartDeviceBrand();
    const brandJson = _.get(brand, 'results.bindings');
    return brandJson || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

const getSmartDevicesAction = async ({
  price, 
  ram,
  cpu,
  screen,
  hardDrive,
  brand
}) => {
  try {
    const result = await getSmartDeviceProduct({
      price, 
      ram,
      cpu,
      screen,
      hardDrive,
      brand
    });
    const products = _.get(result, 'results.bindings');
    return products || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export {
  getSmartDeviceBrandsAction,
  getSmartDevicesAction
};
