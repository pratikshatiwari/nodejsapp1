import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';
import styles from './deal-card.module.scss';

interface DealCardProps {
  imageSrc: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
}

export function DealCard({
  imageSrc,
  title,
  location,
  rating,
  reviewCount,
  price,
  currency,
}: DealCardProps) {
  return (
    <Card className={styles.dealCard}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid>
              <img
                src={imageSrc}
                alt={title}
                className={styles.image}
              />
            </Grid>

            <Grid size="grow" sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <Typography className={styles.textPrimary}>
                You might also like this deal
              </Typography>

              <Typography variant="h6" className={styles.title}>
                {title}
              </Typography>

              <Typography variant="body2" className={styles.location}>
                {location}
              </Typography>

              <Grid container alignItems="center" spacing={1} className={styles.ratingContainer}>
                <Grid>
                  <StarIcon className={styles.starIcon} />
                </Grid>
                <Grid>
                  <Typography variant="body2" className={styles.rating}>
                    ({rating.toFixed(1)})
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2" className={styles.best}>
                    Best
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2" className={styles.reviewCount}>
                    {reviewCount} Ratings
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 4, md: 3 }} className={styles.priceContainer}>
          <Typography className={styles.price}>
            {currency}
            {price}/
          </Typography>

          <Typography variant="body2" className={styles.night}>
            night
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default DealCard;
