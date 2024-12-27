import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, InputAdornment, Button, Link, FormControl, InputLabel } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './card-details.scss';
import { useNavigate } from 'react-router-dom';
import mark from '../../assets/circle-info.svg';
interface ValidationErrors {
  cardNumber?: string;
  name?: string;
  expiry?: string;
  cvv?: string;
  password?: string;
}

const CardDetails: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [password, setPassword] = useState('');
  const [email] = useState('josef.joe@gmail.com');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const validateLuhn = (number: string): boolean => {
    let sum = 0;
    let isEven = false;

    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i), 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return (sum % 10) === 0;
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const validate = (field: string, value: string): string | undefined => {
    try {
      switch (field) {
        case 'cardNumber':
          if (!value) return 'Card number is required';
          if (value.replace(/\s/g, '').length !== 16) return 'Card number must be 16 digits';
          if (!validateLuhn(value.replace(/\s/g, ''))) return 'Invalid card number';
          break;
        case 'name':
          if (!value) return 'Name is required';
          if (value.length < 3) return 'Name is too short';
          break;
        case 'expiry':
          if (!value) return 'Expiry date is required';
          const [month, year] = value.split('/');
          if (!month || !year) return 'Invalid expiry date';
          if (parseInt(month) > 12) return 'Invalid month';
          const currentYear = new Date().getFullYear() % 100;
          if (parseInt(year) < currentYear) return 'Card has expired';
          break;
        case 'cvv':
          if (!value) return 'CVV is required';
          if (value.length !== 3) return 'CVV must be 3 digits';
          break;
        case 'password':
          if (!value) return 'Password is required';
          if (value.length < 6) return 'Password must be at least 6 characters';
          break;
      }
    } catch (error) {
      console.error(`Error validating ${field}:`, error);
      return 'An error occurred during validation';
    }
  };

  const handleBlur = (field: string) => {
    try {
      setTouched({ ...touched, [field]: true });
      const error = validate(field, field === 'cardNumber' ? cardNumber :
        field === 'name' ? name :
          field === 'expiry' ? expiry :
            field === 'cvv' ? cvv : password);
      setErrors({ ...errors, [field]: error });
    } catch (error) {
      console.error('Error in handleBlur:', error);
    }
  };

  const handleSubmit = () => {
    navigate('/PaymentDone');
    try {
      const newErrors: ValidationErrors = {};
      newErrors.cardNumber = validate('cardNumber', cardNumber);
      newErrors.name = validate('name', name);
      newErrors.expiry = validate('expiry', expiry);
      newErrors.cvv = validate('cvv', cvv);
      newErrors.password = validate('password', password);

      setErrors(newErrors);
      setTouched({
        cardNumber: true,
        name: true,
        expiry: true,
        cvv: true,
        password: true
      });

      if (!Object.values(newErrors).some(error => error !== undefined)) {
        console.log('Form submitted successfully');
        navigate('/PaymentDone');
        // Here you would typically send the data to your backend
      }

    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  useEffect(() => {
    try {
      const isValid =
        cardNumber.replace(/\s/g, '').length === 16 &&
        name.length >= 3 &&
        expiry.length === 5 &&
        cvv.length === 3 &&
        password.length >= 6 &&
        !Object.values(errors).some(error => error !== undefined);

      setIsFormValid(isValid);
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, [cardNumber, name, expiry, cvv, password, errors]);

  const maskCardNumber = (number: string) => {
    const last4 = number.slice(-4);
    return number ? '*'.repeat(12) + last4 : '*'.repeat(16);
  };

  return (
    <Box className="card-details">
      <Typography variant="h4" className="card-details__title">
        Card Details
      </Typography>
      <Box className="card-details__card">
        <Box className="card-details__card-chip" />
        <Typography variant='h5' className="card-details__card-number">
          {maskCardNumber(cardNumber)}
        </Typography>
        <Typography variant='h5' className="card-details__card-name">
          {name || '******* ***'}
        </Typography>
        <Typography variant='h5' className="card-details__card-expiry">
          {expiry || '**/**'}
        </Typography>
      </Box>
      <Box className="card-details__form">
        <FormControl variant="outlined">
          <InputLabel shrink htmlFor="name">
            Name on card
          </InputLabel>
          <TextField className="primary" value={name} onChange={(e) => setName(e.target.value)} id="username"
            onBlur={() => handleBlur('name')}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name} />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel shrink htmlFor="cardNumber">
            Card number
          </InputLabel>
          <TextField className="primaryBlue" value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            onBlur={() => handleBlur('cardNumber')}
            error={touched.cardNumber && !!errors.cardNumber}
            helperText={touched.cardNumber && errors.cardNumber} id="cardNumber"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon />
                </InputAdornment>
              ),
            }} />
        </FormControl>
        <Box className="card-details__row">
          <FormControl fullWidth variant="outlined">
            <InputLabel shrink htmlFor="expiry">
              Expiration
            </InputLabel>
            <TextField className="primary" value={expiry} onChange={(e) => setName(e.target.value)} id="expiry"
              onBlur={() => handleBlur('expiry')}
              error={touched.expiry && !!errors.expiry}
              helperText={touched.expiry && errors.expiry}
              placeholder="MM/YY" />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel shrink htmlFor="cvv">
              CVV <img src={mark} alt='mark'></img>
            </InputLabel>
            <TextField className="primary" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))} id="cvv"
              onBlur={() => handleBlur('cvv')}
              error={touched.cvv && !!errors.cvv}
              helperText={touched.cvv && errors.cvv}
             
               />
          </FormControl>
        </Box>

        <FormControl fullWidth variant="outlined">
          <InputLabel shrink htmlFor="password">
            Enter your dynamic password
          </InputLabel>
          <TextField className="primary" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password"
            onBlur={() => handleBlur('password')}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            placeholder="******" />
        </FormControl>
        <Box className="card-details__actions">
          <Button variant="outlined" className="card-details__cancel-button">
            Cancel
          </Button>
          <Button
            variant="contained"
            className="card-details__pay-button"
            onClick={handleSubmit}
          // disabled={!isFormValid} 
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;