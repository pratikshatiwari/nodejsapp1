import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './CategoryDetails.scss';
import explore_Header from '../assets/categories/SunnySyde_Black.svg';
import explore_RightIcon from '../assets/categories/background_image.png';
import galleryImage01 from '../assets/categories/galleryImage01.png';
import galleryImage02 from '../assets/categories/galleryImage02.png';
import galleryImage03 from '../assets/categories/galleryImage03.png';
import galleryImage04 from '../assets/categories/galleryImage04.png';
import galleryImage05 from '../assets/categories/galleryImage05.png';
import { usePropertyContext } from 'apps/dashboard/src/app/PropertyContext';
import PropertyCard from 'apps/dashboard/src/app/components/Property-card';
import editIcon from '../assets/categories/outline-editIcon.svg';
import profileIcon from '../assets/categories/AR.svg';
import searchIcon from '../assets/categories/Search.svg';
import LocationSearchDialog from 'libs/src/lib/shared-ui/LocationSearchDialog';

export const CategoryDetails: React.FC = () => {
    const { properties } = usePropertyContext();
    const [open, setOpen] = useState(false);
    let value = 'Done';
    const handleSearchIconClick = () => {
        setOpen(true);
    };
    const handleClose = (newValue?: string) => {
        setOpen(false);

        if (newValue) {
            value = newValue;
        }
    };
    return (
        <Box display="flex" width="100%" height="100vh" >
            <Box className="first-section">
                <Box
                    component="img"
                    src={explore_Header}
                    alt="first Section"
                    className="explore-header-label"
                />

                <Box className="rome-container">
                    <Typography variant="h2" className="country">Rome</Typography>
                    <Box
                        component="img"
                        src={editIcon}
                        alt="Icon near Rome"
                        className="icon"
                    />
                </Box>
                <Box className="price-container">
                    <Typography variant="h2" className="price-text">$4,200 - 12,000/NIGHT</Typography>
                    <Box
                        component="img"
                        src={profileIcon}
                        alt="Icon near price"
                        className="profile-icon"
                    />
                </Box>

                <Typography variant="h2" className="premium-title">
                    40 PREMIUM PROPERTIES FOR YOU
                </Typography>

                <Box className="properties-container">
                    {properties.map((property, index) => (
                        <Card key={index} className="property-card">
                            <PropertyCard {...property} />
                        </Card>
                    ))}
                </Box>
                <Typography className="about-experiences-label" >ABOUT EXPERIENCES</Typography>
                <Typography className="discover-text">
                    Discover the timeless allure of Rome, where ancient history meets vibrant modern life.
                    Stroll through the Colosseum and the Roman Forum, marvel at the Pantheon’s stunning
                    architecture, and toss a coin into the Trevi …
                </Typography>

                <Typography className="gallery-title">
                    GALLERY
                </Typography>

                <Box className="gallery-container">
                    <Box
                        component="img"
                        src={galleryImage01}
                        alt="First Image"
                        className="gallery-image image-large"
                    />
                    <Box
                        component="img"
                        src={galleryImage02}
                        alt="Second Image"
                        className="gallery-image image-small"
                    />
                    <Box className="gallery-image image-vertical">
                        <img src={galleryImage03} alt="Third Image" />
                        <img src={galleryImage04} alt="Fourth Image" />
                    </Box>
                    <Box
                        component="img"
                        src={galleryImage05}
                        alt="Fifth Image"
                        className="gallery-image image-wide"
                    />
                </Box>
            </Box>

            <Box className="second-section">
                <Box className="image-container">
                    <Box
                        component="img"
                        src={explore_RightIcon}
                        alt="Second Section"
                        className="second-section-img"
                    />
                    <Box
                        component="img"
                        src={searchIcon}
                        alt="Search Icon"
                        onClick={handleSearchIconClick}
                        className="search-icon-detail"
                    />
                </Box>
            </Box>
            <LocationSearchDialog
                open={open}
                onClose={handleClose}
            />
        </Box>
    );
};

export default CategoryDetails;