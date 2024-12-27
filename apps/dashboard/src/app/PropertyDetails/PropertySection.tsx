import React from "react";
import "./PropertySection.scss";
import SuccessIcon from "../../assets/Success-icon.svg";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import BadgeIcon from "../../assets/1146.svg";
import StarIcon from "../../assets/8163.svg";
import topBooked from "../../assets/topBooked.svg";
import gold_star from '../../assets/Star (1).svg';
import black_star from '../../assets/Star.svg';
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import iii from '../../assets/iii.png';
import showall from '../../assets/showallphoto.png';
interface Award {
    icon: string;
    title: string;
    description: string;
}
interface Property {
    reviews: number; facility: string;
    id: string;
    images: string[];
    price: number;
    name: string;
    location: string;
    rating: number;
    guestFav: boolean;
    amenities: string[];
    awards: Award[];
    checkin: string; checkout: string
}


interface PropertySectionProps {
    property: Property;
}


const PropertySection: React.FC<PropertySectionProps> = ({ property }) => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <Box className="card">
                <Box className="left-card">

                    <Box className="head">
                        <Typography className="property-name" variant="h1">{property.name}</Typography>
                        <Box className="top-booked">
                            <img src={topBooked}></img>
                        </Box>
                    </Box>
                    <Box className="head1">
                        <Typography variant="h5" className="head12">
                            Viale Castello Della Magliana 65, Rome, Italy
                        </Typography>
                    </Box>
                    <Box className="head2">
                        <Typography variant ="h5" className="vacility">
                            3 guests | Studio2 beds | 1 bathroom
                        </Typography>
                    </Box>
                    <hr className="hr1" />
                    <Box className="head3">

                        {property.guestFav &&
                            <Box className="guest">
                                <img src={BadgeIcon}></img>
                            </Box>}
                        <Box className="guest-text">
                            <Typography variant="h5" className="guest-description">
                                One of the most loved homes on SunnySyde based on ratings, reviews and reliability
                            </Typography>
                        </Box>

                        <Box className="rating">

                            <Box className="points">

                                <Typography className="rating-value">{property.rating}.0</Typography>


                                <Box className="star-icon" sx={{ display: 'flex', gap: '0' }}>
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <img
                                            key={index}
                                            src={star <= property.rating ? gold_star : black_star}
                                            alt={`${star}-star`}
                                            style={{ cursor: 'pointer', marginRight: '0.2rem', width: '0.4rem' }}
                                        />
                                    ))}
                                </Box>

                            </Box>

                        </Box>
                        <Box className="reviews">
                            <Typography className="reviews-heading">
                                {property.reviews.toLocaleString()}
                            </Typography>
                            <Typography className="reviews-text">
                                Verified Reviews
                            </Typography>
                        </Box>


                    </Box>

                    <hr className="hr2" />

                    <Box className="award">
                        {property.awards.map((award, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    position: 'relative',
                                    top: `${index * 0.4375 + 0.3125}rem`,
                                    left: '0.3125rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        marginTop: '7%',
                                        height: `${index === 0 ? 2.5 : 1.875}rem`,
                                        width: '1.25rem',
                                    }}
                                >
                                    <img src={award.icon} alt={`icon${index + 1}`} />
                                </Box>
                                <Box className="award-content">
                                    <p className="award-title">{award.title}</p>
                                    <p className="award-description">{award.description}</p>
                                </Box>
                            </Box>
                        ))}
                        <hr
                            className="hrr"
                        />
                    </Box>


                </Box>

                <Box className="right-card">
                    <Box className="order-card">
                        <Box className="price">
                            <Box className="pricetag">
                                <Typography className="currency">$</Typography>
                                &nbsp;
                                <Typography className="amount">{property.price.toLocaleString()}/</Typography>
                                <Typography className="per-night">night</Typography>
                            </Box>
                        </Box>
                        <Box className="dates">
                            <Box className="date1">
                                <Box className="date11">
                                    <Typography color="textSecondary" className="date111">
                                        Check-in:
                                    </Typography>
                                    <Typography className="date112">
                                        {property.checkin}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="date2">
                                <Box className="date21">
                                    <Typography color="textSecondary" className="date211">
                                        Checkout:
                                    </Typography>
                                    <Typography className="date212">
                                        {property.checkout}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="guests">
                            <Box className="guest1">
                                <Box className="guest-name">
                                    <Box className="guest-name-heading">
                                        <p>Guests</p>
                                    </Box>
                                    <Box className="guest-number">
                                        <p>3 Guests</p>
                                    </Box>
                                </Box>
                                <Box className="arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.641"
                                        height="6.316"
                                        viewBox="0 0 11.641 6.316"
                                    >
                                        <g id="ic-chevron-down" transform="translate(1.061 1.061)">
                                            <path
                                                id="Path_52"
                                                data-name="Path 52"
                                                d="M7.22,9.8l4.11,4.11a1,1,0,0,0,1.41,0l4-4"
                                                transform="translate(-7.22 -9.8)"
                                                fill="none"
                                                stroke="#000"
                                                stroke-linecap="round"
                                                strokeLinejoin="bevel"
                                                stroke-width="1.5"
                                            />
                                        </g>
                                    </svg>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Button onClick={() => navigate("/authentication")} className="addtocart" variant="contained" color="primary" size="large">
                           
                                ADD TO CART
                           
                        </Button>
                        <Box className="time">
                            <Box className="breakfast">
                                <Checkbox className="checkbox" />
                                <Typography className="label">Breakfast</Typography>
                            </Box>
                            <Box className="lunch">
                                <Checkbox className="checkbox" />
                                <Typography className="label">Lunch/Dinner</Typography>
                            </Box>
                            <Box className="dinner">
                                <Checkbox className="checkbox" />
                                <Typography className="label">Cab Transfer</Typography>
                            </Box>
                        </Box>
                        <Box className="nights">
                            <Box className="night1">
                                <p>
                                    <span className="dollar-sign">$</span>{property.price.toLocaleString()} X 10 nights
                                </p>
                            </Box>
                            <Box className="nighttotal">
                                <p>
                                    <span className="dollar-sign">$</span>{property.price.toLocaleString()}
                                </p>
                            </Box>
                        </Box>
                        <Box className="fee">
                            <Box className="fee1">
                                <p>
                                    SunnySyde service fee
                                    <img src={iii} alt="Service Fee Icon" />
                                </p>
                            </Box>
                            <Box className="totalfee">
                                <p>
                                    <span className="dollar-sign">$</span>2,000
                                </p>
                            </Box>
                        </Box>
                        <hr className="hr4" />
                        <Box className="tax">
                            <Box className="totalbefore">
                                <Typography className="label">Total before Taxes</Typography>
                            </Box>
                            <Box className="totaltax">
                                <Typography className="currency">$</Typography>
                                <Typography className="amount">
                                    {(property.price + 2000).toLocaleString()}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Container >
    );
}

export default PropertySection;
