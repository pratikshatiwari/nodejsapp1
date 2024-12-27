import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import './success-page.scss';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="success-page">
      <CheckCircleIcon className="success-page__icon" />
      <Typography variant="h4" className="success-page__title">
        Payment Successful!
      </Typography>
      <Typography variant='h5' className="success-page__message">
        Your transaction has been completed successfully.
      </Typography>
      <Button 
        variant="contained" 
        className="success-page__button"
        onClick={() => navigate('/')}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default SuccessPage;