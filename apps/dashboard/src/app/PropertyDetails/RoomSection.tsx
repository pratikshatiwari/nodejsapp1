import { RoomList } from "@ss/common-components";
import { Box, Container, Typography } from "@mui/material";
import icon from '../../assets/Group 2875.png';
import icon1 from "../../assets/ic-chevron-down (2).svg";

import { DateRange, RangeKeyDict } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import keyboard from '../../assets/keyboard.svg';
import styles from './RoomSection.module.scss';

interface Property {
    facility: string;
    reviews: number;
    id: string;
    images: string[];
    price: number;
    name: string;
    location: string;
    rating: number;
    guestFav: boolean;
    checkin: string; checkout: string
}


interface PropertySectionProps {
    property: Property;
}


interface DateRangeProps {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string;
}

export const RoomSection: React.FC<PropertySectionProps> = ({ property }) => {

    const [selectedRange, setSelectedRange] = useState<DateRangeProps[]>([
        {
            startDate: new Date(property.checkin),
            endDate: new Date(property.checkout),
            key: 'selection',
        },
    ]);

    const handleSelect = (ranges: RangeKeyDict) => {
        // setSelectedRange([ranges.selection]);
    };


    //   const handleSelect = (ranges: RangeKeyDict) => {
    //     const range = ranges.selection; // The 'selection' key holds the selected range
    //     setSelectedRange({
    //       startDate: range.startDate || null, // Fallback to null if undefined
    //       endDate: range.endDate || null,     // Fallback to null if undefined
    //       key: range.key || 'selection',
    //     });
    //   };


    return (

        <Container maxWidth="xl">
            <Box className={styles.mainContainer}>
                <Box className={styles.infoBox}>
                    <Typography variant="h2" className={styles.mainTitle}>
                        10 NIGHTS IN HASSLER VILLA
                    </Typography>

                    <Typography variant="h5" className={styles.dateRange}>
                        {property.checkin} - {property.checkout}
                    </Typography>

                    <Box className={styles.datePickerContainer}>
                        <DateRange
                            ranges={selectedRange}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            months={1}
                            direction="vertical"
                            rangeColors={['#007BFF']}
                            showMonthAndYearPickers={false}
                        />
                        <Box className={styles.clearDates}>
                            <img src={keyboard} alt="key" className={styles.keyboardIcon} />
                            <Typography className={styles.clearDatesText}>Clear dates</Typography>
                        </Box>
                    </Box>

                    <Box className={styles.flexibleDatesContainer}>
                        <Box className={styles.flexibleDates}>
                            <img src={icon} alt="icon" className={styles.flexibleIconLeft} />
                            <Box className={styles.flexibleInfo}>
                                <Typography  className={styles.flexibleTitle}>
                                    Flexible dates?
                                </Typography>
                                <Typography  className={styles.flexibleSubtitle}>
                                    Compare price and save
                                </Typography>
                            </Box>
                            <img src={icon1} alt="icon" className={styles.flexibleIconRight} />
                        </Box>
                    </Box>
                </Box>

                <Box className={styles.roomListContainer}>
                    <RoomList />
                </Box>
            </Box>
        </Container>

    );
}

export default RoomSection;
