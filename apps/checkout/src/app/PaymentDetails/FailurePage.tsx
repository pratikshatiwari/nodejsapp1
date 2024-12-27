import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from 'react-router-dom';
import './failure-page.scss';

const FailurePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="failure-page">
      <ErrorIcon className="failure-page__icon" />
      <Typography variant="h4" className="failure-page__title">
        Payment Failed
      </Typography>
      <Typography variant="h4" className="failure-page__message">
        We're sorry, but your transaction could not be completed. Please try again.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default FailurePage;