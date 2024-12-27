import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import exploreIcon from '../assets/categories/exploreIconDetail.png';
import { useNavigate } from 'react-router-dom';
import playIcon from '../assets/categories/play.svg';
import searchIcon from '../assets/categories/Search.svg';
import exploreHeader from '../assets/categories/Layer.svg';
import './CategoryDescription.scss';
import carouselIcon1 from '../assets/categories/sliderImage01.png';
import carouselIcon2 from '../assets/categories/sliderImage02.png';
import carouselIcon3 from '../assets/categories/sliderImage03.png';
import carouselIcon4 from '../assets/categories/backgroundImage_detail.png';
import LocationSearchDialog from 'libs/src/lib/shared-ui/LocationSearchDialog';

const CategoryDescription: React.FC = () => {
    const [showSecondPart, setShowSecondPart] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef<HTMLImageElement | null>(null);
    const [open, setOpen] = useState(false);
    let value = 'Done';
    const handleSearchIconClick = () => {
        setOpen(true);
    };
    const handleClose = (newValue?: string) => {
        setOpen(false);

        if (newValue) {
            value = newValue;        }
    };
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/explore-property');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondPart(true);
        }, 1700);

        return () => clearTimeout(timer);
    }, []);

    const handleCarouselClick = () => {
        if (!carouselRef.current) return;
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/categories-detail');
        }, 1000);
    };

    const getCarouselStyle = () => {
        if (!isAnimating || !carouselRef.current) return {};
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const carouselRect = carouselRef.current.getBoundingClientRect();

        return {
            position: 'fixed',
            top: `${carouselRect.top}px`,
            left: `${carouselRect.left}px`,
            width: `${carouselRect.width}px`,
            height: `${carouselRect.height}px`,
            zIndex: 9999,
            transform: `translate(${vw / 2 - carouselRect.left - carouselRect.width / 2}px, ${vh / 2 - carouselRect.top - carouselRect.height / 2}px) scale(${vw / carouselRect.width}, ${vh / carouselRect.height})`,
            borderRadius: 'none',
            transition: 'all 1s ease-in-out',
        };
    };

    return (
        <Container className="container-xl" maxWidth="xl">
            <Box className="box-flex">
                <Box className="left-section">
                    <Box component="img" src={exploreHeader} className="explore-header" />
                </Box>

                {showSecondPart && (
                    <Box className="box-container">
                        <Box
                            component="img"
                            src={searchIcon}
                            onClick={handleSearchIconClick}
                            className="search-icon-category"
                        />
                        {!isAnimating && (
                            <>
                                <Box className="explore-container">
                                    <Typography className="region-title">EUROPE</Typography>
                                    <Typography className="explore-link">EXPLORE EXPERIENCES</Typography>
                                </Box>


                                <Typography className="region-description">
                                    Europe stretches all the way from the Arctic in the north to the Mediterranean Sea in the south, and from the Atlantic Ocean in the west to the Ural mountains in the east. It has many rivers, lakes, and mountain ranges. The map on page 4 tells you the names of some of the biggest ones.
                                </Typography>


                                <Box className="explore-container-button">
                                    <Button onClick={handleExplore} variant="contained" color="primary" size="large" className='explore-option'>
                                        Explore
                                    </Button>
                                    <Box component="img" src={playIcon} className="play-icon" />
                                </Box>

                            </>
                        )}

                        <Box className="carousel-container">
                            <Box
                                component="img"
                                src={isAnimating ? carouselIcon4 : carouselIcon1}
                                onClick={handleCarouselClick}
                                ref={carouselRef}
                                className={`carousel-image main-image ${isAnimating ? 'no-border-radius' : ''}`}
                                sx={isAnimating ? getCarouselStyle() : {}}
                            />

                            {!isAnimating && (
                                <>
                                    <Box
                                        component="img"
                                        src={carouselIcon2}
                                        className="carousel-image second-image"
                                    />
                                    <Box
                                        component="img"
                                        src={carouselIcon3}
                                        className="carousel-image third-image"
                                    />
                                </>
                            )}
                        </Box>

                    </Box>
                )}

            </Box>
            <LocationSearchDialog
                open={open}
                onClose={handleClose}
            />
        </Container>
    );
};

export default CategoryDescription;