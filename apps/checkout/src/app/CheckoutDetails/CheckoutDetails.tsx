import React, { useState, useEffect } from 'react';
import {Footer, Header, SSHeader} from "@ss/common-components";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CartSection from './CartSection';
import TravellerDetails from './TravellerDetails';
import CheckoutSection from './CheckoutSection';

const cartData = {
  title: "CART",
  favoriteText: "GUEST FAVOURITE",
  propertyName: "HASSLER VILLA",
  topBookedLabel: "Top Booked",
  location: "near Campus della Magnifica",
  capacity: {
    beds: "Studio2 beds",
    bathrooms: 1
  },
  rating: {
    score: 4.93,
    totalReviews: 5008,
    maxStars: 5
  },
  booking: {
    checkIn: "Sept 12 2024",
    checkOut: "Sept 22 2024"
  },
  price: {
    perNight: 7990,
    total: 79990
  }
};

const CartCheckoutPage: React.FC = () => {
  const [activeGuests, setActiveGuests] = useState(3);
  //const activeGuests = 3;

  const handleTravellerUpdate = (checkedTravellers: number) => {
    setActiveGuests(checkedTravellers);
  };

  return (
         <>
      <Header showSearch={true} />
      <Container  maxWidth="xl"  >
      <Grid container spacing={4}>
        <Grid size={{xs:12,md:8}}>
        <CartSection activeGuests={activeGuests} cartData={cartData} />
          <TravellerDetails onTravellerUpdate={handleTravellerUpdate} />
        </Grid>
        <Grid size={{xs:12,md:4}}>
          <CheckoutSection showButton={true}/>
        </Grid>
      </Grid>
      </Container>
      <Footer/>
      </>
  );
};

export default CartCheckoutPage;
