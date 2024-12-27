import React from 'react';
import { Box } from '@mui/material';
import './Footer.scss'
 

 
export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Box
        component="footer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="footer"
    >
        Sunnysyde copyright © {currentYear} all rights reserved
    </Box>
   
    );
};
 
 
export default Footer;