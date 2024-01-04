import { Stack, Link, Button } from '@mui/material';
import _ from 'lodash';
import Product from './Product';

const Brand = ({ brand }) => {
  return (
    <Button variant="outlined">{_.get(brand,'name') || ''}</Button>
  )
}

const BrandList = ({ brands }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ width: "100%", height: "5vh"}} mt={1} ml={1}>
      {
        _.map(brands, (brand, idx) => {
          return (
            <Brand brand={brand} />
          )
        })
      }
    </Stack>
  )
}
const ProductView = ({ brands }) => {
  return (
    <Stack 
      sx={{ width: "80%", minHeight: "100%" }}
    >
      <BrandList brands={brands} />
      <Product />
    </Stack>
  )
}

export default ProductView;