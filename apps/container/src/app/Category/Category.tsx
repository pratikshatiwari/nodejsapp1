import React, { useEffect, useRef, useState } from 'react';
import cat1 from '../assets/categories/adventure.png';
import cat2 from '../assets/categories/SunAndSand.png';
import cat3 from '../assets/categories/Vacation2.png';
import search_Icon from '../assets/categories/Search.svg';

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import logo from "../assets/categories/Sunnysyde_Logo_White_2.svg";
import { useNavigate } from "react-router-dom";
/* import video from '../assets/categories/video.mp4' */
import './Category.scss'
import CategoryDescription from "../CategoryDescription/CategoryDescription";
import LocationSearchDialog from 'libs/src/lib/shared-ui/LocationSearchDialog';

const Categories: React.FC = () => {
    const [hover1, setHover1] = useState<boolean>(false);
    const [hover2, setHover2] = useState<boolean>(false);
    const [hover3, setHover3] = useState<boolean>(false);
    const [isZoomedOut, setIsZoomedOut] = useState<boolean>(false);
    const [hideContent, setHideContent] = useState<boolean>(false);
    const [showSecondPage, setShowSecondPage] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const navigate = useNavigate();
    const handleMouseEnterAdventure = (): void => setHover1(true);
    const handleMouseLeaveAdventure = (): void => setHover1(false);

    const handleMouseEnterSunSand = (): void => setHover2(true);
    const handleMouseLeaveSunSand = (): void => setHover2(false);

    const handleMouseEnterVacation = (): void => setHover3(true);
    const handleMouseLeaveVacation = (): void => setHover3(false);
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
    const handleClick = (): void => {
        setShowOverlay(true);
        setTimeout(() => {
            setHideContent(true);
            setShowSecondPage(true);
        }, 300);

        setTimeout(() => {
            navigate('/category-description');
        }, 1000);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsZoomedOut(true);
        }, 500);
    }, []);
    useEffect(() => {
        setIsZoomedOut(true);
    }, []);


    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        };

        const handleLoadedData = () => {

            setTimeout(playVideo, 2000);
        };

        const handleTimeUpdate = () => {
            if (videoRef.current) {
                const videoDuration = videoRef.current.duration;
                const currentTime = videoRef.current.currentTime;

                if (videoDuration - currentTime <= 1) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play(); // Continue playing immediately
                }
            }
        };

        if (videoRef.current) {

            videoRef.current.addEventListener('loadeddata', handleLoadedData);
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }


        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadeddata', handleLoadedData);
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className="main-container">
            {!hideContent && (
                <div>
                    <Grid container className="sub-container">
    
                        <Grid
                            size={{ sm: 4, md: 4 }}
                            onMouseEnter={handleMouseEnterAdventure}
                            onMouseLeave={handleMouseLeaveAdventure}
                            component="div"
                        >
                            <img

                                src={cat1}
                                alt="Zoom out effect"
                                className={`zoomable-image ${isZoomedOut ? 'zoom-out' : ''}`}
                            />
                            {/*   <div className="image-container">
                                <video ref={videoRef} className="zoom-out-video" width="100%" muted loop preload="auto">
                                    <source src={video} type="video/mp4"
                                        className={`zoomable-image ${isZoomedOut ? 'zoom-out' : ''}`}
                                    />

                                </video>
                                <div className="logo-first">
                                    <img src={logo} alt="logo" />
                                </div>
                                {hover1 && (
                                    <div className="hover-container">
                                        <div className="hover-content">
                                            <Typography className="hover-title">ADVENTURE</Typography>
                                            <Typography className="hover-options">129 OPTIONS</Typography>
                                        </div>
                                        <div className="hover-stats">
                                            <div className="stat-item">
                                                <Typography className="stat-number">5k+</Typography>
                                                <Typography className="stat-label">Successful trips</Typography>
                                            </div>
                                            <div className="stat-item">
                                                <Typography className="stat-number">200 Trips</Typography>
                                                <Typography className="stat-label">Yearly</Typography>
                                            </div>
                                            <div className="stat-item">
                                                <Typography className="stat-number">150</Typography>
                                                <Typography className="stat-label">Regular clients</Typography>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div> */}
                        </Grid>

                        <Grid
                            size={{ sm: 4, md: 4 }}
                            onMouseEnter={handleMouseEnterSunSand}
                            onMouseLeave={handleMouseLeaveSunSand}
                            onClick={handleClick}
                            component="div"
                            className="grid-container"

                        >
                            <div className="image-container">
                                <img
                                    src={cat2}
                                    alt="Zoom out effect"
                                    className={`zoomable-image ${isZoomedOut ? 'zoom-out' : ''}`}
                                />
                                {hover2 && (
                                    <div className="hover-container">
                                        <div className="hover-content">
                                            <Typography className="hover-title">SUN & SAND</Typography>
                                            <Typography className="hover-options">223 OPTIONS</Typography>
                                        </div>
                                        <div className="hover-stats">
                                            <div className="stat-item">
                                                <Typography className="stat-number">10k+</Typography>
                                                <Typography className="stat-label">Successful trips</Typography>
                                            </div>
                                            <div className="stat-item">
                                                <Typography className="stat-number">700 Trips</Typography>
                                                <Typography className="stat-label">Yearly</Typography>
                                            </div>
                                            <div className="stat-item">
                                                <Typography className="stat-number">750</Typography>
                                                <Typography className="stat-label">Regular clients</Typography>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Grid>
                        <Grid
                            size={{ sm: 4, md: 4 }}

                            component="div"
                            className="grid-container-image"

                        >
                            <div
                                className="image-container"
                                onMouseEnter={handleMouseEnterVacation}
                                onMouseLeave={handleMouseLeaveVacation}
                            >
                                <img
                                    src={cat3}
                                    alt="Zoom out effect"
                                    className={`zoomable-image ${isZoomedOut ? 'zoom-out' : ''}`}
                                />

                                {hover3 && (
                                    <div className="hover-container">
                                        <div className="hover-content">
                                            <Typography className="hover-title">VACATION</Typography>
                                            <Typography className="hover-options">29 OPTIONS</Typography>
                                        </div>
                                        <div className="hover-stats">
                                            <div className="stat-item">
                                                <Typography className="stat-number">8k+</Typography>
                                                <Typography className="stat-label">Successful trips</Typography>
                                            </div>

                                            <div className="stat-item">
                                                <Typography className="stat-number">500 Trips</Typography>
                                                <Typography className="stat-label">Yearly</Typography>
                                            </div>

                                            <div className="stat-item">
                                                <Typography className="stat-number">250</Typography>
                                                <Typography className="stat-label">Regular clients</Typography>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div
                                className="last-search"
                                onClick={handleSearchIconClick}
                            >
                                <img src={search_Icon} alt="logo" />
                            </div>

                        </Grid>
                    </Grid>
                    <LocationSearchDialog
                        open={open}
                        onClose={handleClose}
                    />
                </div>
            )}

            {showOverlay && (
                <div className="fade-overlay" />
            )}

            {showSecondPage && (
                <div className={hideContent ? 'content-visible' : 'content-hidden'}>
                <CategoryDescription />
                </div>
            )}
        </div>
    );
};

export default Categories;
