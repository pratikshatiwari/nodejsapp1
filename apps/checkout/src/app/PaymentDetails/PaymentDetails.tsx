import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PaymentMethods from './PaymentMethods';
import CardDetails from './CardDetails';
import './payment-details.scss';

const PaymentDetails: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'netbanking'>('credit');

  return (
    <Card className="payment-details">
      <CardContent>
        <PaymentMethods 
          selected={paymentMethod} 
          onSelect={setPaymentMethod} 
        />
        <CardDetails />
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;