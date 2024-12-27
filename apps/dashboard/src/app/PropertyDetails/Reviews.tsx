import { Box, Typography, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styles from "./Reviews.module.scss";
import cross_icon from '../../assets/cross_icon.svg';
import up_icon from '../../assets/up_icon.svg';
import down_icon from '../../assets/down_icon.svg';
import arrow_down from '../../assets/ic-arrows-bottom.svg';
interface Award {
    icon: string;
    title: string;
    description: string;
}

interface ManagerDetails {
    name: string;
    role: string;
    image: string;
    reviews: number;
    rating: number;
    yearExperience: number;
    about: string;
    detail: string;
}

interface IconItem {
    icons: string;
    label: string;
    rating: number;
    star: string;
}
interface VerifiedReviews {
    rating: number;
    comment: string;
    good_review: string;
    bad_review: string;
    date: string;
    type: string;
}

interface Property {
    id: string;
    images: string[]; facility: string;
    price: number;
    name: string;
    location: string;
    rating: number;
    guestFav: boolean;
    amenities: string[];
    manager: ManagerDetails;
    awards: Award[];
    checkin: string;
    checkout: string;
    reviews: number;
    reviewsIcons: IconItem[];
    verifiedReviews: VerifiedReviews[];
}
interface ReviewsProps {
    setShowReviews: (show: boolean) => void;
    property: Property;
}
export const Reviews: React.FC<ReviewsProps> = ({ setShowReviews, property }) => {

    const [activeFilter, setActiveFilter] = useState<string>('ALL');


    const handleClose = () => {
        setShowReviews(false);
    };

    const reviewsRef = useRef<HTMLDivElement>(null);

    const scrollDown = () => {
        if (reviewsRef.current) {
            reviewsRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
    };



    const reviewCounts = {
        ALL: property.verifiedReviews.length,
        'TRAVELING AS COUPLE': property.verifiedReviews.filter((review) => review.type.toLowerCase() === 'traveling as couple').length,
        'BUSINESS TRAVELER': property.verifiedReviews.filter((review) => review.type.toLowerCase() === 'business traveler').length,
        'SENIOR TRAVELER': property.verifiedReviews.filter((review) => review.type.toLowerCase() === 'senior traveler').length,
        'FAMILY WITH YOUNG': property.verifiedReviews.filter((review) => review.type.toLowerCase() === 'family with young').length,
    };

    const filterButtons = [
        { label: 'ALL', count: reviewCounts.ALL },
        { label: 'TRAVELING AS COUPLE', count: reviewCounts['TRAVELING AS COUPLE'] },
        { label: 'BUSINESS TRAVELER', count: reviewCounts['BUSINESS TRAVELER'] },
        { label: 'SENIOR TRAVELER', count: reviewCounts['SENIOR TRAVELER'] },
        { label: 'FAMILY WITH YOUNG', count: reviewCounts['FAMILY WITH YOUNG'] },
    ];


    const filteredReviews = property.verifiedReviews.filter((review) =>
        activeFilter === 'ALL' || review.type.toLowerCase() === activeFilter.toLowerCase()
    );


    return (

        <Box className={styles.container}>
            <Box className={styles.innerBox}>
                <Typography className={styles.reviewText}>
                    {property.reviews} VERIFIED REVIEWS
                </Typography>
                <Box
                    className={styles.closeIcon}
                    onClick={handleClose}
                >
                    <img src={cross_icon} alt="Close" />
                </Box>
            </Box>

            <Box className={styles.services}>
                {property.reviewsIcons.slice(0, 4).map((item, index) => (
                    <Box key={index} className={styles.serviceItem}>
                        <img src={item.icons} alt={item.label} />
                        <Typography className={styles.serviceLabel}>
                            {item.label} <span>({item.rating})</span>
                        </Typography>
                        <img src={item.star} alt="Star rating" />
                    </Box>
                ))}
            </Box>


            <Box
                className={styles.filterButtons}
            >
                {filterButtons.map((button, index) => (
                    <Button
                        key={index}
                        className={styles.filterbuttonclass}
                        variant="outlined"
                        onClick={() => setActiveFilter(button.label)}
                    >
                        {button.label} {button.count ? `(${button.count})` : ""}
                    </Button>
                ))}
            </Box>



            <Box className={styles.reviewsContainer} ref={reviewsRef}>
                {filteredReviews.map((review, index) => (
                    <Box key={index} className={styles.reviewBox}>
                        <Box className={styles.reviewHeader}>
                            <Typography className={styles.rating}>
                                ({review.rating})
                            </Typography>
                            <Typography className={styles.comment}>
                                {review.comment}
                            </Typography>
                            <Typography className={styles.date}>
                                {review.date}
                            </Typography>
                        </Box>
                        <Box className={styles.reviewDetails}>
                            <Typography className={styles.goodReview}>
                                <img alt="down" src={down_icon} /> {review.good_review}
                            </Typography>
                            <Typography className={styles.badReview}>
                                <img alt="up" src={up_icon} /> {review.bad_review}
                            </Typography>
                        </Box>
                        <Typography className={styles.reviewType}>
                            Type: {review.type}
                        </Typography>
                    </Box>
                ))}
            </Box>





            <Box
                className={styles.scrollDownButton}
                onClick={scrollDown}
            >
                <img src={arrow_down} alt="Scroll down" />
            </Box>



        </Box>

    );
};

export default Reviews;
