import { Stack, Link } from '@mui/material';

const Menu = () => {
  return (
    <Stack 
      direction="row" 
      justifyContent="center" 
      alignItems="center"
      sx={{ width: "100vw", height: "5vh", borderBottom: "1px solid black" }}
      spacing={2}
    >
      <Link href="#">Smart Device</Link>
      <Link href="#">Household</Link>
      <Link href="#">Accessory</Link>
    </Stack>
  )
}

export default Menu;