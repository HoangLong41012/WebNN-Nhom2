import _ from 'lodash';
import { getSmartDeviceBrand } from '../api/brand';

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

export {
  getSmartDeviceBrandsAction
};
