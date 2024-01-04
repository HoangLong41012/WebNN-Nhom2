import { Grid, Stack } from '@mui/material';

const ProductItem = () => {
  return (
    <Stack>
      <div>aaaa</div>
      <div>bbbb</div>
      <div>cccc</div>
    </Stack>
  )
}
const Product = () => {
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
      <Grid item xs={6}>
        <ProductItem />
      </Grid>
    </Grid>
  )
}

export default Product;