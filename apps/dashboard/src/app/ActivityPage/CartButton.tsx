import React from 'react';
import styles from './CartButton.module.scss';
import { Box, Typography } from '@mui/material';

const CartButton: React.FC = () => {
  return (
    <Box className={styles.cartButton}>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>Activities Cart</Typography>
      </Box>
      <Box className={styles.priceContainer}>
        <Typography className={styles.price}>
          <Typography component="span" className={styles.currency}>
            $
          </Typography>
          450.00
        </Typography>
      </Box>
    </Box>
  );
};

export default CartButton;
