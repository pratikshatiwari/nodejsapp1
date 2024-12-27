/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Typography } from "@mui/material";
import img from "../../assets/topimage.jpg";
import badgeIcon from "../../assets/badgeIcon.svg";
import styles from "./VacationPage.module.scss";

interface IconItem {
    icons: string;
    label: string;
    rating: number;
    star: string;
}

interface Property {
    id: string;
    images: string[];facility:string;
    price: number;
    name: string;
    location: string;
    rating: number;
    guestFav: boolean;
    amenities: string[];
    reviewsIcons : IconItem[];
}


interface PropertySectionProps {
    property: Property;
}




const VacationPage: React.FC<PropertySectionProps> = ({ property }) => {
  

    return (
        <div className={styles.header}>
            <Box className={styles.imageContainer}>
                <img className={styles.img} src={img} alt="Villa Top View" />
                
                <Box className={styles.textContainer}>
                    <Typography className={styles.title} variant="h2">
                        ABOUT THE VILLA
                    </Typography>
                    <Typography variant="h6" className={styles.description}>
                    Located just 1640 feet from Muratella Train Station, for trains to Rome city center and Fiumicino Airport, Holiday Inn Rome is in the city's business district. It offers a swimming pool, free WiFi and a spacious private parking. All air-conditioned, rooms here feature a 32” LCD TV with satellite channels. Each one has a private bathroom with a hairdryer. Some rooms include a mini-bar and a safe. Eur Parco Dei Medici serves an American buffet breakfast each morning. La Serra Restaurant offers Mediterranean and international cuisine at lunch and dinner. You can enjoy a drink at the Incontro lounge bar or poolside during summer. This 4-star hotel is 0.6 mi from Parco De Medici Golf Club and 3.7 mi from Fiera di Roma exhibition center. Nearby you will also find the Space Cinemas complex as well as restaurants and shops. Finally, you can benefit from a shuttle service from\to Fiumicino Airport and the city center (service for a fee, fixed times and upon reservation). The route from the airport to the hotel is free of charge.
                    </Typography>
                </Box>
                
            </Box>
            
            <Container maxWidth="xl" >
                <hr className={styles.hr} />
                <Box className={styles.servicesContainer}>


                    {
                        property.guestFav &&
                        <Box className={styles.guestFav}>
                            <Box className={styles.badgeIcon}>
                                <img src={badgeIcon} alt="Badge Icon" />
                            </Box>
                            <Box className={styles.badgeText}>
                                <Typography className={styles.badgeHeading} variant="h5">
                                    GUEST FAVOURITE
                                </Typography>
                                <Typography className={styles.badgeDescription}>
                                    One of the most loved homes on SunnySyde based on ratings, reviews, and reliability.
                                </Typography>
                            </Box>
                        </Box>
                    }



                    <Box className={styles.services}>
                        {property.reviewsIcons.map((item, index) => (
                            <Box key={index} className={styles.serviceItem}>
                                <img src={item.icons} alt={item.label} />
                                <Typography className={styles.serviceLabel}>
                                    {item.label} <span>({item.rating})</span>
                                </Typography>
                                <img src={item.star} alt="Star rating" />
                            </Box>
                        ))}
                    </Box>
                </Box>
                <hr className={styles.hr} />
            </Container>
            
        </div>
    );
}

export default VacationPage;
