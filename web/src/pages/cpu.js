import React, { useContext, useEffect } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Filter from '../components/smartDevice/Filter';
import ProductView from '../components/smartDevice/ProductView';
import { SemWebContext } from '../state-manager/context';
import { handleDirectToSmartDevice } from '../utils/Redirect';
import { 
  getCpu
} from '../api/cpu';

const Cpu = () => {
  const router = useRouter();
  const [data, setData] = React.useState({});

  const handleGetCpu = async () => {
    const result = await getCpu({cpu: router.query.cpu});
    console.log(result)
    setData(result);
  }
  const handleBack = () => {
    handleDirectToSmartDevice(router);
  }
  useEffect(() => {
    handleGetCpu();
  }, [])
  return (
    <Stack>
      <Button onClick={handleBack} variant='outlined' sx={{ width: "30px", marginTop: "10px", marginLeft: "10px"}}>BACK</Button>
      <Stack ml={2}>
        <Typography>CPU: {router.query.cpu}</Typography>
        <Typography>Name: {_.get(data, 'cpuName.value') || ''}</Typography>
        <Typography>Speed: {_.get(data, 'cpuSpeed.value') || ''} GHz</Typography>
      </Stack>
    </Stack>
  )
}

export default Cpu;