// src/services/CartService.tsx

import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';

import topBooked from "../../assets/topBooked.svg";
import BadgeIcon from "../../assets/1146.svg";

import gold_star from '../../assets/Star (1).svg';
import black_star from '../../assets/Star.svg';
import styles from './CartService.module.scss';
import iii from '../../assets/iii.png';
import vr1 from '../../assets/vr1.png';
import vr2 from '../../assets/vr2.png';

import Icon5 from "../../assets/icon5.svg";

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

import { TextField } from '@mui/material';

import { useNavigate } from "react-router-dom";
interface IconItem {
  icons: string;
  label: string;
  rating: number;
  star: string;
}

interface Reason {
  heading: string;
  text: string;
  icon: string;
}

interface Amenity {
  icon: string;
  label: string;
}

interface Award {
  icon: string;
  title: string;
  description: string;
}
interface ManagerDetails {
  name: string;
  role: string;
  image: string;
  reviews: number;
  rating: number;
  yearExperience: number;
  about: string;
  detail: string
}

interface VerifiedReviews {
  rating: number;
  comment: string;
  good_review: string;
  bad_review: string;
  date: string;
  type: string;
}
interface askQuestion {
  question: string,
  customer_name: string
}
interface Property {
  facility: string;
  id: string;
  images: string[];
  price: number;
  name: string;
  location: string;
  rating: number;
  guestFav: boolean;
  amenities: string[];
  manager: ManagerDetails;
  awards: Award[];
  checkin: string;
  checkout: string;
  reviews: number;
  reviewsIcons: IconItem[];
  verifiedReviews: VerifiedReviews[];
  questions: askQuestion[];
}
interface CartServiceProps {
  property: Property;
}
const CartService: React.FC<CartServiceProps> = ({ property }) => {

  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">




      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          boxShadow: 3,
          borderRadius: '4px',
          backgroundColor: 'white',
          justifyContent: 'center',
          padding: '.8%',
        }}
      >

        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }} className={styles.box}
        >

          <Box className={styles.imagecontainer}>
            <img
              src={property.images[0]}
              alt="Product"
              className={styles.mainimage}
            />
            <img
              src={Icon5}
              alt="Overlay"
              className={styles.overlayicon}
            />
            <Box className={styles.overlaybox}>
              <img
                src={vr1}
                alt="Overlay Image 1"
                className={styles.overlayimage}
              />
              <img
                src={vr2}
                alt="Overlay Image 2"
                className={styles.overlayimage}
              />
              <img
                src={vr1}
                alt="Overlay Image 3"
                className={styles.overlayimage}
              />
            </Box>
          </Box>

        </Box>



        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
          className={styles.contentBox}
        >
          <Box
            className={styles.contentheader}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                className={styles.propertyName}
              >
                {property.name}
              </Typography>


              <Box sx={{ marginLeft: '8px' }}>
                <img src={topBooked} alt="top" />
              </Box>
            </Box>
            {property.guestFav && (
              <Box>
                <img src={BadgeIcon} alt="Badge" />
              </Box>
            )}
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Viale Castello Della Magliana 65, Rome, Italy
            </Typography>
          </Box>

          <Box>
            <Typography
              variant='h5'
              className={styles.details}
            >
              3 guests I Studio 2 beds I 1 bathroom
            </Typography>
          </Box>

          <Box
            className={styles.ratings}
          >
            <Box>
              <Typography
                className={styles.ratingValue}
              >
                {property.rating.toFixed(2)}
              </Typography>

              <Box className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <img
                    key={index}
                    src={star <= property.rating ? gold_star : black_star}
                    alt={`${star}-star`}
                    className={styles.star}
                  />
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                className={styles.reviews}
              >
                {property.reviews.toLocaleString()}
              </Typography>

              <Typography
                className={styles.reviewText}
              >
                Verified Reviews
              </Typography>
            </Box>
          </Box>

          <Box
            className={styles.detailsRow}
          >
            <Box>
              <Typography
                variant='h5'
                className={styles.detailLabel}
              >
                Check-in:
              </Typography>
              <Typography
                variant='h5'
                className={styles.detailValue}
              >
                {property.checkin}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant='h5'
                className={styles.detailLabel}
              >
                Checkout:
              </Typography>
              <Typography
                variant='h5'
                className={styles.detailValue}
              >
                {property.checkout}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant='h5'
                className={styles.detailLabel}
              >
                Guests:
              </Typography>
              <Typography
                variant='h5'
                className={styles.detailValue}
              >
                3 Guests
              </Typography>
            </Box>
          </Box>
          <Box
            className={styles.activitybuttons}
          >
            <Button className={styles.buttonPrimary} variant="contained" color="primary" size="large"
              onClick={() => navigate("/checkout", { state: { property } })}
            >
              ADD TO CART
            </Button>


            <Button className={styles.buttonSecondary} variant="outlined"> ACTIVITIES AND SERVICE</Button>
          </Box>


          <Box
            className={styles.priceRow}
          >
            <Box sx={{ alignItems: 'flex-start' }}>
              <Typography
                className={styles.priceText}
              >
                ${property.price.toLocaleString()} X 10 nights
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                className={styles.totalPrice}
              >
                $ {(property.price * 10).toLocaleString()}
              </Typography>

              <img
                src={iii}
                alt="iii"
              />
            </Box>
          </Box>


        </Box>

      </Box>
    </Container>
  );
};

export default CartService;
