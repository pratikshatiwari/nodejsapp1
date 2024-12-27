import React from 'react';
import { Box } from '@mui/material';
import './header.scss';
import Logo from '../../assets/SunnySyde_Black.svg';
import Dollar from '../../assets/dollar_icon.svg';
import Group from '../../assets/Group.svg';
import Arrow from '../../assets/chevron-down.svg';
import SideBar from '../../assets/slider.svg';
 
import SearchComponent from './search-bar';

interface HeaderProps {
    showSearch?: boolean;
}

export function Header({ showSearch = true }: HeaderProps) {
   
    return (
        <Box component="header" className="header">
            <Box className="header-left">
            <img src={SideBar} alt="SideBar Icon" className="header-image-top-left" />
 
                <img src={Logo} alt="Logo" className="header-image-left" />
            </Box>
 
            <Box className="header-center">
            {showSearch && <SearchComponent />}
            </Box>
 
            <Box className="header-right">
                <Box className="header-icon-wrapper-first">
                    <img src={Dollar} alt="Dollar Icon" className="header-image" />
                    <img src={Arrow} alt="Dollar Icon" className="arrow-icon" />
 
                </Box>
                <Box className="header-icon-wrapper-second">
                    <img src={Group} alt="Group Icon" className="header-image" />
                    <img src={Arrow} alt="Dollar Icon" className="arrow-icon" />
                </Box>
            </Box>
        </Box>
    );
};
 
export default Header;