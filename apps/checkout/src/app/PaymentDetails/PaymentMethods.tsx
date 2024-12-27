import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './payment-methods.scss';

interface PaymentMethodsProps {
  selected: 'credit' | 'debit' | 'netbanking';
  onSelect: (method: 'credit' | 'debit' | 'netbanking') => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ selected, onSelect }) => {
  return (
    <Box className="payment-methods">
      <Tabs 
        value={selected} 
        onChange={(_, value) => onSelect(value)}
        className="payment-methods__tabs"
      >
        <Tab
          icon={<CreditCardIcon />}
          label="Credit Card"
          value="credit"
          className="payment-methods__tab"
        />
        <Tab
          icon={<AccountBalanceIcon />}
          label="Net Banking"
          value="netbanking"
          className="payment-methods__tab"
        />
        <Tab
          icon={<CreditCardIcon />}
          label="Debit Card"
          value="debit"
          className="payment-methods__tab"
        />
      </Tabs>
    </Box>
  );
};

export default PaymentMethods;