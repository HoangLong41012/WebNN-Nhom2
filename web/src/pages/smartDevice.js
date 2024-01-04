import React, { useContext, useEffect } from 'react';
import { Stack } from '@mui/material';
import Filter from '../components/smartDevice/Filter';
import ProductView from '../components/smartDevice/ProductView';
import { SemWebContext } from '../state-manager/context';
import { getSmartDeviceBrandsAction } from '../state-manager/action';

const SmartDevice = () => {
  const [smartDeviceBrand, setSmartDeviceBrand] = React.useState([]);
  const { dispatch } = React.useContext(SemWebContext);

  const handleGetSmartDeviceBrand = async () => {
    const brands = await getSmartDeviceBrandsAction();
    setSmartDeviceBrand(brands);
  }

  useEffect(() => {
    handleGetSmartDeviceBrand();
  }, [])
  return (
    <Stack direction="row" sx={{width: "100vw", height: "95vh"}}>
      <Filter></Filter>
      <ProductView brands={smartDeviceBrand}></ProductView>
    </Stack>
  )
}

export default SmartDevice;