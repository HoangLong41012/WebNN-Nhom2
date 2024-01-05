import { useRouter } from 'next/router';
import { Grid, Stack, Typography, Link } from '@mui/material';
import _ from 'lodash';

import { handleDirectToCpu } from '../../utils/Redirect';

const ProductItem = ({product}) => {
  const router = useRouter();
  const handleCpuClick = () => {
    const query = {cpu: _.get(product, 'cpu.value').substring(70)}
    handleDirectToCpu(router, query);
  }
  return (
    <Stack sx={{ width: '35vw', height: '35vh',border: '1px solid black', paddingLeft: '10px'}}>
      <Typography>{_.get(product, 'productName.value') || ''}</Typography>
      <Typography>Price: {_.get(product, 'price.value') || ''} m</Typography>
      <Stack direction='row' space={2}>
        <Typography>CPU: <Link onClick={handleCpuClick}>{_.get(product, 'cpu.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Speed: {_.get(product, 'cpuSpeed.value') || ''} GHz</Typography>
      </Stack>
      <Stack direction='row' space={2}>
        <Typography>RAM: <Link>{_.get(product, 'ram.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Capacity: {_.get(product, 'ramCapacity.value') || ''} GB</Typography>
      </Stack>
      <Stack direction='row' space={2}>
        <Typography>Screen: <Link>{_.get(product, 'screen.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Size: {_.get(product, 'screenSize.value') || ''} inches</Typography>
      </Stack>
      <Stack direction='row' space={2}>
        <Typography>Hard Drive: <Link>{_.get(product, 'hardDrive.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Size: {_.get(product, 'hardDriveCapacity.value') || ''} GB</Typography>
      </Stack>
      <Stack direction='row' space={2}>
        <Typography>Operation system: <Link>{_.get(product, 'os.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Os name: {_.get(product, 'osName.value') || ''}</Typography>
      </Stack>
      <Stack direction='row' space={2}>
        <Typography>Brand: <Link>{_.get(product, 'brand.value').substring(70) || ''}</Link></Typography>
        <Typography ml={2}>Brand name: {_.get(product, 'brandName.value') || ''}</Typography>
      </Stack>
    </Stack>
  )
}
const Product = ({ products }) => {
  return (
    <Grid container rowSpacing={1} sx={{marginLeft: '10px', marginTop: '10px'}}>
      {
      _.map(products, (product, inx) => {
        return (
          <Grid item xs={6}>
            <ProductItem product={product}/>
          </Grid>
        )
      })
      }
    </Grid>
  )
}

export default Product;