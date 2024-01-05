import React from 'react';
import { Stack, Link, Button } from '@mui/material';
import _ from 'lodash';
import Product from './Product';

const Brand = ({ brand, setBrand }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      setBrand(_.get(brand,'name.value') || '');
    } else {
      setBrand('');
    }
  }
  return (
      click ? <Button variant="contain" onClick={handleClick}>{_.get(brand,'name.value') || ''}</Button>
      : <Button variant="outlined" onClick={handleClick}>{_.get(brand,'name.value') || ''}</Button>
  )
}

const BrandList = ({ brands, setBrand }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ width: "100%", height: "5vh"}} mt={1} ml={1}>
      {
        _.map(brands, (brand) => {
          return (
            <Brand brand={brand} setBrand={setBrand}/>
          )
        })
      }
    </Stack>
  )
}
const ProductView = ({ brands, products, setBrand }) => {
  return (
    <Stack 
      sx={{ width: "80%", minHeight: "100%" }}
    >
      <BrandList brands={brands} setBrand={setBrand}/>
      <Product products={products}/>
    </Stack>
  )
}

export default ProductView;