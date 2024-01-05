import React, { useContext, useEffect } from 'react';
import { Stack } from '@mui/material';
import Filter from '../components/smartDevice/Filter';
import ProductView from '../components/smartDevice/ProductView';
import { SemWebContext } from '../state-manager/context';
import { 
  getSmartDeviceBrandsAction,
  getSmartDevicesAction
} from '../state-manager/action';

const SmartDevice = () => {
  const [smartDeviceBrand, setSmartDeviceBrand] = React.useState([]);
  const [smartDeviceProducts, setSmartDeviceProducts] = React.useState([]);
  const [price, setPrice] = React.useState({
    min: 0,
    max: 100000000
  });
  const [ram, setRam] = React.useState(0);
  const [cpu, setCpu] = React.useState({
    min: 0,
    max: 5
  });
  const [screen, setScreen] =React.useState(0);
  const [hardDrive, setHardDrive] = React.useState(0);
  const [os, setOs] = React.useState('');
  const [brand, setBrand] = React.useState('')
  const { dispatch } = React.useContext(SemWebContext);
  console.log(brand);

  const handleGetSmartDeviceBrand = async () => {
    const brands = await getSmartDeviceBrandsAction();
    setSmartDeviceBrand(brands);
    const products = await getSmartDevicesAction({
      price, 
      ram,
      cpu,
      screen,
      hardDrive,
      brand
    });
    setSmartDeviceProducts(products);
  }

  useEffect(() => {
    handleGetSmartDeviceBrand();
  }, [])

  return (
    <Stack direction="row" sx={{width: "100vw", height: "95vh"}}>
      <Filter 
        setCpu={setCpu}
        cpu={cpu}
        setRam={setRam}
        ram={ram}
        setHardDrive={setHardDrive}
        hardDrive={hardDrive}
        price={price}
        setPrice={setPrice}
        setScreen={setScreen}
        screen={screen}
        setSmartDeviceProducts={setSmartDeviceProducts}
        brand={brand}
      ></Filter>
      <ProductView brands={smartDeviceBrand} products={smartDeviceProducts} setBrand={setBrand}></ProductView>
    </Stack>
  )
}

export default SmartDevice;