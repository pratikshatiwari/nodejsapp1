import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, TextField, Button, Box, FormControl, InputLabel } from '@mui/material';
import './CheckoutSection.scss';
import { useNavigate } from 'react-router-dom';
interface CheckoutSectionProps {
  showButton: boolean;
}
const CheckoutSection: React.FC<CheckoutSectionProps> = ({ showButton }) => {
   
  const navigate = useNavigate();
  const checkoutItems = [
    { description: 'Hassler Villa | Sept 12 - 22', price: 78990.00, secondary: '3 travellers, 1 room' },
    { description: 'SunnySyde Activities', price: 4490.00 },
    { description: 'Service fees', price: 480.00 },
  ];

  const handleClick = () => {
    navigate('/payment-details');
  }
  return (
    <Card className="checkout-section">
      <Typography variant="h2" className="checkout-section__title">
        CHECKOUT
      </Typography>
      <CardContent className="checkout-section__content">
        <Box className="checkout-section__header">
           <Typography>Decription</Typography>
           <Typography>Price</Typography>
        </Box>
        {/* <hr className='hrclassName'/> */}
        <List className="checkout-section__list">
          {checkoutItems.map((item, index) => (
            <ListItem key={index} className="checkout-section__item">
              <ListItemText
                primary={item.description}
                secondary={item.secondary}
                className="checkout-section__item-description"
              />
              <Typography className="checkout-section__item-price">
                ₹{item.price.toFixed(2)}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Box className="checkout-section__coupon">
          <Box className="checkout-section__coupon-input">
            <FormControl variant="outlined" fullWidth>
              <InputLabel shrink htmlFor="coupon-input">
                Have a Coupon?
              </InputLabel>
              <TextField id="coupon-input" placeholder="SunnySydeRED" />
            </FormControl>
            <Button variant="text" className='customButton'>Apply</Button>
          </Box>
        </Box>
        <List className="checkout-section__list">
          <ListItem className="checkout-section__item">
            <ListItemText primary="Coupon discount" className="checkout-section__item-description" />
            <Typography variant='h5' className="checkout-section__item-price">-₹499.00</Typography>
          </ListItem>
          <ListItem className="checkout-section__item">
            <ListItemText primary="Property discount" className="checkout-section__item-description" />
            <Typography variant='h5' className="checkout-section__item-price">-₹500.00</Typography>
          </ListItem>
          <ListItem className="checkout-section__item">
            <ListItemText primary="Subtotal" className="checkout-section__item-description" />
            <Typography variant='h5' className="checkout-section__item-price">₹88,523.00</Typography>
          </ListItem>
          <ListItem className="checkout-section__item">
            <ListItemText
              primary="Tax"
              className="checkout-section__item-description"
            />
            <Typography variant='h5' className="checkout-section__item-price checkout-section__item-price--tax">(18%)₹13,276.15</Typography>
          </ListItem>
        </List>
        <Box className="checkout-section__total">
          <Typography variant='h5' className="checkout-section__total-label">Total Price</Typography>
          <Typography variant="h2" className="checkout-section__total-price">
            ₹101,799.15
          </Typography>
        </Box>
        {showButton && <Button
          variant="contained"
          fullWidth
          className="checkout-section__confirm-button"
          onClick={handleClick}
        >
          CONFIRM BOOKING
        </Button>}
        
      </CardContent>
    </Card>
  );
};

export default CheckoutSection;