import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './secure-footer.scss';

const SecureFooter: React.FC = () => {
  return (
    <>


      <Box className="secure-footer">
        <Typography variant='h6' className="secure-footer__title">
          Book With Confidence At Sunnysyde
        </Typography>
        <Box className="secure-footer__items">
          <Box className="secure-footer__item">
            <CheckCircleOutlineIcon className="secure-footer__check-icon" />
            <Typography variant='h6'>You'll have a free Personal Information</Typography>
          </Box>
          <Box className="secure-footer__item">
            <CheckCircleOutlineIcon className="secure-footer__check-icon" />
            <Typography variant='h6'>With Secure Transaction</Typography>
          </Box>
        </Box>
      </Box>


      <Box className="secure-policy">
        <Box className="secure-policy__row">
          <Typography variant='h6'>Cancellation Policy</Typography>
          <Link href="#" className="secure-policy__more">
            KNOW MORE
          </Link>
        </Box>
        <Box className="secure-policy__booking">
          <Box className="secure-policy__booking-label">
            <Typography variant='h6'>Booking</Typography>
            <Typography variant='h6'>Confirmation Mail</Typography>
          </Box>
          <Typography variant='h5' className="secure-policy__email">
            josef.joe@gmail.com
          </Typography>
        </Box>
      </Box>

    </>

  );
};

export default SecureFooter;