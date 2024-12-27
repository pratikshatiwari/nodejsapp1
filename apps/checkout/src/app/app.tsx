import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';
import PaymentDone from './PaymentDone/PaymentDone';
import React from 'react';
import ThemeProvider, { Footer, Header, SsCommonComponents } from '@ss/common-components';
import CartCheckoutPage from './CheckoutDetails/CheckoutDetails';
import PaymentPage from './PaymentDetails/PaymentPage'
import { useState } from 'react';
export function App() {
  return (
    <ThemeProvider>
      
      <Routes>
        <Route
          path="/"
          element={<CartCheckoutPage />}
        ></Route>
        <Route path="payment-details" element={<PaymentPage />} />
        <Route
          path="/PaymentDone"
          element={
            <PaymentDone />
          }
        />
      </Routes>
    
    </ThemeProvider>  
  );
}

export default App;
