import React, { useState } from 'react';
import { Box, Typography, TextField, Chip, InputAdornment, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { AddOnTour } from '@ss/common-components';
import './activities-and-service.scss';
import img1 from "../../assets/01.png";
import img2 from "../../assets/02.png";
import img3 from "../../assets/03.png";
import img4 from "../../assets/04.png";

const filterOptions = ['All', 'Experience', 'Mountain', 'Beaches', 'Theme Park', 'Transport'];

interface Tour {
  id: number;
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
}

const tours: Tour[] = [
  {
    id: 1,
    hasAR: true,
    image: img1,
    title: "Colosseum & Roman Forum small-group Theme park with skip-the-line tickets",
    description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
    category: "ATTRACTIONS & GUIDED TOURS",
    rating: 5.2,
    price: 76.00,
    currency: "$",
    languages: ["En", "It"],
    isMustSee: true,
  },
  {
    id: 2,
    hasAR: true,
    image: img2,
    title: "Private tour of Colosseum,Roman Forum and Palatine lake with local guide expert",
    description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
    category: "ATTRACTIONS & GUIDED TOURS",
    rating: 5.2,
    price: 105.00,
    currency: "$",
    languages: ["En", "It"],
    isMustSee: true,
  },
  {
    id: 3,
    hasAR: true,
    image: img3,
    title: "Best of Rome walking tour with the Spanish steps,Trevi Fountain and Pantheon",
    description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
    category: "ATTRACTIONS & GUIDED TOURS",
    rating: 5.2,
    price: 32.00,
    currency: "$",
    languages: ["En", "It"],
    isMustSee: true,
  },
  {
    id: 4,
    hasAR: true,
    image: img4,
    title: "Best of Rome walking tour with the Spanish steps,Trevi Fountain and Pantheon",
    description: "Book now for an unforgettable small-group experience to discover the Colosseum and ...",
    category: "ATTRACTIONS & GUIDED TOURS",
    rating: 5.2,
    price: 32.00,
    currency: "$",
    languages: ["En", "It"],
    isMustSee: true,
  },
];

interface ActivitiesAndServiceProps {
  onClose?: () => void;
  onActivitySelect: (activity: { description: string; price: number }) => void;
}

export const ActivitiesAndService: React.FC<ActivitiesAndServiceProps> = ({ onClose, onActivitySelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTourSelect = (tour: Tour, isSelected: boolean) => {
    if (isSelected) {
      onActivitySelect({
        description: tour.title,
        price: tour.price
      });
      onClose && onClose();
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTours = tours.filter(tour => 
    tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tour.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="activities-and-service">
      <Grid container className="activities-and-service__header" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h4" component="h1" className="activities-and-service__title">
            ACTIVITIES AND SERVICE
          </Typography>
          <Typography variant="subtitle1" className="activities-and-service__subtitle">
            Experiences provided by Sunnysyde
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField
            className="activities-and-service__search"
            variant="outlined"
            placeholder="Search Activities And Service"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton className="activities-and-service__search-button">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1} container justifyContent="flex-end">
          <IconButton 
            onClick={onClose} 
            className="activities-and-service__close-button"
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box className="activities-and-service__filters">
        {filterOptions.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            onClick={() => setActiveFilter(filter)}
            color={activeFilter === filter ? 'primary' : 'default'}
            className={`activities-and-service__filter-chip ${activeFilter === filter ? 'activities-and-service__filter-chip--active' : ''}`}
          />
        ))}
      </Box>
      <Box className="activities-and-service__tours">
        {filteredTours.map((tour) => (
          <AddOnTour
            key={tour.id}
            {...tour}
            isSelected={false}
            onSelect={(isSelected: boolean) => handleTourSelect(tour, isSelected)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ActivitiesAndService;