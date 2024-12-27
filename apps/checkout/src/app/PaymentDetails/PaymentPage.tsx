import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PaymentDetails from './PaymentDetails';
import CheckoutSection from '../CheckoutDetails/CheckoutSection';
import SecureFooter from './SecureFooter';
import './payment-page.scss';
import { Footer, Header, SSHeader } from '@ss/common-components';

const PaymentPage: React.FC = () => {
  return (
    <>
      <Header showSearch={true} />
      <Container maxWidth="xl" className='payment-details'>
      <Typography variant="h2" className="payment-details__title">
          PAYMENT DETAILS
        </Typography>
        <Grid container spacing={2}  className="grid-box">
          <Grid size={{ xs: 12, md: 7 }}>
            <PaymentDetails />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CheckoutSection showButton={false} />
            <SecureFooter />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentPage;