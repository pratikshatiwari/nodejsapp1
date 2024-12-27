import React from 'react';
import { Card, CardContent,IconButton, CardMedia, Typography,Avatar, Box, Rating, Chip, Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import AirIcon from '@mui/icons-material/Air';
import './tour-card.scss';

interface AddOnTourProps {
  image: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  currency: string;
  languages: string[];
  isMustSee: boolean;
  hasAR: boolean;
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

export const AddOnTour: React.FC<AddOnTourProps> = ({
  image,
  title,
  description,
  category,
  rating,
  price,
  currency,
  languages,
  isMustSee,
  hasAR,
  isSelected,
  onSelect,
}) => {
  return (
    <Card className="tour-card">
      <Box className="tour-card__image-container">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="tour-card__image"
        />
        <Box className="tour-card__badges">
          {isMustSee && (
            <Chip
              icon={<VisibilityIcon />}
              label="Must See"
              className="tour-card__must-see-chip"
            />
          )}
          {hasAR && (
            <Avatar
          sx={{
            bgcolor: "#FFFFFF",
            color: "blue",
            fontSize: 12,
            width: 30,
            height: 30,
            fontWeight: 600,
            position: "absolute",
            bottom: 18,
            left: 18,
          }}
          className="tour-card__ar-badge"
        >
          AR
        </Avatar>
          )} 
        </Box>
        <Checkbox
          checked={isSelected}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSelect(e.target.checked)}
          className="tour-card__checkbox"
        />
      </Box>
      <CardContent className="tour-card__content">
      <Typography variant="overline" color="text.secondary" gutterBottom >
          {category}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'1.15rem'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <Typography variant="body2" color="text.secondary" ml={1}>
            Free Cancellation
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <IconButton aria-label="available languages" size="small">
            <LanguageIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary" ml={1}>
            Available in: {languages.join(', ')}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Box display="flex" alignItems="center">
            <Rating value={rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" ml={1}>
              ({rating})
            </Typography>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Typography variant="caption" color="text.secondary" mr={0.5}>
              From
            </Typography>
            <Typography variant="h6" color="primary">
              {currency}{price.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddOnTour;