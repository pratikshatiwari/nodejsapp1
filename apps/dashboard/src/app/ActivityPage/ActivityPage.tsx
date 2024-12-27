import React, { useEffect } from "react";
import { Box, Container, Typography } from '@mui/material';
import { useLocation } from "react-router-dom";
import { SSHeader, TourCardGrid } from '@ss/common-components';
import CalendarTable from "../PropertyDetails/CalenderTable";
import CartService from "./CartService";
import { Footer } from '@ss/common-components';
import { Header } from '@ss/common-components';
import CartButton from "./CartButton";
import styles from './ActivityPage.module.scss';

export function ActivityPage() {

    
    const location = useLocation();
    const { property } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <Box className={styles.headerContainer}>
            <Header showSearch={true} />

                <hr className={styles.customHr} />
            </Box>
            <Box>
                <CartService property={property} />
            </Box>
            <Box>
                <CalendarTable />
            </Box>
            <Container maxWidth="xl">
                <Box className={styles.sectionContainer}>
                    <Box className={styles.headerContainer}>
                        <Typography
                            variant="h2"
                            className={styles.title}
                        >
                            THINGS TO DO AROUND ROME
                        </Typography>
                        <Typography
                            variant="h5"
                            className={styles.subtitle}
                        >
                            Experiences provided by Sunnysyde
                        </Typography>
                    </Box>
                    <TourCardGrid />
                </Box>
            </Container>
            <Box>
                <Footer />
            </Box>


            <Box
                className={styles.cartbutton}
            >
                <CartButton />
            </Box>

        </Box >
    )
}

export default ActivityPage;