import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import ii1 from '../../assets/ii1.svg';
import ii2 from '../../assets/ii2.svg';
import ii3 from '../../assets/ii3.svg';
import ii4 from '../../assets/ii4.svg';
import ii5 from '../../assets/ii5.svg';
import ii6 from '../../assets/ii6.svg';
import ii7 from '../../assets/ii7.svg';
import image01 from '../../assets/Image02.png';
import image1 from '../../assets/profile.jpg';
import ballon from '../../assets/balllon.png';

import styles from './PaymentDone.module.scss';
import { Footer, Header } from '@ss/common-components';
type ButtonType = {
    icon: string;
    text: string;
};
type CostType = {
    text: string;
    price: number;
};
type DiscountType = {
    text: string;
    price: number;
};
type DetailType = {
    place: string,
    price: number,
    date: string,
    travellers: number,
    room: number
}

const PaymentDone: React.FC = () => {
    const buttons: ButtonType[] = [

        {
            icon: ii2,
            text: "Print"
        },
        {
            icon: ii3,
            text: "Download"
        },

        {
            icon: ii4,
            text: "Share"
        },
        {
            icon: ii1,
            text: "Save"
        },
    ];
    const detail: DetailType[] = [
        {
            place: "Hassler Villa",
            price: 79990,
            date: "Sept 12 - 22",
            travellers: 3,
            room: 1
        }
    ]
    const cost: CostType[] = [

        {
            text: "SunnySyde Activities",
            price: 9490
        },
        {
            text: "Service fees",
            price: 490
        },
    ];
    const discount: DiscountType[] = [
        {
            text: "Coupon discount",
            price: 949
        },
        {
            text: "Property discount",
            price: 500
        }
    ]
    function sumOfCost(costArray: CostType[]): number {
        let sum = 0;
        for (let i = 0; i < costArray.length; i++) {
            sum += costArray[i].price;
        }
        for (let i = 0; i < detail.length; i++) {
            sum += detail[i].price;
        }
        return sum;
    }
    function costAfterDiscount(discountArray: DiscountType[]): number {
        const totalCost = sumOfCost(cost);
        let totalDiscount = 0;
        for (let i = 0; i < discountArray.length; i++) {
            totalDiscount += discountArray[i].price;
        }
        return Math.max(0, totalCost - totalDiscount);
    }

    function formatPrice(price: number): string {
        return `${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    const totalCostAfterDiscount = costAfterDiscount(discount);
    const Totaltax = 15;
    const totalTaxAmount = (Totaltax / 100) * totalCostAfterDiscount;
    const Total = totalCostAfterDiscount + totalTaxAmount;
    return (
        <>
            <Header showSearch={false} />
            <hr className={styles.customHr1} />
            <Container maxWidth="xl">
                <Grid className={styles.headinggrid} container alignItems="center" justifyContent="space-between" spacing={2}>
                    <Grid container alignItems="center" spacing={0}>
                        <Typography variant='h2' className={styles.bookingTitle}>
                            Booking Successfully completed,
                        </Typography>
                        <Typography variant='h5' className={styles.bookingDescription}>
                            your trip schedule, please check under profile.
                        </Typography>
                    </Grid>
                    <Grid container spacing={3.5}>
                        {buttons.map((button, index) => (
                            <Grid key={index} display="flex" alignItems="center">
                                <img src={button.icon} alt={button.text} style={{ marginRight: 6 }} />
                                <Typography className={styles.buttonText}>
                                    {button.text}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid container className={styles.outerGrid} spacing={1}>
                    <Grid size={4} className={styles.innerGrid}>
                        <img
                            src={image01}
                            alt="Image1"
                            className={styles.image}
                        />
                        <Grid spacing={2} className={styles.buttonContainer}>

                            <Button className={styles.button} variant="outlined">MODIFY BOOKING</Button>


                            <Button className={styles.button} variant="contained" color="primary" size="large">
                                VIEW ITINERARY
                            </Button>

                        </Grid>
                    </Grid>
                    <Grid size={4} className={styles.innerGrid}>
                        <Grid>
                            <Typography variant='h5' className={styles.bookingCode}>
                                BOOKING CODE - SS275893526HG324
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='h2' className={styles.bookingheading}>
                                HASSLER VILLA
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography
                                variant='h5'
                                className={styles.bookingAddress}
                            >
                                Viale Castello Della Magliana 65, Rome, Italy
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography variant='h5' className={styles.vacility}>
                                3 guests I Studio 2 beds I 1 bathroom
                            </Typography>
                        </Grid>
                        <Grid container className={styles.infoContainer}>
                            <Grid className={styles.infoItem}>
                                <Typography variant='h5' className={styles.labelText}>Check-in:</Typography>
                                <Typography variant='h5' className={styles.valueText}>Sept 12 2024</Typography>
                            </Grid>
                            <Grid className={styles.infoItem}>
                                <Typography variant='h5' className={styles.labelText}>Checkout:</Typography>
                                <Typography variant='h5' className={styles.valueText}>Sept 22 2024</Typography>
                            </Grid>
                            <Grid className={styles.infoItem}>
                                <Typography variant='h5' className={styles.labelText}>Guests</Typography>
                                <Typography variant='h5' className={styles.valueText}>3 Guests</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography className={styles.labelText}>Includes</Typography>
                            <Typography className={styles.valueText}>Villa Stay, Transfers</Typography>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid padding={"1rem 0rem"}>
                            <Typography className={styles.paymentdetail}>Payment Details</Typography>
                        </Grid>
                        <Grid className={styles.cost}>
                            <Typography className={styles.des}>Description</Typography>
                            <Typography className={styles.des}>Price</Typography>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid width="100%">
                            {detail.map((item, index) => (
                                <Grid>
                                    <Grid key={index} className={styles.cost}>
                                        <Grid width="50%" className={styles.costtext}>
                                            <Typography className={styles.unique}>
                                                <span> {item.place} </span> <span>| {item.date}</span> <span>{item.travellers}&nbsp;traveller</span>, <span>{item.room}&nbsp;room</span>
                                            </Typography>
                                        </Grid>
                                        <Grid width="50%"  >
                                            <Typography className={styles.pricetext} align="right"> <sup className={styles.dollarSign}>$</sup>{formatPrice(item.price)}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid size={12}>
                                        <hr className={styles.customHr} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid width="100%">
                            {cost.map((item, index) => (
                                <Grid>
                                    <Grid key={index} className={styles.cost}>
                                        <Grid width="50%" className={styles.costtext}>
                                            <Typography className={styles.unique}>{item.text}</Typography>
                                        </Grid>
                                        <Grid width="50%"  >
                                            <Typography className={styles.pricetext} align="right"> <sup className={styles.dollarSign}>$</sup>{formatPrice(item.price)}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid size={12}>
                                        <hr className={styles.customHr} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        {discount.map((item, index) => (
                            <Grid key={index} className={styles.cost}>
                                <Typography className={styles.unique}>{item.text}</Typography>
                                <Typography className={styles.pricetext} align="right"> <sup className={styles.dollarSign}>$</sup>{formatPrice(item.price)}</Typography>
                            </Grid>
                        ))}
                        <hr className={styles.customHr} />
                        <Grid className={styles.cost}>
                            <Typography className={styles.unique}>Subtotal</Typography>
                            <Typography className={styles.pricetext} align="right"> <sup className={styles.dollarSign}>$</sup>{formatPrice(totalCostAfterDiscount)}</Typography>
                        </Grid>
                        <Grid className={styles.cost}>
                            <Typography className={styles.unique}> Tax</Typography><Typography className={styles.pricetext}>
                                <span>({Totaltax}%)</span>
                                <sup className={styles.dollarSign}>$</sup>
                                {formatPrice(totalTaxAmount)}
                            </Typography>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid className={styles.cost}>
                            <Typography className={styles.unique}> Total Price</Typography>
                            <Typography className={styles.Totalpricetext}><sup className={styles.dollarSign}>$</sup>{formatPrice(Total)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        size={4}
                        className={styles.thirdGrid}
                    >
                        <hr className={styles.customHr} />
                        <Grid className={styles.managerContainer}>
                            <Grid size={{ xs: 8 }} container alignItems="center" spacing={1}>
                                <Grid >
                                    <img width="60px" src={image1} alt="Profile" />
                                </Grid>
                                <Grid marginTop='auto' style={{ gap: '2rem' }}  >
                                    <Typography variant='h5' className={styles.managerName}>Jack K</Typography>
                                    <Typography variant='h6' className={styles.managerDetail}>Property Manager</Typography>
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 4 }} container justifyContent="flex-end">
                                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                                    <img src={ii5} alt="Icon 1" />
                                    <img src={ii7} alt="Icon 2" />
                                </Box>
                            </Grid>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid container className={styles.managerContainer}>
                            <Grid size={{ xs: 8 }} container alignItems="center" spacing={2}>
                                <Typography variant='h6' className={styles.managerDetail}>Support</Typography>
                            </Grid>
                            <Grid size={{ xs: 4 }} container justifyContent="flex-end">
                                <img src={ii6}></img>
                            </Grid>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid container className={styles.managerContainer}>
                            <Typography variant='h6' className={styles.managerDetail}>Contact SunnySyde</Typography>
                            <img src={ii7}></img>
                        </Grid>
                        <hr className={styles.customHr} />
                        <Grid className={styles.imageGrid}>
                            <img src={ballon} alt="balloon" className={styles.balloonImage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default PaymentDone;