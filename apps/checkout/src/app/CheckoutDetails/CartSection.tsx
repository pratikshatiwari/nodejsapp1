import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip, Alert } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './CartSection.scss';
import cartImage from '../../assets/Cart_Image.png'
import topbooked from '../../assets/topBooked.svg'
import badge from '../../assets/1146.svg';

interface CartSectionProps {
  activeGuests: number;
  cartData?: {
    title?: string;
    favoriteText?: string;
    propertyName?: string;
    topBookedLabel?: string;
    location?: string;
    capacity?: {
      beds?: string;
      bathrooms?: number;
    };
    rating?: {
      score?: number;
      totalReviews?: number;
      maxStars?: number;
    };
    booking?: {
      checkIn?: string;
      checkOut?: string;
    };
    price?: {
      perNight?: number;
      total?: number;
    };
  };
}

const CartSection: React.FC<CartSectionProps> = ({ activeGuests, cartData }) => {
  if (!cartData) {
    return (
      <Card className="cart-section">
        <Alert severity="error">No cart data available. Please try again later.</Alert>
      </Card>
    );
  }

  const renderStars = (score?: number, maxStars: number = 5) => {
    try {
      if (typeof score !== 'number') {
        throw new Error('Invalid score');
      }
      const roundedScore = Math.round(score);
      const starCount = Math.min(Math.max(roundedScore, 0), maxStars);
      return [...Array(maxStars)].map((_, i) => (
        <StarIcon
          key={i}
          className={`cart-section__star ${i < starCount ? 'cart-section__star--filled' : ''}`}
        />
      ));
    } catch (error) {
      console.error('Error rendering stars:', error);
      return null;
    }
  };

  const formatPrice = (price?: number) => {
    try {
      if (typeof price !== 'number') {
        throw new Error('Invalid price');
      }
      return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } catch (error) {
      console.error('Error formatting price:', error);
      return 'N/A';
    }
  };

  return (
    <Card className="cart-section">
      <Box className="cart-section__header">
        <Typography variant='h2' className="cart-section__title">
          {cartData.title || 'Cart'}
        </Typography>
        <Box className="cart-section__favourite">
          <img src={badge} alt="badge" />
          {/* <Typography variant='h5' className="cart-section__favourite-text">
            {cartData.favoriteText || 'Favorite'}
          </Typography> */}
        </Box>
      </Box>
      <CardContent className="cart-section__content">
        <Box className="cart-section__image-container">
          <CardMedia
            component="img"
            image={cartImage}
            alt={cartData.propertyName || 'Property'}
            className="cart-section__image"
          />
          <Box className="cart-section__ar-badge">AR</Box>
        </Box>
        <Box className="cart-section__details">
          <Box className="cart-section__property-header">
            <Box className="cart-section__name-container">
              <Typography variant='h2' className="cart-section__property-name">
                {cartData.propertyName || 'Property Name'}
              </Typography>
              {cartData.topBookedLabel && (
                 <img src={topbooked} alt='topbooked'></img>
              )}
            </Box>
          
            
          </Box>

          <Typography variant='h5' className="cart-section__location">
              {cartData.location || 'Location not available'}
            </Typography>

          <Typography variant='h5' className="cart-section__capacity">
              {activeGuests} guests | {cartData.capacity?.beds || 'N/A'} | {cartData.capacity?.bathrooms ?? 'N/A'} bathroom
            </Typography>

          <Box className="cart-section__rating">
            <Box className="cart-section_rating-value">
              <Typography variant='h2' className="cart-section__rating-score">
                {cartData.rating?.score?.toFixed(2) ?? 'N/A'}
              </Typography>
              <Box className="cart-section__rating-stars">
                {renderStars(cartData.rating?.score, cartData.rating?.maxStars)}
              </Box>
            </Box>
            <Box className="cart-section_review-value">
              <Typography variant='h2' className="cart-section__reviews1">
                {cartData.rating?.totalReviews?.toLocaleString() ?? 0}
              </Typography>
              <Typography  className="cart-section__reviews">
                verified reviews
              </Typography>
            </Box>
          </Box>

          <Box className="cart-section__booking-info">
            <Box className="cart-section__booking-column">
              <Typography variant='h5' className="cart-section__booking-label">
                Check In
              </Typography>
              <Typography variant='h5' className="cart-section__booking-value">
                {cartData.booking?.checkIn || 'N/A'}
              </Typography>
            </Box>
            <Box className="cart-section__booking-column">
              <Typography variant='h5' className="cart-section__booking-label">
                Check Out
              </Typography>
              <Typography variant='h5' className="cart-section__booking-value">
                {cartData.booking?.checkOut || 'N/A'}
              </Typography>
            </Box>
            <Box className="cart-section__booking-column">
              <Typography variant='h5' className="cart-section__booking-label">
                Guests
              </Typography>
              <Typography variant='h5' className="cart-section__booking-value">
                {activeGuests} Guests
              </Typography>
            </Box>
          </Box>

          <Box className="cart-section__actions">
            <Button variant="outlined" className="cart-section__action-button1">
              MODIFY
            </Button>
            <Button variant="outlined" className="cart-section__action-button">
              VIEW SERVICES
            </Button>
          </Box>

          <Box className="cart-section__price">
            <Typography variant='h4' className="cart-section__price-nights">
              {formatPrice(cartData.price?.perNight)}/night
            </Typography>
            <Typography variant='h2' className="cart-section__price-total">
              {formatPrice(cartData.price?.total)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartSection;