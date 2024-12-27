import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import clock_icn from '../../assets/clock_icn.png';
import special_offer_icn from '../../assets/special_offer_icn.png';
import { AttractionCardGrid } from "@ss/common-components";
import styles from './Recommended.module.scss';
    
const Recommonded: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'special' | 'lastMinute'>('special');

    return (
        <Box className={styles.container}>
            <Box className={styles.header}>
                <Typography variant='h2' className={styles.title}>
                    RECOMMENDED BY SUNNYSYDE
                </Typography>
                <Box>
                    <Box className={styles.tabs}>
                        {/* Special Offers Tab */}
                        <Box
                            className={`${styles.tab} ${activeTab === 'special' ? styles.active : ''}`}
                            onClick={() => setActiveTab('special')}
                        >
                            <img src={clock_icn} alt="Clock Icon" />
                            <Typography component="p">
                                Special Offers
                            </Typography>
                        </Box>

                        {/* Last Minute Offer Tab */}
                        <Box
                            className={`${styles.tab} ${activeTab === 'lastMinute' ? styles.active : ''}`}
                            onClick={() => setActiveTab('lastMinute')}
                            style={{ marginLeft: '2%' }}
                        >
                            <img src={special_offer_icn} alt="Special Offer Icon" />
                            <Typography component="p">
                                Last Minute Offer
                            </Typography>
                        </Box>

                        <Box className={styles.viewMore}>
                            <Typography>
                                View More
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {activeTab === 'special' ? (
                <AttractionCardGrid />
            ) : (
                <Box>
                    <Typography className={styles.lastMinuteOffer} variant="h4">
                        Last Minute Offer
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Recommonded;
