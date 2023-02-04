import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useFormik } from "formik"
import * as Yup from "yup"

//Datetime picker

import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OrderForm() {
  const [value, setValue] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([{ name: "", price: "", qty: "" }]);



  const handleInputChange = (e, index) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index][e.target.name] = e.target.value;
    setOrderItems(newOrderItems);
    console.log(newOrderItems)
  };

  const handleAddItem = () => {
    setOrderItems([...orderItems, { name: "", price: "", qty: "" }]);

  };

  const handleRemoveItem = (index) => {
    const newOrderItems = [...orderItems];
    newOrderItems.splice(index, 1);
    setOrderItems(newOrderItems);

  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Create New Order</h1>

      <Item>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography
              align="left"
              variant='h5'
            >
              Customer Information
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="customer"
              name="customer"
              label="Customer Name"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="occasion"
              name="occasion"
              label="Order Occasion"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="orderStatus"
              name="orderStatus"
              label="Status"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Customer Phone Number"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="email"
              name="email"
              label="Customer e-mail"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDateTimePicker
                label="Time Due"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) =>
                  <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"

                    {...params} />} />
            </LocalizationProvider>
          </Grid>
          <Grid xs={12}>
            <Divider />
          </Grid>

          {/* Recipient Information */}

          <Grid xs={12}>
            <Typography
              align="left"
              variant='h5'
            >
              Recipient Information
            </Typography>

          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="recipient"
              name="recipient"
              label="Recipient Name"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={4}>
            <TextField
              id="recipientPhone"
              name="recipientPhone"
              label="Recipient Phone Number"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid xs={12} md={4}>
            <TextField
              id="delivery"
              name="delivery"
              label="Delivery/Pickup"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              id="deliveryAddress"
              name="deliveryAddress"
              label="Delivery Address"
              margin="normal"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <Divider />
          </Grid>

          {/* Item Details*/}
          <Grid xs={11}>
            <Typography
              align="left"
              variant='h5'
            >
              Order Details
            </Typography>


          </Grid>
          <Grid xs={1}>
            <Button
              align="right"

              type="button" onClick={handleAddItem}>
              Add
            </Button>
          </Grid>



          {orderItems.map((item, index) => (

            <>
              <Grid xs={12} md={8}>
                <TextField
                  name="name"
                  id={`name${index}`}
                  label="Item Desctiption"
                  multiline
                  value={item.name}
                  variant='standard'
                  fullWidth
                  onChange={(e) => handleInputChange(e, index)}
                />

              </Grid>
              <Grid xs={1} md={1}>
                <TextField
                  name="qty"
                  id={`qty${index}`}
                  label="Quantity"
                  fullWidth
                  variant='standard'
                  type="number"
                  InputProps={{ inputProps: { min: 0, step: 1 } }}
                  value={item.qty}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Grid>

              <Grid xs={1} md={2}>
                <TextField
                  name="price"
                  id={`price${index}`}
                  label="Unit price"
                  fullWidth
                  variant='standard'
                  type="number"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    inputProps: { min: 0, step: 0.01 }
                  }}
                  value={item.price}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Grid>

              <Grid xs={1} md={1}>
                <Button type="button" width='100%' onClick={() => handleRemoveItem(index)}>
                  Remove
                </Button>
              </Grid>
            </>
          ))}


          <Grid xs={12}>
            <Divider />
          </Grid>
          <Grid xs={12}>
            <Typography
              align="left"
              variant='h5'
            >
              Summary
            </Typography>
          </Grid>

          <Grid xs={12}>
            <Divider />
            <Button type="submit">Submit Order</Button>
          </Grid>






        </Grid>
      </Item>
    </Box>
  );
}