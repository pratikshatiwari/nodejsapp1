import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, Chip, IconButton, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import img1 from "../../assets/01.png";
import img2 from "../../assets/02.png";
import img3 from "../../assets/03.png";
import img4 from "../../assets/04.png"; import cancel from '../../assets/cancel.png';
import img5 from "../../assets/Group 975.svg";
import icon from '../../assets/heart-1.svg';
import translate from "../../assets/Translate icon.svg";
import './tour-card.scss';
import icon5 from '../../assets/icon5.svg';

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  currency: string;
  languages: string[];
  isMustSee?: boolean;
  hasAR?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  title,
  description,
  category,
  rating,
  price,
  currency,
  languages,
  isMustSee = false,
  //hasAR = false,
}) => {
  return (
    <Card className="tour-card" sx={{
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      boxShadow: '0px 12px 24px #7E000026',
      borderRadius: '12px',
      paddingBottom: 0, 
      overflow: 'hidden', 
    }}>
      <CardMedia
        className="tour-card__media"
        component="img"
        image={image}
        alt={title}
        sx={{ borderRadius: '12px' }}
      />
      {isMustSee && (
        <Chip
          icon={<VisibilityIcon />}
          label="Must See"
          className="tour-card__must-see-chip"
        />
      )}
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1, 
      }}
    >
      <img src={icon} alt="heart icon" style={{ width: '24px', height: '24px' }} />
    </Box>
    <Box
      className="ar-icon"   
    >
      <img src={icon5} alt="heart icon" />
    </Box>
      <CardContent className="tour-card__content" sx={{  paddingBottom: '1px !important' }}>
        <Box>
          <Box
            sx={{
              background: '#E8F0FF 0% 0% no-repeat',
              borderRadius: '11px',
              opacity: 1,
              alignItems: 'center', display: 'inline-flex',
              padding: '2px',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '12px',
                letterSpacing: '0px',
                color: '#2D3DDF',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </Typography>
          </Box></Box>

        <Box style={{ padding: "2px" }}>
          <Typography
            variant="h6"
            component="div"
            className="tour-card__title"
            sx={{
              textAlign: 'left',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '16px',
              letterSpacing: '1.4px',
              color: '#221F3C',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ width: "90%", padding: '2px 2px 0 2px' }}>
          <Typography
            variant="body2"
            className="tour-card__description"
            sx={{
              textAlign: 'left',
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              letterSpacing: '0px',
              color: '#585858',
            }}
          >
            {description}
          </Typography></Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 0.15rem',
            marginBottom: '0px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={img5} alt="icon" style={{ marginRight: '0.5rem' }} />
            <Typography
              variant="body2"
              sx={{
                textAlign: 'left',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '0.75rem',
                letterSpacing: '0',
                color: '#2D3DDF',
              }}
            >
              Free Cancellation
            </Typography>
          </Box>
          <img src={cancel} alt="can" style={{ }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0px',
          }}
        >
          {/* <IconButton aria-label="available languages" size="small"> */}
            <LanguageIcon />
          {/* </IconButton> */}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              fontFamily: 'Poppins',
              fontSize: '12px',
              letterSpacing: '0px',
              color: '#747474',
              marginLeft: '0.7rem',
            }}
          >
            Available in: {languages.join(', ')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0',
            marginTop: '0px',
            marginBottom: '0px',
          }}
        >
          <Box className="tour-card__rating" sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" fontWeight="bold">
              ({rating})
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
            marginBottom: '0px',
            paddingBottom: '0px'
          }} >
            < Typography
              variant="caption"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 'normal',
                fontSize: '12px',
                color: '#747474',
                marginBottom: '0px',
              }}
            >
              From
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontSize: '16px',
                color: '#2D3DDF',
              }}
            >
              {currency}{price.toFixed(2)}
            </Typography>
          </Box>
        </Box>

      </CardContent>

    </Card >

  );
};

export function TourCardGrid() {
  const tours = [
    {
      image: img1,
      title: "Colosseum & Roman Forum small-group tour with skip-the-line tickets & local guide",
      description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
      category: "ATTRACTIONS & GUIDED TOURS",
      rating: 5.2,
      price: 76.00,
      currency: "$",
      languages: ["En", "It"],
      isMustSee: true,
      //hasAR: true,
    },
    {
      image: img2,
      title: "Private tour of Colosseum, Roman Forum and Palatine Hill with local expert guide",
      description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
      category: "ATTRACTIONS & GUIDED TOURS",
      rating: 5.2,
      price: 105.00,
      currency: "$",
      languages: ["En", "It"],
      isMustSee: true,
      //hasAR: true,
    },
    {
      image: img3,
      title: "Best of Rome walking tour with the Spanish Steps, Trevi Fountain and Pantheon",
      description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
      category: "ATTRACTIONS & GUIDED TOURS",
      rating: 5.2,
      price: 32.00,
      currency: "$",
      languages: ["En", "It"],
      isMustSee: true,
      //hasAR: true,
    },
    {
      image: img4,
      title: "Best of Rome walking tour with the Spanish Steps, Trevi Fountain and Pantheon",
      description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
      category: "ATTRACTIONS & GUIDED TOURS",
      rating: 5.2,
      price: 32.00,
      currency: "$",
      languages: ["En", "It"],
      isMustSee: true,
    },
  ];

  return (
    <Box sx={{
      gap: 2,justifyContent:'space-between' ,alignItems:'center',
    }} display="flex" flexWrap="wrap" alignItems="center">
      {tours.map((tour, index) => (
        <TourCard key={index} {...tour} />
      ))}
    </Box>
  );
}
export default TourCardGrid;