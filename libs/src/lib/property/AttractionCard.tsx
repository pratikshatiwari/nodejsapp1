import React from 'react';
import { Card, CardMedia, Typography, Box, Rating } from '@mui/material';
import img5 from "../../assets/05.png";
import img6 from "../../assets/06.png";
import StarIcon from '@mui/icons-material/Star'; 
import './AttractionCard.scss';

interface AttractionCardProps {
  title: string;
  image: string;
  rating: number;
  price: number;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ title, image, rating, price }) => {
  return (
    <Card className="attraction-card">
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt={title}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <Box className="attraction-card__overlay">
        <Box className="attraction-card__content">
          <Typography variant="h6" component="h2" className="attraction-card__title">
            {title}
          </Typography>
          <Box className="attraction-card__rating">
            <Rating
              value={5}
              readOnly
              size="small"
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" />} 
            />
            <Typography variant="body2" className="attraction-card__rating-value">
              ({rating.toFixed(1)})
            </Typography>
          </Box>
          <Typography variant="subtitle2" className="attraction-card__price">
            From ${price}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export  function AttractionCardGrid() {
  const attractions = [
    {
      title: "Theme Park",
      image: img5,
      rating: 5.2,
      price: 69,
    },
    {
      title: "Hot Air Ballon",
      image: img6,
      rating: 5.2,
      price: 79,
    },
  ];

  return (
  <Box className="attraction-card-grid">
      {attractions.map((attraction, index) => (
        <AttractionCard key={index} {...attraction} />
      ))}
    </Box>
  );
}

export default  AttractionCardGrid;