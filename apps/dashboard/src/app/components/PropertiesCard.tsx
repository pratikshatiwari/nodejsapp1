import React, { useState, useRef } from 'react';
import SortByOption from './sortByOption';
import FilterByOption from './filterOption';
import PropertyCard from './Property-card';
import Grid from '@mui/material/Grid2';
import image from "../../assets/image.png";
import { Box, Button, Typography } from '@mui/material';
import sortIcon from '../../assets/sort_icon.svg';
import filterIcon from '../../assets/filter_icon.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePropertyContext } from '../PropertyContext';

const PropertyCardExample: React.FC = () => {
  const [sortList, setSortList] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string | null>(null);
  const [sortedProperties, setSortedProperties] = useState<typeof properties>([]);

  const [filterList, setFilterList] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<number | null>(null);

  const { properties } = usePropertyContext();

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
  }interface VerifiedReviews {
    rating: number;
    comment: string;
    good_review: string;
    bad_review: string;
    date: string;
    type: string;
  }
  interface askQuestion {
    question: string,
    customer_name: string
  }
  type Property = {
    images: string[];
    price: number;
    name: string;
    location: string;
    rating: number;
    guestFav: boolean;
    amenities: string[];
    manager: ManagerDetails;
    awards: Award[];
    checkin: string; checkout: string; reviews: number, reviewsIcons: IconItem[],
    verifiedReviews: VerifiedReviews[];

    questions: askQuestion[];
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortProperties = (properties: Property[], sortType: string | null) => {
    switch (sortType) {
      case 'rating':
        return properties.slice().sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
      case 'price-high-to-low':
        return properties.slice().sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
      case 'price-low-to-high':
        return properties.slice().sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
      default:
        return properties;
    }
  }

  const applyFilter = (filterType: string, value: number) => {
    setFilterType(filterType);
    setFilterValue(value);
    setFilterList(false);
  };
  useEffect(() => {
    let filtered = properties;

    if (filterType && filterValue !== null) {
      if (filterType === 'price') {
        filtered = properties.filter(property => property.price < filterValue);
      } else if (filterType === 'rating') {
        filtered = properties.filter(property => property.rating === filterValue);
      }
    }
    if (filterType != null) {
      setSortedProperties(filtered);
    }
    if (sortType != null && filterType == null) {
      setSortedProperties(sortProperties(properties, sortType));
    }
    if (sortType != null && filterType != null) {
      setSortedProperties(sortProperties(filtered, sortType));
    }

  }, [sortType, filterType, filterValue, properties, sortProperties]);

  useEffect(() => {
    if (sortType === null && filterType == null) {
      setSortedProperties(properties);
    }
  }, [filterType, properties, sortType]);

  const navigate = useNavigate();

  const handleCardClick = (property: Property) => {
    navigate('property-details', { state: { property } });
  };

  return (
    <Box style={{marginTop:370}}>
      <Grid container spacing={2}>
        {sortedProperties.map((property, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box onClick={() => handleCardClick(property)} sx={{ cursor: 'pointer' }}>
              <PropertyCard {...property} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyCardExample;