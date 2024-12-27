import React from 'react';
import { Box } from '@mui/material';
import Search_Icon from '../../assets/search_header.svg';
import { Typography, Card } from '@mui/material';
 
import './search-bar.scss';
 
const SearchComponent = () => {
    return (
        <Box className="search-container">
            <Box className="search-part search-part-first">
                <Typography className='search-input-first'>Rome</Typography>
            </Box>
 
            <Box className="divider"></Box>
 
            <Box className="search-part search-part-second">
                <Typography className='search-input'>Sept 12 - 22</Typography>
            </Box>
 
            <Box className="divider"></Box>
 
            <Box className="search-part search-part-last">
                <Typography className='search-input-last'>3 travellers, 1 room</Typography>
            </Box>
 
            <img src={Search_Icon} alt="Search Icon" className="search-end-icon" />
        </Box>
    );
};
 
export default SearchComponent;